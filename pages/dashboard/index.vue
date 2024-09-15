<script setup>
definePageMeta({
  layout: 'dashboard',
})

const date = ref(new Date())

const attrs = ref([
  {
    key: 'today',
    highlight: {
      color: 'green',
      fillMode: 'solid',
    },
    dates: new Date(),
  },
])

const dashboardCards = [
  {
    title: 'Land Parcels',
    number: '267,800',
    icon: 'i-ic-outline-rectangle',
    // icon: 'i-ic-outline-home-work',
    color: 'orange',
  },
  {
    title: 'Total Area (Acres)',
    number: '5,804,854',
    icon: 'i-ic-outline-polyline',
    color: 'yellow',
  },
  {
    title: 'Property Owners',
    number: '99,670',
    icon: 'i-heroicons-user-group-20-solid',
    color: 'blue',
  },
  {
    title: 'Regions (Counties)',
    number: '47',
    icon: 'i-ic-outline-location-on',
    color: 'purple',
  },
]

const colorToRgb = (color) => {
  const colors = {
    blue: '0, 0, 255',
    red: '255, 0, 0',
    green: '0, 128, 0',
    yellow: '255, 255, 0',
    purple: '128, 0, 128',
    orange: '255, 165, 0',
    black: '0, 0, 0',
    white: '255, 255, 255',
    // Add more colors as needed
  }
  return colors[color] || '0, 0, 0' // Default to black if color is not found
}

const events = [
  {
    name: 'Annual General Meeting',
    date: 'September 20, 2024',
    tile: '10:00 AM',
  },
  {
    name: 'Land Surveyors Conference',
    date: 'October 1, 2024',
    tile: '08:00 AM',
  },
  { name: 'SACCO Meeting', date: 'September 20, 2024', tile: '05:00 PM' },
  {
    name: 'Urban Planning Annual Conference',
    date: 'December 02, 2024',
    tile: '09:00 AM',
  },
  {
    name: 'Land Valuers Conference',
    date: 'September 20, 2024',
    tile: '10:00 AM',
  },
]
</script>

<template>
  <div class="space-y-5">
    <div class="flex gap-4 shadow-md bg-white rounded-lg px-4 py-2">
      <div>
        <UAvatar icon="i-heroicons-user" size="lg" />
      </div>
      <div class="flex flex-col text-gray-500">
        <h2 class="font-light text-xl text-primary-900">Welcome back!</h2>
        <p class="text-base font-base">
          Engineering Efficiency in Land Administration.
        </p>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
      <div
        v-for="(card, index) in dashboardCards"
        :key="index"
        class="bg-white rounded-md border-slate-300 p-5 flex flex-col shadow-md"
      >
        <div>
          <div class="flex items-center justify-between">
            <h3 class="text-sm font-medium text-gray-400">
              {{ card.title }}
            </h3>
            <div
              class="rounded-full border border-1 w-8 h-8 shrink-0 flex items-center justify-center"
              :style="{
                borderColor: card.color,
                backgroundColor: `rgba(${colorToRgb(card.color)}, 0.1)`,
              }"
            >
              <UIcon
                :name="card.icon"
                class="w-5 h-5"
                :class="`text-${card.color}-500`"
              />
            </div>
          </div>
          <UDivider class="py-2" />
          <div>
            <h1 class="font-bold text-3xl text-gray-700">{{ card.number }}</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="block md:flex gap-5">
      <div class="bg-white rounded-md p-5">
        <client-only>
          <h2 class="mb-5 font-bold text-xl">Calendar</h2>
          <div class="w-full relative">
            <VCalendar v-model="date" class="w-[500px] absolute" />
          </div>
        </client-only>
      </div>
      <!-- <div class="flex-1 bg-white rounded-md p-5"> -->
      <div class="bg-white rounded-md antialiased flex-1">
        <div class="max-w-6xl px-4 py-8 mx-auto lg:px-6 sm:py-5 lg:py-10">
          <div class="max-w-3xl mx-auto text-center">
            <h2
              class="text-3xl font-extrabold leading-tight tracking-tight text-gray-900"
            >
              Upcoming events
            </h2>

            <div class="mt-4">
              <a
                href="#"
                title=""
                class="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                All Events
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div v-for="(event, index) in events" :key="index" class="">
            <UCard class="mb-5">
              <div class="flex">
                <div class="flex-shrink-0 mr-6">
                  <UIcon
                    name="i-ic-twotone-edit-calendar"
                    class="w-12 h-12 text-primary-500"
                  />
                </div>
                <div>
                  <h3 class="text-base font-semibold text-gray-700">
                    {{ event.name }}
                  </h3>
                  <p class="text-sm text-gray-500">
                    {{ event.date }} at {{ event.tile }}
                  </p>
                </div>
              </div>
            </UCard>
          </div>
        </div>
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>

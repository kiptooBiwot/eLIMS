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
    title: 'Properties',
    number: '23,800',
    icon: 'i-ic-outline-home-work',
    color: 'orange',
  },
  {
    title: 'Surveyors',
    number: '5,670',
    icon: 'i-heroicons-user-group-20-solid',
    color: 'blue',
  },
  {
    title: 'Land Acreage',
    number: '104,854',
    icon: 'i-ic-outline-polyline',
    color: 'yellow',
  },
  {
    title: 'Surveyors',
    number: '5,670',
    icon: 'i-heroicons-user-group-20-solid',
    color: 'red',
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
</script>

<template>
  <div class="space-y-5">
    <div class="flex gap-4 bg-white rounded-lg px-4 py-2">
      <div>
        <UAvatar icon="i-heroicons-user" size="lg" />
      </div>
      <div class="flex flex-col text-gray-500">
        <h2 class="font-light text-xl text-primary-500">Welcome back!</h2>
        <p class="text-base font-light">
          Happy to see you again on your dashboard.
        </p>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
      <div
        v-for="(card, index) in dashboardCards"
        :key="index"
        class="bg-white rounded-md border-slate-300 p-5 flex flex-col"
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

    <div class="w-full bg-white rounded-md p-5">
      <client-only>
        <h2 class="mb-5 font-bold text-xl">Calendar</h2>
        <div class="w-full relative">
          <VCalendar v-model="date" class="w-[500px] absolute" />
        </div>
        <!-- <h2>Date Picker</h2> -->
        <!-- <VDatePicker v-model="date" :attributes="attrs" class="w-full" /> -->
      </client-only>
    </div>
  </div>
</template>

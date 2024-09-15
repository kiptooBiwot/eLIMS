<script setup>
import { useValuersStore } from '@/stores/valuers'

definePageMeta({
  layout: 'dashboard',
})

const valuersStore = useValuersStore()

onMounted(() => {
  valuersStore.fetchValuers()
})

const searchQuery = ref('')

// Computed property to filter properties by titleDeedNumber
const filteredValuers = computed(() => {
  if (!searchQuery.value) {
    // If no search query, return all properties
    return valuersStore.valuers.valuers
  }

  // Filter properties by titleDeedNumber
  return valuersStore.valuers.valuers.filter((property) =>
    property.licenseNumber
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase())
  )
})
</script>

<template>
  <div class="w-full bg-white rounded-md shadow-sm p-8">
    <h3 class="text-primary-500 font-bold text-2xl">Registered Valuers</h3>

    <div class="w-full">
      <!-- Filter form -->
      <div class="py-5">
        <UFormGroup label="Enter the valuer's license number" class="">
          <UInput
            v-model="searchQuery"
            icon="i-heroicons-magnifying-glass-20-solid"
            size="md"
            color="white"
            :trailing="false"
            placeholder="Search by Valuer's License Number..."
          />
        </UFormGroup>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        <div v-for="(valuer, index) in filteredValuers" :key="index">
          <UCard class="">
            <div class="flex justify-center mb-3">
              <img
                src="/images/profile.svg"
                alt=""
                class="w-[100px] rounded-full"
              />
            </div>
            <div class="text-sm text-center space-y-1">
              <div class="">
                <span class="text-gray-900 text-xs">Name:</span>
                {{ valuer.firstName }} {{ valuer.lastName }}
              </div>
              <p>
                <span class="text-gray-900 text-xs">License Number:</span>
                {{ valuer.licenseNumber }}
              </p>
              <p>
                <span class="text-gray-900 text-xs">Email:</span>
                {{ valuer.email }}
              </p>
              <p>
                <span class="text-gray-900 text-xs">Phone Number:</span>
                {{ valuer.phoneNumber }}
              </p>
              <p>
                <span class="text-gray-900 text-xs">Company Name:</span>
                {{ valuer.companyName }}
              </p>
              <p>
                <span class="text-gray-900 text-xs">Location:</span>
                {{ valuer.county }}
              </p>
            </div>
          </UCard>
        </div>
      </div>
    </div>
  </div>
</template>

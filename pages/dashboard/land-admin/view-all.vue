<script setup>
import { usePropertyStore } from '@/stores/properties'

definePageMeta({
  layout: 'dashboard',
})

const propertyStore = usePropertyStore()

onMounted(() => {
  propertyStore.fetchProperties()
})

const searchQuery = ref('')

// Computed property to filter properties by titleDeedNumber
const filteredProperties = computed(() => {
  if (!searchQuery.value) {
    // If no search query, return all properties
    return propertyStore.properties.landParcels
  }

  // Filter properties by titleDeedNumber
  return propertyStore.properties.landParcels.filter((property) =>
    property.titleDeedNumber
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase())
  )
})
</script>

<template>
  <div class="w-full bg-white rounded-md shadow-sm p-8">
    <h3 class="text-primary-500 font-bold text-2xl">All Properties</h3>

    <div class="w-full">
      <!-- Filter form -->
      <div class="py-5">
        <UFormGroup label="Enter Title Deed Number" class="">
          <UInput
            v-model="searchQuery"
            icon="i-heroicons-magnifying-glass-20-solid"
            size="md"
            color="white"
            :trailing="false"
            placeholder="Search by Title Deed Number..."
          />
        </UFormGroup>
      </div>

      <div
        v-for="(property, index) in filteredProperties"
        :key="index"
        class="flex flex-col"
      >
        <UCard class="mb-8">
          <div class="flex gap-5">
            <div>
              <img
                src="/images/property.svg"
                alt=""
                class="object-cover w-[150px]"
              />
            </div>
            <div class="flex flex-col space-y-3">
              <div class="flex flex-col">
                <p class="text-xs font-medium text-gray-400">
                  Ethereum Block ID
                </p>
                <p class="">
                  0xb82605566926001f77be09967b55cfca3aaa38dad6314398f2abaaaaac99d29b
                </p>
              </div>
              <div class="block md:flex justify-between text-sm">
                <div class="flex flex-col">
                  <p class="text-xs font-medium text-gray-400">
                    Title Deed Number
                  </p>
                  <p class="">{{ property.titleDeedNumber }}</p>
                </div>
                <div class="flex flex-col">
                  <p class="text-xs font-medium text-gray-400">Land Size</p>
                  <p class="">{{ property.landSize }} HA</p>
                </div>
                <div class="flex flex-col">
                  <p class="text-xs font-medium text-gray-400">Land Use</p>
                  <p class="">{{ property.landUse }}</p>
                </div>
                <div class="flex flex-col">
                  <p class="text-xs font-medium text-gray-400">Land Location</p>
                  <p class="">{{ property.location }}</p>
                </div>
              </div>
              <div class="flex flex-col">
                <p class="text-xs font-medium text-gray-400">Land Status</p>
                <div>
                  <UBadge
                    :color="property.landStatus == 'active' ? 'green' : 'red'"
                    variant="subtle"
                    >{{ property.landStatus }}</UBadge
                  >
                </div>
              </div>
            </div>
          </div>
        </UCard>
      </div>
    </div>
  </div>
</template>

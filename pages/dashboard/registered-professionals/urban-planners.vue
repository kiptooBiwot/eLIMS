<script setup>
definePageMeta({
  layout: 'dashboard',
})
</script>

<template>
  <div class="w-full bg-white rounded-md shadow-sm p-8">
    <h3 class="text-primary-500 font-bold text-2xl">
      Registered Urban Planners
    </h3>

    <div class="w-full">
      <!-- Filter form -->
      <div class="py-5">
        <UFormGroup label="Enter the license number" class="">
          <UInput
            v-model="searchQuery"
            icon="i-heroicons-magnifying-glass-20-solid"
            size="md"
            color="white"
            :trailing="false"
            placeholder="Search by License Number..."
          />
        </UFormGroup>
      </div>
      <h3 class="text-3xl font-light">Coming soon!</h3>
    </div>
  </div>
</template>

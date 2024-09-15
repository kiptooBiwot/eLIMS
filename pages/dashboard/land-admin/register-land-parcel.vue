<script setup>
definePageMeta({
  layout: 'dashboard',
})

const status = ['Active', 'Disputed']
const use = ['Residential', 'Commercial', 'Agricultural']

const location = ref('')
const latitude = ref('')
const upi = ref('')
const longitude = ref('')
const titleDeedNumber = ref('')
const landStatus = ref('')
const landUse = ref('')
const landSize = ref(0)
</script>

<template>
  <div class="bg-white py-10 px-3 md:px-10 rounded-lg shadow-md">
    <h3 class="font-bold text-center text-xl mb-5 text-primary-500">
      Register A Land Parcel
    </h3>
    <div>
      <form action="" class="space-y-5">
        <fieldset class="border py-5 px-4 md:px-8 rounded-lg">
          <legend class="font-medium text-sm px-1 text-gray-600">
            Land Details
          </legend>
          <div class="block md:flex gap-5 w-full">
            <div class="flex-1 space-y-5 mb-5 md:mb-0">
              <UFormGroup label="County">
                <UInput
                  v-model="location"
                  placeholder="Enter the location of the  parcel of land"
                />
              </UFormGroup>
              <UFormGroup label="Unique Parcel Identifier">
                <UInput
                  v-model="upi"
                  placeholder="What is the unique identifier of the parcel of land"
                />
              </UFormGroup>
              <UFormGroup label="Latitude">
                <UInput
                  v-model="latitude"
                  placeholder="Enter the latitude of the  parcel of land"
                />
              </UFormGroup>
              <UFormGroup label="Longitude">
                <UInput
                  v-model="longitude"
                  placeholder="Enter the longitude of the  parcel of land"
                />
              </UFormGroup>
            </div>
            <div class="flex-1 space-y-5">
              <UFormGroup label="Title Deed Number">
                <UInput
                  v-model="titleDeedNumber"
                  placeholder="Enter the title deed number of the  parcel"
                />
              </UFormGroup>
              <UFormGroup label="Land Parcel Size">
                <UInput
                  v-model="landSize"
                  type="number"
                  placeholder="What is the size of the land parcel?"
                />
              </UFormGroup>
              <UFormGroup label="Land Status">
                <USelect
                  v-model="landStatus"
                  placeholder="What is the land status?"
                  :options="status"
                />
              </UFormGroup>
              <UFormGroup label="Land Use">
                <USelect
                  v-model="landUse"
                  placeholder="Select the use of the land"
                  :options="use"
                />
              </UFormGroup>
            </div>
          </div>
        </fieldset>
        <div class="pt-5">
          <UDivider />
        </div>

        <div class="flex justify-between py-5">
          <UButton size="lg" color="yellow" variant="outline" @click="reset"
            >Reset</UButton
          >

          <UButton size="lg" color="green" @click="submit">Submit</UButton>
        </div>
      </form>
    </div>
  </div>
</template>

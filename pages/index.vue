<script setup>
definePageMeta({
  // middleware: ['auth'],
})

const router = useRouter()

const goToSignup = () => {
  router.push('/signin')
}
</script>

<template>
  <div class="h-screen">
    <div
      class="grid grid-cols-1 md:grid-cols-2 py-24 md:py-0 min-h-screen bg-apple-50 items-center justify-center"
    >
      <div
        class="px-5 w-full pt-0 lg:pt-10 mb-10 md:mb-0 md:w-3/4 md:px-0 mx-auto"
      >
        <h1 class="text-5xl lg:text-6xl font-bold py-5 tracking-wide">
          Enhancing your Operational
          <span class="text-primary-500">Efficiency</span>
        </h1>
        <hr class="w-24 border-1 border-gray-300" />
        <p class="py-3 text-sm lg:text-base">
          Affording land administrators and state officers a secure, robust, and
          scalable land and property transaction and administration platform.
        </p>

        <UButton size="xl" class="mt-2 md:my-6" @click="goToSignup"
          >Get Started</UButton
        >
      </div>
      <div
        class="h-full bg-primary-50 flex items-center px-5 md:px-0 justify-center"
      >
        <img
          src="/images/property_elims.jpg"
          alt=""
          class="w-full md:w-full h-full object-cover object-right"
        />
      </div>
    </div>
  </div>
</template>

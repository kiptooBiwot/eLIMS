<script setup>
const fullName = ref('')
const email = ref('')
const password = ref('')
</script>

<template>
  <div class="w-full min-h-screen bg-primary-50">
    <div class="block md:flex justify-center items-center min-h-screen">
      <div class="w-full md:w-2/3 flex items-center justify-center">
        <img
          src="/images/signin.webp"
          class="object-contain mt-[50px] mb-[30px] md:mt-0 w-[280px] md:w-full"
          alt=""
        />
      </div>
      <div class="w-full md:w-1/3 flex items-center justify-center">
        <div
          class="w-full md:w-full mx-10 bg-white shadow-md rounded-xl py-8 px-8"
        >
          <h2 class="me-4 text-3xl text-center font-semibold mb-5">Sign Up</h2>
          <!--Sign in section-->

          <form action="" class="space-y-3">
            <UFormGroup label="Full Name">
              <UInput v-model="fullName" placeholder="Enter your full name" />
            </UFormGroup>
            <!-- Email input -->
            <UFormGroup label="Email">
              <UInput v-model="email" placeholder="you@example.com" />
            </UFormGroup>
            <!-- Password input -->
            <UFormGroup label="Password">
              <UInput
                v-model="password"
                type="password"
                placeholder="Enter your password"
              />
            </UFormGroup>

            <div class="flex justify-between pt-5">
              <!-- <UButton variant="outline" color="orange" label="Cancel" /> -->
              <UButton color="primary" block label="Sign Up" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

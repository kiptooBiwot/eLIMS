<script setup>
// import { useAuthStore } from '~/stores/auth.js'
// import { useGeneralStore } from '~/stores/general'

// const authStore = useAuthStore()
// const generalStore = useGeneralStore()
// const router = useRouter()
// const toast = useToast()

// const isSideMenuOpen = ref(false)
const isNotificationsMenuOpen = ref(false)
const isProfileMenuOpen = ref(false)
const dark = ref(false)

// const toggleSideMenu = () => {
//   generalStore.isSideMenuOpen = !generalStore.isSideMenuOpen
// }
const toggleProfileMenu = () => {
  isProfileMenuOpen.value = !isProfileMenuOpen.value
}
const closeProfileMenu = () => {
  isProfileMenuOpen.value = !isProfileMenuOpen.value
}

const runSignOut = async () => {
  const response = await authStore.signOut()

  if (response) {
    toast.add({
      id: Math.random().toString().substring(2, 10),
      title: 'SUCCESS',
      description: response.message,
      icon: 'i-heroicons-check-circle',
      color: 'apple',
      timeout: 4000,
    })
  }

  if (response.error) {
    toast.add({
      id: Math.random().toString().substring(2, 10),
      title: 'ERROR',
      description: response.error.message,
      icon: 'i-mdi-alert-circle-outline',
      color: 'rose',
      timeout: 4000,
      // ui: "{ default: { color: 'bg-rose-100 text-rose-600' } }"
    })
  }
  router.push('/signin')
}
</script>

<template>
  <header
    class="z-10 py-3 bg-white shadow-md rounded-lg fixed top-2 right-2 left-2 md:ml-64"
  >
    <div
      class="container flex items-center justify-between h-full px-6 mx-auto text-apple-500"
    >
      <!-- Search input -->
      <div class="flex flex-1 pl-8">
        <UInput
          icon="i-heroicons-magnifying-glass-20-solid"
          size="sm"
          color="white"
          :trailing="false"
          placeholder="Search..."
        />
      </div>
      <ul class="flex items-center flex-shrink-0 space-x-6">
        <!-- Notifications menu -->
        <li class="relative">
          <div class="mr-5 relative text-gray-500">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span
              class="absolute bg-red-500 text-red-100 py-0.5 px-1.5 text-xs rounded-full font-semibold -right-1 -top-2"
              >5</span
            >
            <!-- <span class="absolute w-4 h-4 items-center justify-center bg-red-700 rounded-full text-red-100 font-semibold text-xs -right-1 -top-2">10</span> -->
          </div>
        </li>
        <!-- Profile menu -->
        <li class="relative">
          <div @click="toggleProfileMenu" @keydown.escape="closeProfileMenu">
            <UAvatar icon="i-heroicons-user" chip-color="green" size="sm" />
          </div>
          <template v-if="isProfileMenuOpen">
            <ul
              x-transition:leave="transition ease-in duration-150"
              x-transition:leave-start="opacity-100"
              x-transition:leave-end="opacity-0"
              class="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-500 bg-white border border-gray-100 rounded-md shadow-md"
              aria-label="submenu"
              @click="closeProfileMenu"
              @keydown.escape="closeProfileMenu"
            >
              <li class="flex">
                <NuxtLink
                  to="/dashboard"
                  class="inline-flex items-center w-full px-2 py-1 text-sm font-semibold cursor-pointer transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800"
                >
                  <svg
                    class="w-4 h-4 mr-3"
                    aria-hidden="true"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                  <span>Profile</span>
                </NuxtLink>
              </li>
              <li class="flex">
                <NuxtLink
                  to="/dashboard"
                  class="inline-flex items-center w-full px-2 py-1 text-sm font-semibold cursor-pointer transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800"
                >
                  <svg
                    class="w-4 h-4 mr-3"
                    aria-hidden="true"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    ></path>
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span>Settings</span>
                </NuxtLink>
              </li>
              <li class="flex" @click.prevent="runSignOut">
                <span
                  to=""
                  class="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 cursor-pointer"
                >
                  <svg
                    class="w-4 h-4 mr-3"
                    aria-hidden="true"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    ></path>
                  </svg>
                  <span>Log out</span>
                </span>
              </li>
            </ul>
          </template>
        </li>
      </ul>
    </div>
  </header>
</template>

<style></style>

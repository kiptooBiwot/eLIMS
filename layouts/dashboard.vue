<script setup>
// Dynamic menu data
const menus = ref([
  {
    title: 'Dashboard',
    icon: 'i-heroicons-rectangle-group',
    url: '/dashboard/',
  },
  {
    title: 'Land Administration',
    icon: 'i-heroicons-adjustments-horizontal',
    children: [
      {
        title: 'Land Registration',
        url: '/dashboard/land-admin/register-land-parcel',
      },
      { title: 'View Properties', url: '/dashboard/land-admin/view-all' },
      { title: 'Change Land Tenure', url: '/dashboard/property_registration' },
      {
        title: 'Ownership Management',
        url: '/dashboard/property_registration',
      },
      { title: 'Deed Management', url: '/dashboard/property_registration' },
      { title: 'Parcel Mapping', url: '/dashboard/property_registration' },
    ],
  },
  // {
  //   title: 'Change of Land Tenure',
  //   icon: 'i-heroicons-document-text',
  //   children: [
  //     { title: 'Change Land Status', url: '/dashboard/' },
  //     { title: 'Change Land Status', url: '/dashboard/' },
  //   ],
  // },
  {
    title: 'Registered Professionals',
    icon: 'i-heroicons-user-group',
    children: [
      {
        title: 'Land Surveyors',
        url: '/dashboard/registered-professionals/land-surveyors',
      },
      {
        title: 'Land Valuers',
        url: '/dashboard/registered-professionals/land-valuers',
      },
      {
        title: 'Urban Planners',
        url: '/dashboard/registered-professionals/urban-planners',
      },
    ],
  },
  {
    title: 'Property Valuation',
    icon: 'i-heroicons-currency-dollar',
    url: '/dashboard/property-valuation',
    // children: ['Submenu 2-1', 'Submenu 2-2'],
  },
  {
    title: 'Land Use Management',
    icon: 'i-heroicons-clipboard-document-list',
    // children: ['Submenu 3-1', 'Submenu 3-2'],
  },
  {
    title: 'Development Control',
    icon: 'i-heroicons-building-office-2',
  },
  {
    title: 'Permits and Licensing',
    icon: 'i-ic-outline-assured-workload',
    // children: ['Submenu 2-1', 'Submenu 2-2'],
  },
  {
    title: 'Litigations and Contracts',
    icon: 'i-ic-outline-handshake',
    // children: ['Submenu 3-1', 'Submenu 3-2'],
  },
])

// Store the open state for each menu
const openMenus = ref([])

// State to track sidebar visibility on small screens
const isSidebarOpen = ref(false)

// Toggle the sidebar open/close on small screens
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

// Toggle the menu open/close state
const toggleMenu = (index) => {
  openMenus.value[index] = !openMenus.value[index]
}
</script>

<template>
  <div class="flex h-screen">
    <!-- Toggle button for small screens -->
    <button
      @click="toggleSidebar"
      class="fixed top-2 left-2 z-50 py-[3px] px-[6px] rounded-lg shadow-md bg-primary-500/75 text-white md:hidden flex items-center"
    >
      <UIcon
        :name="
          isSidebarOpen ? 'i-heroicons-x-mark-16-solid' : 'i-heroicons-bars-3'
        "
        class="w-7 h-7"
      />
    </button>

    <!-- Sidebar -->
    <aside
      :class="[
        'bg-gray-800 text-white fixed top-0 left-0 h-full overflow-y-auto w-64 z-40 transform transition-transform duration-300',
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full',
        'md:translate-x-0',
      ]"
    >
      <div class="p-4 font-bold text-lg bg-saddle-100">
        <div class="flex gap-2 mt-5">
          <ElimsLogo />
          <!-- <UIcon name="i-heroicons-map" class="w-8 h-8 text-primary-500" />
          <h3 class="font-bold text-primary text-2xl">eLIMS</h3> -->
        </div>
      </div>
      <hr class="border-1 border-slate-600" />
      <nav>
        <ul>
          <li
            v-for="(menu, index) in menus"
            :key="index"
            class="p-2 rounded-md cursor-pointer"
          >
            <div
              class="flex justify-between items-center hover:bg-slate-700 hover:text-primary-500 py-2 px-2 rounded-md"
              @click="menu.children ? toggleMenu(index) : navigateTo(menu.url)"
            >
              <div class="flex items-center gap-2 text-sm">
                <!-- Parent Icon -->
                <span class="">
                  <!-- <i class="fa fa-folder"></i> -->
                  <UIcon :name="menu.icon" class="w-6 h-6" />
                </span>

                <span>{{ menu.title }}</span>
              </div>
              <!-- Open/Close Icon -->
              <div v-if="menu.children">
                <UIcon
                  :name="
                    openMenus[index]
                      ? 'i-heroicons-chevron-up-20-solid'
                      : 'i-heroicons-chevron-down-20-solid'
                  "
                  class="w-5 h-5"
                />
              </div>
            </div>

            <!-- Child items (visible on click) -->
            <ul
              v-if="openMenus[index]"
              class="pl-2 mt-2 border-l border-slate-600 ml-8"
            >
              <li
                v-for="(child, childIndex) in menu.children"
                :key="childIndex"
                class="py-2 hover:bg-slate-700 hover:text-primary-500 rounded-md flex items-center text-xs pl-2"
                @click="navigateTo(child.url)"
              >
                <!-- <span class="mr-2">
                </span> -->
                {{ child.title }}
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>

    <div class="flex-1 min-h-screen bg-primary-50 p-2 md:ml-64 overflow-auto">
      <div class="mb-16">
        <DashboardHeader />
      </div>
      <!-- Main content -->
      <main class="p-0 md:p-4 md:ml-0 h-full">
        <slot />
      </main>
    </div>
  </div>
</template>

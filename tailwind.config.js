/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter"],
        serif: ["Inter"],
      },
      colors: {
        'saddle': {
          '50': '#f9f7ed',
          '100': '#f2edcf',
          '200': '#e6daa2',
          '300': '#d7c06d',
          '400': '#cba844',
          '500': '#bb9337',
          '600': '#a1752d',
          '700': '#815727',
          '800': '#6c4827',
          '900': '#4d321f',
          '950': '#362012',
        },

      }
    },
  },
  plugins: [],
}


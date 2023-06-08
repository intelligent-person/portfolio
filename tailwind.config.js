/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        'primary':'#D76627',
        'secondary':'#61DAFB',
        'dark': '#111320',
        'light': '#F8DCCD',
        'grey': '#2D303D',
        'dark-blue': '#1E2235'
      }
    },
  },
  plugins: [],
}


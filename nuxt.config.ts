// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-viewport',
    'nuxt-jsonld',
    // '@nuxtjs/axios',
    ['nuxt-mail', {
      message: {
        to: 'ivankupach@gmail.com',
      },
      smtp: {
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD
        },
      },
    }],
  ]
})

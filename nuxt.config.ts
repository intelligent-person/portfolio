// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/jpeg', href: "/favicon.jpeg" }]
    }
  },
  plugins: [{ src: '~/plugins/vercel.ts', mode: 'client' }],
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-viewport',
    'nuxt-jsonld',
    '@nuxtjs/robots',
    'nuxt-security',
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

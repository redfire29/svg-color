// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/svg-color/'
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-lodash'
  ],
  devtools: { enabled: true },
  tailwindcss: {
    cssPath: [
      '~/assets/css/main.css',
      {
        injectPosition: 'last',
      },
    ],
    configPath: 'tailwind.config.js',
    viewer: false,
  },
})

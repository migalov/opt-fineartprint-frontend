// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/styles/mixins/breakpoints.scss',
    '~/assets/styles/global.scss'
  ],
  modules: [
    '@nuxt/image',
    '@nuxtjs/style-resources',
    '@nuxtjs/tailwindcss'
  ],
  image: {
    // Options
  }
})
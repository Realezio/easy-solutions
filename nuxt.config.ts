// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-04-03',
  devtools: {
    enabled: true,
  },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/seo',
    '@nuxtjs/tailwindcss',
    'nuxt-umami',
    '@nuxt/icon',
    '@nuxtjs/google-fonts',
  ],
  css: [
    '@/assets/scss/global.scss'
  ],
  googleFonts: {
    preload: true,
    families: {
      'Montserrat': true,
      'Quantico': true
    }
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  umami: {
    enabled: process.env.NODE_ENV !== 'development',
  },
})
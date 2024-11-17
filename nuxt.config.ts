// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-04-03',
  devtools: {
    enabled: process.env.NODE_ENV === 'development',
  },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/seo',
    '@nuxtjs/tailwindcss',
    'nuxt-umami',
    '@nuxt/icon',
  ],
  css: [
    '@/assets/scss/global.scss'
  ],
  eslint: {
    config: {
      stylistic: true,
    },
  },
  umami: {
    enabled: process.env.NODE_ENV !== 'development',
  },
})
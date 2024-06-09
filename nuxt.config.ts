// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  vite: {
    optimizeDeps: { exclude: ["fsevents"] },
  },

  $production: {
    routeRules: {
      '/**': { isr: true }
    }
  },
  
  $development: {
    //
  }
})

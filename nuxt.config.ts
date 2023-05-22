// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr:false,
  css:[
    'material-icons/iconfont/material-icons.css',
  ],
  app: {
    head: {
      viewport: "width=device-width, initial-scale=1.0",
      script: [],
    },
  },
})

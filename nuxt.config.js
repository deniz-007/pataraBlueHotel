export default {

  layouts: {
    layout: "~/layouts/layout.vue",
    index: "~/layouts/index.vue",
    contact: "~/layouts/contact.vue",
    blueHotel: "~/layouts/blueHotel.vue",
  },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'patarabluehotel',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  // plugins: [{ src: '~/plugins/google-maps.js' }],



// Auto import components: https://go.nuxtjs.dev/config-components
  components: true,


  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    'nuxt-i18n',

    // 'vuejs-google-maps/nuxt'
  ],
  i18n: {
    defaultLocale: process.env.VUE_APP_DEFAULT_LOCALE,
    locales: [
      { code: 'tr', iso: 'tr-TR', file: 'tr.json' },
      { code: 'en', iso: 'en-US', file: 'en.json' }
    ],
    vueI18n: {
      fallbackLocale: process.env.VUE_APP_DEFAULT_LOCALE,
      messages: {
        tr: require('./locales/tr.json'),
        en: require('./locales/en.json'),
      }
    }
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}



export default {

  layouts: {

  },

  ssr: false,

  target: 'static',

  head: {
    title: 'Patara Blue Hotel',
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

  css: [
  ],

  components: '~/components',

  buildModules: [
  ],

  modules: [
    'bootstrap-vue/nuxt',
    'nuxt-i18n',

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
  build: {
  }
}



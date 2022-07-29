export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  // ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Japtini Energy',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'An African Based Renewable Energy Company established to fill the energy gap across Africa' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'Keywords', content: 'Japtini, Japtini Energy, Energy, Renewable Energy, Solar Home Systems, Stand-Alone Solar, SHS, Mini-Grid Services, Energy Equipment Financing, off-grid energy, solar systems integration' },
      { name: 'theme-color', content: '#00B0F0' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/je-icon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/fonts.css',
    '@/assets/css/styles.css',
    'materialize-css/dist/css/materialize.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '@/plugins/fullpage.js',
      ssr: false
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@fullpage/nuxt-fullpage'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

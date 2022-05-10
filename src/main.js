import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import * as VueGoogleMaps from 'vue2-google-maps'
import "@/assets/styles/main.css"
import VuePageTitle from 'vue-page-title'


Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_MAPS_API_KEY
  },
})

Vue.use(VuePageTitle, {
  // prefix: 'My App - ',
  prefix: 'Cordoverse - '
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

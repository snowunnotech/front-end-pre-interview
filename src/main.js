import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap'
import VeeValidate from 'vee-validate'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VeeValidate)
Vue.component('Loading', Loading)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

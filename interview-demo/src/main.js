import Vue from 'vue'
import App from './App.vue'
import Loading from 'vue-loading-overlay'
import VeeValidate from 'vee-validate'
import zhTWValidate from 'vee-validate/dist/locale/zh_TW'
import 'vue-loading-overlay/dist/vue-loading.css'
import 'bootstrap' 

import { store } from './store'
import router from './router'

Vue.config.productionTip = false

Vue.component('Loading', Loading)

Vue.use(VeeValidate)
VeeValidate.Validator.localize('zh_TW', zhTWValidate)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

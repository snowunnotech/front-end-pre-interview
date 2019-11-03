import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import GlobalMixins from './utils/mixins/global.mixins'
import '@/utils/validate'

import 'bootstrap' // 注入 bootstrap js

Vue.config.productionTip = false
Vue.mixin(GlobalMixins)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

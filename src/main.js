import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../node_modules/bootstrap/scss/bootstrap.scss'
import date from './filter/date'
import VeeValidate from 'vee-validate'

Vue.config.productionTip = false
Vue.use(VeeValidate)
Vue.filter('date', date)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

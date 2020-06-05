import Vue from 'vue'
import App from './App.vue'
import api from './api'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  api,
  render: h => h(App)
}).$mount('#app')

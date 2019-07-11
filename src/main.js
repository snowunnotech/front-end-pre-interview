import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.filter('yyyy-mm-dd', (dateString) => {
  return dateString.split('T')[0]
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

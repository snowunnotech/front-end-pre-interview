import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import moment from "moment";
import VueMomentJS from "vue-momentjs";
Vue.use(VueMomentJS, moment);  //use就是放在global的區域 vue都可用



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

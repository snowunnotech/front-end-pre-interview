import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
import VeeValidate from 'vee-validate';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
Vue.use(VeeValidate);

Vue.component('Loading', Loading);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

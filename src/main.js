import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';

import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap';
import '@/assets/scss/main.scss';

import 'vue-loading-overlay/dist/vue-loading.css';

Vue.use(VueAxios, axios);
Vue.component('Loading', Loading);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

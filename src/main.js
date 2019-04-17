import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import store from './store';

import VeeValidate from 'vee-validate';

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
Vue.use(VeeValidate);

Vue.component('Loading', Loading);



new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

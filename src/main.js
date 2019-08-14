import Vue from 'vue';
import PortalVue from 'portal-vue';
import App from './App';
import router from './router';
import store from './store';
// eslint-disable-next-line import/extensions
import 'reset-css';
import validationPlugin from './vue-utils/plugins/validation';

Vue.use(validationPlugin);
Vue.use(PortalVue);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import * as VeeValidate from 'vee-validate';
import zhTW from 'vee-validate/dist/locale/zh_TW';
import VueI18n from 'vue-i18n';
import router from './router';
import store from './store';
import App from './App.vue';
import 'bootstrap';

Vue.config.productionTip = false;
// axios.defaults.withCredentials = true;
Vue.use(VueAxios, axios);
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'zhTW',
});
Vue.use(VeeValidate, {
  events: 'input|blur', //  這是為了讓使用者離開該欄位時觸發驗證
  i18n,
  dictionary: {
    zhTW,
  },
});
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app');

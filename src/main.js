import Vue from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import store from "./store";
import router from "./router";
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";

extend("required", { ...required, message: "此為必填欄位" });
//
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");

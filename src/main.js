import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import "bootstrap/dist/css/bootstrap.css";
import {
  ValidationProvider,
  ValidationObserver,
  extend,
  configure
} from "vee-validate";
import * as rules from "vee-validate/dist/rules";

Vue.config.productionTip = false;

// vee-validate
for (let rule in rules) {
  // add the rule
  extend(rule, rules[rule]);
}
configure({ bails: false });

// Register it globally
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

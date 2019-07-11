import Vue from 'vue';
import axios from "axios";
import vuelidate from "vuelidate";
import moment from "moment";
import BootstrapVue from 'bootstrap-vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMinusCircle, faPlus, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import router from './router';
import store from './store';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import "./assets/modal.scss";


library.add(faMinusCircle, faPlus, faChevronLeft);

axios.defaults.baseURL = "https://demo.api-platform.com";


Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(vuelidate).use(BootstrapVue);
Vue.filter("limitText", (text, max) => {
	if (text.length > max) {
		return text.substring(0, max) + "...";
	} else {
		return text;
	};
});
Vue.filter("formatDate", (date, parse) => moment(date).format(parse));
Vue.config.productionTip = false;


new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')



///////////// 全局設定個區塊文字量上限 ////////////////
const setTextLimit = () => {
	const width = document.body.clientWidth;
	let textLimit;
	const textLimits = {
		small: {
			bookCardTitle: 10,
			bookCardDescription: 50,
			bookCardAuthor: 8
		},
	
		medium: {
			bookCardTitle: 16,
			bookCardDescription: 90,
			bookCardAuthor: 25
		}
	}

	if (width <= 450) {
		textLimit = textLimits.small;
	} else if (width > 450) {
		textLimit = textLimits.medium;
	};


	store.commit("SET_TEXT_LIMIT", {
		textLimit
	});
}

setTextLimit();
window.addEventListener("resize", setTextLimit);


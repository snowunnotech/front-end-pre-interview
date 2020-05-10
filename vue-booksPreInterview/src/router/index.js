import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import moment from 'moment'
import VeeValidate from 'vee-validate';

// import HelloWorld from '@/components/HelloWorld'

import BookList from "@/components/BookList";
import BookInfo from "@/components/BookInfo";
import BookEdit from "@/components/BookEdit";

Vue.use(Vuex)
Vue.use(Router)
Vue.use(VueAxios, axios)
Vue.use(VeeValidate);
Vue.prototype.$moment = moment;

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BookList',
      component: BookList
    }, {
      path: '/books/:id',
      name: 'BookInfo',
      component: BookInfo
    }, {
      path: '/books/:id/edit',
      name: 'BookEdit',
      component: BookEdit
    }, {
      path: '/create',
      name: 'BookCreate',
      component: BookEdit
    }
  ]
})

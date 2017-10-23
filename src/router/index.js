import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import swal from 'sweetalert'
import moment from 'moment'
import VeeValidate from 'vee-validate';
import Books from '@/components/Books'
import Book from '@/components/Book'
import Edit from '@/components/Edit'
import Create from '@/components/Create'

Vue.use(Vuex)
Vue.use(Router)
Vue.use(VueAxios, axios)
Vue.use(VeeValidate);
Vue.prototype.$moment = moment;

export default new Router({
    routes: [{
            path: '/',
            name: 'Books',
            component: Books
        },
        {
            path: '/book/:id',
            name: 'Book',
            component: Book
        },
        {
            path: '/edit/:id',
            name: 'Edit',
            component: Edit
        },
        {
            path: '/create',
            name: 'Create',
            component: Create
        },
        // router 預設轉址
        { path: '/*', redirect: '/' }
    ]
})
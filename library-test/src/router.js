import Vue from 'vue'
import Router from 'vue-router'
import BookList from './views/BookList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'bookList',
      component: BookList,
      meta: {
        title: '',
        navBarTitle: false,
        navbarText: 'New'
      }
    },
    {
      path: '/detail/:id',
      name: 'bookDetail',
      meta: {
        title: '',
        navBarTitle: true,
        navbarText: 'Edit'
      },
      component: () => import(/* webpackChunkName: "about" */ './views/BookDetail.vue')
    },
    {
      path: '/create',
      name: 'bookCreate',
      meta: {
        title: 'Add new book',
        navBarTitle: false,
        navbarText: 'Save'
      },
      component: () => import(/* webpackChunkName: "about" */ './views/BookEdit.vue')
    },
    {
      path: '/edit/:id',
      name: 'bookEdit',
      meta: {
        title: '',
        navBarTitle: true,
        navbarText: 'Edit'
      },
      component: () => import(/* webpackChunkName: "about" */ './views/BookEdit.vue')
    }   
  ]
})

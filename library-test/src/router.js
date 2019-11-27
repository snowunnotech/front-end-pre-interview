import Vue from 'vue'
import Router from 'vue-router'
import BookList from './views/BookList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'bookList',
      component: BookList
    },
    {
      path: '/detail',
      name: 'bookDetail',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/BookDetail.vue')
    },
    {
      path: '/create',
      name: 'bookCreate',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/BookEdit.vue')
    }

  ]
})

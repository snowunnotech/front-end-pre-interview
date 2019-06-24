import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/books/:id',
      name: 'detail',
      component: () => import('./views/Detail.vue')
    },
    {
      path: '/edit/books/:id',
      name: 'edit',
      component: () => import('./views/Edit.vue')
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('./views/CreateNew.vue')
    }
  ]
})

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
      path: '/book',
      name: 'book',
      component: () => import(/* webpackChunkName: "book" */ './views/Book.vue'),
      children: [
        {
          path: 'add',
          name: 'add',
          component: () => import(/* webpackChunkName: "add" */ './views/Add.vue')
        },
        {
          path: ':id',
          name: 'read',
          component: () => import(/* webpackChunkName: "read" */ './views/Read.vue'),
          children: [
            {
              path: 'edit',
              name: 'edit',
              component: () => import(/* webpackChunkName: "edit" */ './views/Edit.vue')
            }
          ]
        }
      ]
    }
  ]
})

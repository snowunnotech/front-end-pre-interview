import Vue from 'vue'
import Router from 'vue-router'
import Detail from './views/Detail.vue'
import Home from './views/Home.vue'
import Management from './views/Management.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/books/:id([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})',
      name: 'detail',
      component: Detail
    },
    {
      path: '/books/edit/:id([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})',
      name: 'edit',
      component: Management
    },
    {
      path: '/books/create',
      name: 'create',
      component: Management
    }
  ]
})

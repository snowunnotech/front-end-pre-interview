import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function loadView(view) {
  return () => import(`@/views/${view}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: loadView('Home')
  },
  {
    path: '/detail',
    name: 'detail',
    component: loadView('Detail')
  },
  {
    path: '/newBook',
    name: 'newBook',
    component: loadView('NewBook')
  },
  {
    path: '/edit',
    name: 'edit',
    component: loadView('NewBook')
  }
]

const router = new VueRouter({
  routes
})

export default router

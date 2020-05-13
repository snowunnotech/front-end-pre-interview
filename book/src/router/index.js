import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: '',
      bookTitle: false,
      editorBtnText: 'New'
    }
  },
  {
    path: '/newBook',
    name: 'newBook',
    component: () => import(/* webpackChunkName: "about" */ '../views/Form.vue'),
    meta: {
      title: 'Add new book',
      bookTitle: false,
      editorBtnText: 'Save'
    }
  },
  {
    path: '/books/:id',
    name: 'book',
    component: () => import(/* webpackChunkName: "about" */ '../views/Book.vue'),
    meta: {
      title: '',
      bookTitle: true,
      editorBtnText: 'Edit'
    }
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import(/* webpackChunkName: "about" */ '../views/Form.vue'),
    meta: {
      title: '',
      bookTitle: true,
      editorBtnText: 'Save'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import Router from 'vue-router'
import Books from './views/Books.vue'
import CreateBook from './views/CreateBook.vue'
import BookDetail from './views/BookDetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'Books',
    component: Books
  }, {
    path: '/CreateBook',
    name: 'CreateBook',
    component: CreateBook
  }, {
    path: '/Books/:id',
    name: 'BookDetail',
    component: BookDetail
  }]
})

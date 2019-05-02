import Vue from 'vue'
import VueRouter from 'vue-router'

import BookList from '../components/BookList'
import AddBook from '../components/AddBook'
import Book from '../components/Book'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      name: 'home',
      path: '/',
      component: BookList,
      meta: {
        keepAlive: true
      }
    },
    {
      name: 'addBook',
      path: '/add',
      component: AddBook
    },
    {
      name: 'edit',
      path: '/edit',
      component: AddBook
    },
    {
      name: 'book',
      path: '/:id',
      component: Book
    }
  ]
})
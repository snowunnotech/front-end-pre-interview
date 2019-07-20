import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: 'index/books'
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('./views/Index.vue'),
      children: [
        {
          path: 'books',
          name: 'books',
          component: () => import('./components/pages/BooksList.vue')
        },
        {
          path: 'bookDetail/:bookId',
          name: 'bookDetail',
          component: () => import('./components/pages/BookDetail.vue')
        },
        {
          path: 'addBook',
          name: 'addBook',
          component: () => import('./components/pages/AddBook.vue')
        }
      ]
    }
  ]
})

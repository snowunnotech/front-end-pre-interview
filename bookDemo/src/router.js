import Vue from 'vue'
import Router from 'vue-router'
import bookList from './views/bookList.vue'
import bookInfo from './views/bookInfo.vue'
import addBook from './views/addBook.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      meta:{
        page:0
      }
    },
    {
      path: '/bookList',
      name: 'bookList',
      component: bookList,
      meta:{
        page:1,
      }
    },
    {
      path: '/bookInfo/:id',
      name: 'bookInfo',
      component: bookInfo,
      meta:{
        page:2,
      }
    },
    {
      path: '/addBook',
      name: 'addBook',
      component: addBook,
      meta:{
        page:3,
      }
    },
  ]
})

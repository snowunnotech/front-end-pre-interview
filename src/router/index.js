import Vue from 'vue'
import Router from 'vue-router'
import BookList from '@/components/pages/BookList'
import BookDetail from '@/components/pages/BookDetail'
import BookEdit from '@/components/pages/BookEdit'
import BookCreate from '@/components/pages/BookCreate'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BookList',
      component: BookList
    },
    {
      path: '/book/:id',
      name: 'BookDetail',
      component: BookDetail
    },
    {
      path: '/BookEdit/:id',
      name: 'BookEdit',
      component: BookEdit
    },
    {
      path: '/BookCreate',
      name: 'BookCreate',
      component: BookCreate
    },
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import BookList from '@/components/BookList'
import BookInfo from '@/components/BookInfo'
import BookNew from '@/components/BookNew'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BookList',
      component: BookList
    },
    {
      path: '/books/:id',
      name: 'BookInfo',
      component: BookInfo
    },
    {
      path: '/books/:id/edit',
      name: 'BookEdit',
      component: BookNew
    },
    {
      path: '/create',
      name: 'BookCreate',
      component: BookNew
    }
  ]
})

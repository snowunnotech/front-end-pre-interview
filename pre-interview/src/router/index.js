import Vue from 'vue'
import Router from 'vue-router'
import BookList from '@/components/BookList'
import BookInfo from '@/components/BookInfo'
import BookEdit from '@/components/BookEdit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BookList',
      component: BookList
    },
    {
      path: '/info/:id',
      name: 'BookInfo',
      component: BookInfo
    },
    {
      path: '/info/:id/edit',
      name: 'BookEdit',
      component: BookEdit
    }    
  ]
})

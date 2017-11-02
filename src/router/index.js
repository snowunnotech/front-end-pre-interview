import Vue from 'vue'
import Router from 'vue-router'
import VeeValidate from 'vee-validate'
import Books from '@/components/Books'
import BookDetail from '@/components/BookDetail'
import AddNewBook from '@/components/AddNewBook'
import EditBook from '@/components/EditBook'

Vue.use(Router)
Vue.use(VeeValidate)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Books',
      component: Books
    },
    {
      path: '/book/:id',
      name: 'BookDetail',
      component: BookDetail
    },
    {
      path: '/addNewBook',
      name: 'AddNewBook',
      component: AddNewBook
    },
    {
      path: '/editBook/:id',
      name: 'EditBook',
      component: EditBook
    }
  ]
})

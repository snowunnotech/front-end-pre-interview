import Vue from 'vue'
import VueRouter from 'vue-router'
import BookList from "../components/pages/Books/BookList/BookList"
import Detail from "../components/pages/Books/BookDetail/Detail"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'BookList',
    component: BookList
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  },
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import Router from 'vue-router'
import Edit from '@/components/Edit.vue'
import Create from '@/components/Create.vue'
import Detail from '@/components/Detail.vue'
import List from '@/components/List.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/create',
      name: 'create',
      component: Create
    },
    {
      path: '/edit/books/:id',
      name: 'edit',
      component: Edit
    },
    {
      path: '/detail/books/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})

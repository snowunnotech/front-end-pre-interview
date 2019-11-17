import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    query: {
      'order[id]': 'asc',
      page: 1,
    },
    meta: {
      navTitle: '',
      bookTitle: false,
      btnText: 'New',
    },
  },
  {
    path: '/books/:id',
    name: 'book',
    component: () => import(/* webpackChunkName: "about" */ '../views/BookDetail.vue'),
    meta: {
      navTitle: '',
      bookTitle: true,
      btnText: 'Edit',
    },
  },
  {
    path: '/new',
    name: 'new',
    component: () => import(/* webpackChunkName: "about" */ '../views/UpdateBook.vue'),
    meta: {
      navTitle: 'Add new book',
      bookTitle: false,
      btnText: 'Save',
    },
  },
  {
    path: '/edit',
    name: 'edit',
    component: () => import(/* webpackChunkName: "about" */ '../views/UpdateBook.vue'),
    meta: {
      navTitle: '',
      bookTitle: true,
      btnText: 'Save',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

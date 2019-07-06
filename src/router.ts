import Vue from 'vue';
import Router from 'vue-router';
import BookList from './views/BookList/Index.vue';
import BookDetail from './views/BookDetail/Index.vue';
import BookEditing from './views/BookEditing/Index.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'BookList',
      component: BookList,
    },
    {
      path: '/bookDetail/:id',
      name: 'bookDetail',
      component: BookDetail,
    },
    {
      path: '/bookEditing/',
      name: 'bookEditing',
      component: BookEditing,
    },
  ],
});

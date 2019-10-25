import Vue from 'vue';
import Router from 'vue-router';
import BookList from '@/components/BookList.vue';
import CreateBook from '@/components/CreateBook.vue';
import BookInfo from '@/components/BookInfo.vue';
import EditBook from '@/components/EditBook.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: BookList,
    },
    {
      path: '/new',
      component: CreateBook,
    },
    {
      path: '/books/:id',
      component: BookInfo,
    },
    {
      path: '/edit/:id',
      component: EditBook,
    }
  ]
});
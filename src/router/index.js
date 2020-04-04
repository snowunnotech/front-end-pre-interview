import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: '/',
  },
  {
    path: '/',
    component: () => import('@/views/Home.vue'),

    children: [
      {
        path: '',
        component: () => import('@/views/Books.vue'),
        meta: {
          title: 'books',
        },
      },
      {
        path: '/book/:id',
        component: () => import('@/views/Book.vue'),
        meta: {
          title: 'book-detail',
        },
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
      meta: {
        keepAlive: true,
      },
    },
    {
      path: '/content/books/:id',
      name: 'content',
      component: () => import('./views/Content.vue'),
      meta: {
        keepAlive: false,
      },
    },
    {
      path: '/edit',
      name: 'edit',
      component: () => import('./views/Edit.vue'),
      meta: {
        keepAlive: false,
      },
    },
  ],
});

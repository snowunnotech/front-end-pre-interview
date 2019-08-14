import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'books',
      component: () => import('./views/books/List')
    },
    {
      path: '/new',
      name: 'books-new',
      component: () => import('./views/books/New')
    },
    {
      path: '/edit/:id',
      name: 'books-edit',
      props: route => ({ ...route.params }),
      component: () => import('./views/books/Edit')
    },
    {
      path: '/detail/:id',
      name: 'books-detail',
      props: true,
      component: () => import('./views/books/Detail')
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

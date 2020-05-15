import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/detail/:index',
    name: 'detail',
    component: () => import('../views/Detail.vue'),
  },
  {
    path: '/new',
    name: 'new',
    component: () => import('../views/New.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;

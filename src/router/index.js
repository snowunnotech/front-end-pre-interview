import Vue from "vue";
import VueRouter from "vue-router";
import BookList from "../views/BookList.vue";
import BookDetail from "../views/BookDetail.vue";
import BookCreate from "../views/BookCreate.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "BookList",
    component: BookList
  },
  {
    path: "/detail/:BookId",
    name: "BookDetail",
    component: BookDetail,
    props: true
  },
  {
    path: "/bookcreate",
    name: "BookCreate",
    component: BookCreate
  }
];

const router = new VueRouter({
  scrollBehavior(savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

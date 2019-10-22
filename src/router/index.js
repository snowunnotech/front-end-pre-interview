import Vue from "vue";
import VueRouter from "vue-router";
import BookList from "../views/BookList.vue";
import BookDetail from "../views/BookDetail.vue";
import BookEdit from "../views/BookEdit.vue";

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
    path: "/edit/:BookId",
    name: "BookEdit",
    component: BookEdit,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

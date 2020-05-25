import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

import Books from "@/components/Books.vue";
import BookDetail from "@/components/BookDetail.vue";
import AddBook from "@/components/AddBook.vue";

export default new Router({
  routes: [
    { path: "*", redirect: "/books" },

    {
      path: "/books",
      name: "Bookslist",
      component: Books
    },
    {
      path: "/books/:bookId",
      name: "Book",
      component: BookDetail
    },
    {
      path: "/addBook",
      name: "AddBook",
      component: AddBook
    }
  ]
});

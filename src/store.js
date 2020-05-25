import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: {}
  },
  actions: {
    getBooks(context) {
      const url = "https://demo.api-platform.com/books";
      axios.get(url).then(res => {
        // console.log(res.data["hydra:member"]);
        // console.log(res.data["hydra:member"][0]["@id"]);
        context.commit("GETBOOKS", res.data["hydra:member"]);
      });
    },
    back(context) {
      context.commit("BACK");
    }
  },
  mutations: {
    GETBOOKS(state, books) {
      state.books = books;
    }
  },
  getters: {
    books: state => state.books
  }
});

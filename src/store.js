import Vue from 'vue';
import Vuex from 'vuex';
import { getBooks } from './apis/booksApi';

Vue.use(Vuex);

function setBooksProp(key) {
  return (state, val) => {
    state.books[key] = val;
  };
}

export default new Vuex.Store({
  state: {
    books: {
      total: 0,
      currPage: 1,
      loading: false
      // books[1] = [{...}, {...}] ...
    }
  },
  mutations: {
    resetBooks(state) {
      state.books = {
        total: 0,
        currPage: state.books.currPage,
        loading: false
      };
    },
    setLoading: setBooksProp('loading'),
    setPage: setBooksProp('currPage'),
    setBooks(state, { books, total }) {
      state.books.total = total;
      Vue.set(state.books, state.books.currPage, books);
    }
  },
  actions: {
    async fetchBooks({ commit, state }) {
      commit('setLoading', true);
      try {
        const result = await getBooks({
          page: state.books.currPage
        });
        commit('setBooks', {
          books: result['hydra:member'],
          total: result['hydra:totalItems']
        });
      } catch (err) {
        console.log(err);
      }
      commit('setLoading', false);
    }
  }
});

import Vue from 'vue';
import Vuex from 'vuex';
import Loading from './modules/Loading';
import Books from './modules/Books';
import Book from './modules/Book';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Loading,
    Books,
    Book,
  },
});

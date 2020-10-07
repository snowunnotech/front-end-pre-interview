/* eslint no-shadow: 0 */

import Vue from 'vue';
import Vuex, { GetterTree, MutationTree, ActionTree } from 'vuex';
import State from './store_type';

Vue.use(Vuex);

const bookInit = () => ({
  '@id': '',
  isbn: '',
  title: '',
  author: '',
  description: '',
  publicationDate: new Date(),
  reviews: [],
});

const bookFormInit = () => ({
  isbn: '',
  title: '',
  author: '',
  description: '',
  publicationDate: new Date(),
  reviews: [],
});


const state: State = {
  isLoading: false,
  bookDetail: bookInit(),
  bookForm: bookInit(),
};

const mutations: MutationTree<State> = {
  TOGGLE_LOADING(state: State, b: boolean) {
    state.isLoading = b;
  },
  SET_BOOK_DETAIL(state: State, data: State['bookDetail']) {
    state.bookDetail = data;
  },
  UPDATE_BOOK(state: State, data: State['bookDetail']) {
    state.bookForm = data;
  },
};

const actions: ActionTree<State, any> = {
  isLoading({ commit }, value: boolean) {
    commit('TOGGLE_LOADING', value);
  },
  setBookDetail({ commit }, data: State['bookDetail']) {
    commit('SET_BOOK_DETAIL', data);
  },
  clearBookDetail({ commit }) {
    commit('SET_BOOK_DETAIL', bookInit());
  },
  updateBookDetail({ commit }, data: State['bookForm']) {
    const FormData: any = {};
    Object.keys(bookFormInit())
      .forEach((d: string) => {
        FormData[d] = data[d];
      });
    commit('UPDATE_BOOK', FormData);
  },
  createNewBook({ commit }) {
    commit('UPDATE_BOOK', bookFormInit());
  },
};

const getters: GetterTree<State, State> = {
  isLoading: (state: State) => state.isLoading,
  bookDetail: (state: State) => state.bookDetail,
  bookForm: (state: State) => state.bookForm,
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  strict: true,
});

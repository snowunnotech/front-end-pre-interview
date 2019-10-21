import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bookData: {},
    bookMembers: [],
    recentBook: {},
  },
  mutations: {
    BOOKDATA(state, payload) {
      state.bookData = payload;
    },
    BOOKMEMBERS(state, payload) {
      state.bookMembers = payload;
    },
    RECENTBOOK(state, payload) {
      state.recentBook = Object.assign({}, payload);
    },
  },
  actions: {
    getData(context) {
      const api = process.env.VUE_APP_APIPATH;
      axios(api, {
        method: 'GET',
        headers: {
          accept: 'application/ld+json',
        },
      }).then((res) => {
        context.commit('BOOKDATA', Object.assign({}, res.data));
        context.commit('BOOKMEMBERS', res.data['hydra:member']);
      });
    },
    getRecentBook(context, bookId) {
      const api = `${process.env.VUE_APP_APIPATH}/${bookId}`;
      axios(api, {
        method: 'GET',
        headers: {
          accept: 'application/ld+json',
        },
      }).then((res) => {
        context.commit('RECENTBOOK', res.data);
      });
    },
    editbook(context, bookTemplate) {
      const id = bookTemplate['@id'].replace('/books/', '');
      const api = `${process.env.VUE_APP_APIPATH}/${id}`;
      axios(api, {
        method: 'PATCH',
        headers: {
          Authorization: process.env.VUE_APP_TOKEN,
          accept: 'application/ld+json',
          'Content-Type': 'application/vnd.api+json',
        },
        data: bookTemplate,
      }).then((res) => {
        context.commit('RECENTBOOK', res.data);
      });
    },
    addBook(context, bookTemplate) {
      const api = process.env.VUE_APP_APIPATH;
      axios(api, {
        method: 'post',
        headers: {
          accept: 'application/ld+json',
        },
        data: bookTemplate,
      }).then((res) => {
        context.commit('RECENTBOOK', res.data);
      });
    },
  },
  modules: {
  },
});

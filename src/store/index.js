import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: [],
    url: 'https://demo.api-platform.com/books',
    page: 0,
  },
  getters: {
    books: state => state.books,
  },
  mutations: {
    getData(state, books) {
      state.books = state.books.concat(books);
    },
  },
  actions: {
    async getData({ commit, state }) {
      state.page += 1;
      const endpoint = `${state.url}?order[publicationDate]=desc&page=${state.page}`;

      try {
        const response = await fetch(endpoint);
        if (response.ok) {
          const data = await response.json();
          const books = data['hydra:member'];
          commit('getData', books);
        } else {
          throw new Error('Oh my god!');
        }
      } catch (error) {
        console.log(error);
      }
    },
    async postData({ state }, body) {
      const endpoint = state.url;

      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(body),
        });
        if (response.ok) {
          console.log('Post success!');
        } else {
          throw new Error('Oh my god!');
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {
  },
});

import axios from 'axios';

export default {
  state: {
    books: [],
  },
  mutations: {
    GETBOOKS(state, payload) {
      state.books = payload;
    },
  },
  actions: {
    getBooks(context) {
      const api = `${process.env.VUE_APP_CUSTOMPATH}/books`;
      axios.get(api).then((res) => {
        context.commit('GETBOOKS', res.data);
      });
    },
  },
  getters: {
    books(state) {
      return state.books;
    },
  },
};

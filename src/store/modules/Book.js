import axios from 'axios';

export default {
  state: {
    book: {},
  },
  mutations: {
    GETBOOK(state, payload) {
      state.book = payload;
    },
    CLEAR(state, payload) {
      state[payload] = {};
    },
  },
  actions: {
    getBook(context, payload) {
      const api = `${process.env.VUE_APP_CUSTOMPATH}/book/${payload}`;

      axios.get(api).then((res) => {
        context.commit('GETBOOK', res.data);
      });
    },
  },
  getters: {
    book(state) {
      return state.book;
    },
  },
};

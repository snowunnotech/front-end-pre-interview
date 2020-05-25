export default {
  state: {
    loading: false,
  },
  mutations: {
    CHANGELOADING(state, payload) {
      state.loading = payload;
    },
  },
};

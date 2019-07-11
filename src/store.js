import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    textLimit: {
      bookCardTitle: null,
      bookCardDescription: null,
      bookCardAuthor: null
    }
  },

  getters: {
    textLimit: state => state.textLimit
  },

  mutations: {
    SET_TEXT_LIMIT(state, { textLimit }){
      state.textLimit = textLimit;
    }
  },
  actions: {

  }
})

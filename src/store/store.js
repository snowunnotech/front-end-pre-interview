import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import * as books from "./modules/Books.js";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      key: "Persist",
      paths: ["books"]
    })
  ],
  modules: {
    books
  },
  state: {},
  mutations: {},
  actions: {}
});

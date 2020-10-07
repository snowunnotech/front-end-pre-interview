import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import book from './modules/book';

Vue.use(Vuex);

export default new Store({
  modules: {
    book,
  },
});
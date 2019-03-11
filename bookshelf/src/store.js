import Vue from 'vue'
import Vuex from 'vuex'

import Books from './store/books'
import Bar from './store/bar'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    books: Books,
    bar: Bar
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

import { state, mutations } from './basic'
import book from './book'
import form from './form'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  modules: {
    book,
    form
  }
})

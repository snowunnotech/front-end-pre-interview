import Vue from 'vue'
import Vuex from 'vuex'
import api from './modules/api'
import bookDetail from './modules/bookDetail'
import book from './modules/book'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    busyLoading: false
  },
  mutations: {
    busyLoading: (state, payload)=> {
      state['busyLoading'] = payload
    },
  },
  actions: {
    busyLoading: ({commit, state}, payload)=> {
        commit('busyLoading', payload)
        window.scrollTo(0, 0)
    },
  },
  modules: {
    api,
    bookDetail,
    book
  }
})

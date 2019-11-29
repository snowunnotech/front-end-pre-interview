import Vue from 'vue'
import Vuex from 'vuex'

import { getBookLists, getBookDetail } from './services/Book'

Vue.use(Vuex)

/* 
  get API data and do data massage to organize data for display 
  https://demo.api-platform.com/books?properties[]=&page=1 to get all books id API 
  https://demo.api-platform.com/books/${id} to get books details
*/


export default new Vuex.Store({
  state: {
    bookLists: [],
    pageConfig: {
      nowPage: 1,
      perBooksShow: 8,
      perPage: 30,
    },
    bookDetail: '',
    totalBooks: 0,
    errMsg: ''
  },  
  getters: {
    displayBookLists: (state) => {
      return state.bookLists.splice(0, state.pageConfig['perBooksShow'])
    }
  },
  mutations: {
    FETCH_LISTS(state, lists) {
      state.bookLists = lists
    },
    FETCH_TOTAL(state, total) {
      state.totalBooks = total
    },
    FETCH_BOOK_DETAIL(state, detail) {
      state.bookDetail = detail
    },
    SET_ERROR(state, err) {
      state.errMsg = err
    }
  },
  actions: {
    async fetchBookLists ({ state, commit }) {
      if(state.bookLists.length === 0) {
        const res = await getBookLists({ 'order[id]': 'asc', 'page': state.pageConfig['nowPage'] })
        if(res['@type'] === 'hydra:Error') {
          commit('SET_ERROR', res['hydra:description'])
        } else {
          state.pageConfig['nowPage']++
          commit('FETCH_LISTS', res['hydra:member'])
          commit('FETCH_TOTAL', res['hydra:totalItems'])
        }
      }
    },
    async fetchBookDetail ({ commit }, id) {
      const res = await getBookDetail(id)
      commit('FETCH_BOOK_DETAIL', res)
    }
  }
})

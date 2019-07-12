import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    booksApiDomain: 'https://demo.api-platform.com/books',
    books: [],
    booksLoaded: 6,
    detailId: '',
  },
  getters: {
    loadedBooks(state) {
      return state.books.slice(0, state.booksLoaded)
    },
    loadedToEnd(state) {
      return state.books.length <= state.booksLoaded
    },
    bookDetail(state) {
      return state.books.filter(book => book['@id'] === state.detailId)[0]
    }
  },
  mutations: {
    UPDATE_BOOKS(state, payload) {
      let books = payload.books
      state.books = [...state.books, ...books]
    },
    UPDATE_BOOK_BY_IDX(state, payload) {
      let book = payload.book, idx = payload.idx
      state.books[idx] = book
    },
    RESET_LOAD_BOOKS(state) {
      state.booksLoaded = 6
    },
    LOAD_BOOKS(state) {
      if(!this.getters.loadedToEnd) state.booksLoaded += 6
    },
    SET_DETAIL_ID(state, payload) {
      let id = payload.id
      state.detailId = id
    }
  },
  actions: {
    requestBooks({ commit, state }) {
      if(!state.books.length){
        axios.get(state.booksApiDomain)
          .then(res => {
            let books = res.data['hydra:member']
            books.forEach(book => {
              book['@id'] = book['@id'].replace(/\/books\//gi, '')
            })
            commit('UPDATE_BOOKS', {
              books
            })
          })
          .catch(e => alert(e))
      }
    },
    replaceBook({ commit, state }, payload) {
      let params = payload.params
      axios.put(`${ state.booksApiDomain }/${ state.detailId }`, params)
        .then(res => {
          if (res.status === 200) {
            let book = res.data
            commit('UPDATE_BOOK_BY_IDX', {
              book,
              idx: state.books.findIndex(book => book['@id'] === state.detailId)
            })
          } else {
            alert(`Replacing a book failed!, status code: ${res.status }`)
          }
        })
        .catch(e => alert(e))
    },
    createBook({ commit, state }, payload) {
      let params = payload.params
      axios.post(state.booksApiDomain, params)
        .then(res => {
          if(res.status === 201){
            let book = res.data
            commit('UPDATE_BOOK_BY_IDX', {
              book,
              idx: state.books.length // 最後一個位置更新
            })
          }else{
            alert(`Creating a book failed!, status code: ${res.status }`)
          }
        })
        .catch(e => alert(e))
    }
  }
})

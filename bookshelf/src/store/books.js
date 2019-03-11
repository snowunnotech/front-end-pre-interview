import Vue from 'vue'
import VueResource from 'vue-resource'
import BookApi from '@/api/books'

Vue.use(VueResource)
Vue.http.headers.common['Accept'] = 'application/vnd.api+json';
Vue.http.headers.common['Content-Type'] = 'application/vnd.api+json'

const APIURL = 'https://demo.api-platform.com'
const module = {
  namespaced: true,
  state: {
    books: [],
    currentBook: null,
    home: {
      totalItems: 1,
      currentPage: 1,
      perPage: 6
    },
    isLoading: false
  },
  getters: {
    totalPages: (state, getters) => {
      return Math.ceil(state.home.totalItems / state.home.perPage)
    },
    isLastPage: (state, getters) => {
      return state.home.currentPage == getters.totalPages
    }
  },
  mutations: {
    setLoading(state, bool) {
      state.isLoading = bool
    },
    setBooks(state, { reset = false, data }) {
      if(reset) {
        state.books = data
      }
      else {
        state.books = state.books.concat(data)
      }
    },
    clearBooks(state) {
      state.books = []
    },
    setBook(state, book) {
      state.currentBook = book
    },
    clearBook(state) {
      state.currentBook = null
    },
    setPage(state, page) {
      state.home.currentPage = page
    },
    IncreasePage(state) {
      state.home.currentPage++
    },
    setItems(state, count) {
      state.home.totalItems = count
    }
  },
  actions: {
    getBooks({ commit, state }, { page }) {
      commit('setLoading', true)
      // Vue.http.get(APIURL + '/books', {
      BookApi.get(APIURL + '/books', {
        params: {
          page: page,
          perPage: state.home.perPage
        }
      }).then(response => {
        commit('setBooks', {
          reset: page == 1,
          data: response.data
        })
        commit('setPage', response.meta.currentPage)
        commit('setItems', response.meta.totalItems)
        commit('setLoading', false)
      })
    },
    getMoreBooks({ dispatch, commit, state }) {
      commit('IncreasePage')
      dispatch('getBooks', {
        page: state.home.currentPage
      })
    },
    getBook({ commit }, { id }) {
      commit('setLoading', true)
      // Vue.http.get(APIURL + '/books/' + id)
      BookApi.get(APIURL + '/books/' + id)
      .then(response => {
        commit('setBook', response || null)
        commit('setLoading', false)
      })
    },
    addBook({ commit }, { title, desc, author, date }) {
      commit('setLoading', true)
      // Vue.http.post(APIURL + '/books', {
      return BookApi.post(APIURL + '/books', {
        title: title,
        desc: desc,
        author: author,
        date: date
      }).then(response => {
        commit('setLoading', false)
        return response
      })
    },
    deleteBook({ commit }, { id }) {
      commit('setLoading', true)
      // Vue.http.delete(APIURL + '/books/' + id)
      return BookApi.delete(APIURL + '/books/' + id)
      .then(response => {
        commit('setLoading', false)
        return response
      })
    },
    updateBook({ commit }, { id, title, desc, author, date }) {
      commit('setLoading', true)
      // Vue.http.patch(APIURL + '/books/' + id, {
      return BookApi.patch(APIURL + '/books/' + id, {
        title: title,
        desc: desc,
        author: author,
        date: date
      }).then(response => {
        commit('setBook', response || null)
        commit('setLoading', false)
        return response
      })
    }
  }
}

export default module
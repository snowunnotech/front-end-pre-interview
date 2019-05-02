import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const api = 'https://demobookapi.herokuapp.com/api/books'

export const store = new Vuex.Store({
  state: {
    books: [],
    book: {},
    isLoading: false,
    error: ''
  },
  mutations: {
    getBooks(state, payload) {
      const books = payload.map(book => {
        return {
          ...book,
          date: new Date(book.date)
        }
      })
      state.books = books
    },
    getBook(state, payload) {
      state.book = payload
    },
    addBook(state, payload) {
      const book = {
        ...payload,
        date: new Date(payload.date)
      }
      state.books.push(book)
    },
    updateLoading(state) {
      state.isLoading = !state.isLoading
    },
    updateBook(state, payload) {
      const index = state.books.findIndex(book => book._id === payload._id)
      state.books[index] = payload
      state.book = payload
    },
    deleteBook(state, payload) {
      // state.books.splice(payload, 1)
      state.books = state.books.filter(book => (
        book._id !== payload
      ))
    },
    errorHandler(state, payload) {
      state.error = payload
    }
  },
  actions: {
    getBooks(context) {
      context.commit('updateLoading')
      axios.get(api).then(res => {
        context.commit('getBooks', res.data)
        context.commit('updateLoading')
      })
    },
    getBook(context, payload) {
      context.commit('updateLoading')
      axios.get(`${api}/${payload}`).then(res => {
        context.commit('getBook', res.data)
        context.commit('updateLoading')
      })
    },
    addBook(context, payload) {
      context.commit('updateLoading')
      axios.post(api, payload).then(res => {
        context.commit('addBook', res.data)
        context.commit('updateLoading')
      })
    },
    updateBook(context, payload) {
      context.commit('updateLoading')
      axios.put(`${api}/${payload._id}`, payload).then(res => {
        context.commit('updateBook', res.data)
        context.commit('updateLoading')
      })
    },
    deleteBook(context, payload) {
      context.commit('updateLoading')
      axios.delete(`${api}/${payload}`).then(res => {
        if(res.data.success) {
          context.commit('deleteBook', payload)
          context.commit('updateLoading')
        } else {
          context.commit('errorHandler', 'delete action failed')
        }
      })
    }
  }
})
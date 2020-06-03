import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

import alertModules from './alertModule'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: [],
    nowLoaded: 6,
    bookDetailId: ''
  },
  mutations: {
    UPDATE_BOOKS (state, payload) {
      state.books = [...state.books, ...payload]
    },
    LOAD_MORE (state) {
      (state.nowLoaded + 6) >= state.books.length ? state.nowLoaded = state.books.length : state.nowLoaded += 6
    },
    GET_ID (state, payload) {
      state.bookDetailId = payload
    },
    RESET_ID (state) {
      state.bookDetailId = ''
    }
  },
  actions: {
    getBooks (context) {
      axios.get(process.env.VUE_APP_API).then(response => {
        if (response.status === 200) {
          // console.log(response.data["hydra:member"])
          let books = response.data['hydra:member']
          books.forEach(book => {
            book['@id'] = book['@id'].replace(/\/books\//gi, '')
            book.publicationDate = book.publicationDate.slice(0, 10)
          })
          context.commit('UPDATE_BOOKS', books)
        }
      })
    },
    addBook (context, payload) {
      axios.post(process.env.VUE_APP_API, payload, {
        headers: {
          'Content-Type': 'application/ld+json'
        }
      }).then((res) => {
        if (res.status === 201) {
          this.dispatch('getBooks')
          this.dispatch('updateMessage', { 'message': '上傳成功', 'status': 'success' })
          router.go(-1)
        } else {
          // context.commit('PUSH_MESSAGE', {'message': `上傳失敗: ${res.status}`})
          this.dispatch('updateMessage', { 'message': `上傳失敗: ${res.status}`, 'status': 'danger' })
        }
      })
    },
    updateBook (context, payload) {
      axios.put(`${process.env.VUE_APP_API}/${context.state.bookDetailId}`, payload).then(res => {
        if (res.status === 200) {
          this.dispatch('updateMessage', { 'message': '更新成功', 'status': 'success' })
          this.dispatch('getBooks')
          router.go(-1)
        } else {
          this.dispatch('updateMessage', { 'message': `更新失敗: ${res.status}`, 'status': 'danger' })
        }
      })
    }
  },
  getters: {
    showBookList (state) {
      return state.books.slice(0, state.nowLoaded)
    },
    bookDetail (state) {
      return state.books.filter(book => book['@id'] === state.bookDetailId)[0]
    }
  },
  modules: {
    alertModules
  }
})

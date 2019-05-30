import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    bookList: {},
    singleBook: {},
    isLoading: false,
    tempId: '' // router 跳轉時的網址
  },
  mutations: {
    LOADING (state, payload) {
      state.isLoading = payload
    },
    BOOKLIST (state, payload) {
      this.state.bookList = payload
    },
    SINGLEBOOK (state, payload) {
      this.state.singleBook = payload
    },
    TEMPID (state, payload) {
      this.state.tempId = payload
    }
  },
  actions: {
    getList (context) {
      const api = process.env.VUE_APP_API
      context.commit('LOADING', true)
      axios.get(api).then(response => {
        context.commit('BOOKLIST', response.data['hydra:member'])
        context.commit('LOADING', false)
      })
    },
    createBook (context, payload) {
      const api = process.env.VUE_APP_API
      console.log(payload)
      // payload.publicationDate = (new Date(this.payload.publicationDate).toISOString().substring(0, 10))
      context.commit('LOADING', true)
      axios.post(api, payload).then((response) => {
        context.commit('LOADING', false)
        // console.log(response)
      }).catch(() => {
        alert('error')
      })
      this.dispatch('getList')
      router.go(-1)
    },
    updateBook (context, payload) {
      const api = `https://cors-anywhere.herokuapp.com/https://demo.api-platform.com${this.state.tempId}`
      context.commit('LOADING', true)
      axios.put(api, payload).then(response => {
        context.commit('LOADING', false)
        // console.log(response)
      })
      this.dispatch('getList')
      router.go(-1)
    },
    getSingleBook () {
      router.replace({ path: `/edit${this.state.tempId}` })
    },
    toDetailBook (context, payload) {
      const id = payload['@id']
      context.commit('TEMPID', id) // to re-use router push
      router.push({ path: `/detail${id}` })
      const api = `https://cors-anywhere.herokuapp.com/https://demo.api-platform.com${id}`
      context.commit('LOADING', true)
      axios.get(api).then(response => {
        context.commit('LOADING', false)
        // console.log(response.data)
        response.data.publicationDate = new Date(response.data.publicationDate).toISOString().substring(0, 10)
        // console.log(response.data.publicationDate)
        context.commit('SINGLEBOOK', response.data) // throw data to getter to render
      })
    },
    toCreate () {
      router.push('/create')
    },
    backPage () {
      router.back()
    }
  },
  getters: {
    books (state) {
      return state.bookList
    },
    book (state) {
      return state.singleBook
    },
    isLoading (state) {
      return state.isLoading
    }
  }
})

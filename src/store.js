import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'
// import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cId: '',
    books: [],
    pagination: {
      current_page: 0,
      total_pages: 0
    },
    detailsBook: []
  },
  mutations: {
    CID (state, payload) {
      state.cId = payload
    },
    BOOKS (state, payload) {
      state.books = payload
    },
    PAGINATION (state, payload) {
      state.pagination.current_page = Number(payload['@id'].substring(12, 13))
      state.pagination.total_pages = Number(payload['hydra:last'].substring(12, 13))
    },
    DETAILSBOOK (state, payload) {
      state.detailsBook = payload
    }
  },
  actions: {
    // 取得全部書籍
    getBooks (context, page = 1) {
      const url = `${process.env.VUE_APP_APIPATH}/books?page=${page}`
      Axios.get(url).then((response) => {
        // eslint-disable-next-line quotes
        context.commit('BOOKS', response.data['hydra:member'])
        context.commit('PAGINATION', response.data['hydra:view'])
        // console.log(response.data['hydra:view']['@id'].substring(12, 13))
      })
    },
    // 取得特定書籍資料
    getDetailsBook (context, id) {
      const url = `${process.env.VUE_APP_APIPATH}/books/${id}`
      Axios.get(url).then((response) => {
        context.commit('DETAILSBOOK', response.data)
        context.commit('CID', id)
        console.log('GET', response.data)
      })
    },
    // 修改特定書籍資料
    editDetailsBook (context, data) {
      const url = `${process.env.VUE_APP_APIPATH}/books/${this.state.cId}`
      console.log('pass', data)
      Axios.put(url, data).then((response) => {
        context.dispatch('getDetailsBook', this.state.cId)
        console.log('EDIT', response.data)
        router.push(`/books/${this.state.cId}`)
      })
    },
    // 刪除特定書籍資料
    deleteDetailsBook (context) {
      const url = `${process.env.VUE_APP_APIPATH}/books/${this.state.cId}`
      Axios.delete(url).then((response) => {
        console.log(response)
        console.log('success')
      })
    },
    // 新增書籍
    createDetailsBook (context, data) {
      const url = `${process.env.VUE_APP_APIPATH}/books`
      Axios.post(url, data).then((response) => {
        context.dispatch('getBooks')
        router.push('/')
        console.log('CREATE', response)
      })
    },
    goCreate () {
      router.push('/create')
    },
    back () {
      router.go(-1)
    }
  },
  getters: {
    cId (state) {
      return state.cId
    },
    books (state) {
      return state.books
    },
    pagination (state) {
      return state.pagination
    },
    detailsBook (state) {
      return state.detailsBook
    },
    tempBook (state) {
      return state.tempBook
    }
  }
})

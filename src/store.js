import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    API: 'https://cors-anywhere.herokuapp.com/https://demo.api-platform.com',
    modal: {
      open: false,
      message: '',
      redirect: ''
    },
    lists: [],
    listEnded: false
  },
  mutations: {
    appendLists (state, payload) {
      state.lists = state.lists.concat(payload)
    },
    endLists (state) {
      state.listEnded = true
    },
    updateLists (state, payload) {
      Vue.set(state.lists, payload.idx, payload.value)
    },
    alert (state, payload) {
      const { message, redirect } = payload
      state.modal = {
        open: true,
        message,
        redirect
      }
    }
  },
  actions: {
    loadMore (context) {
      const page = context.state.lists.length / 30
      return fetch(`${context.state.API}/books?page=${page + 1}`)
        .then(res => {
          if (res.ok) return res.json()
          else return Promise.reject(new Error(res.statusText))
        })
        .then(res => {
          if (res.length < 30) context.commit('endLists')
          context.commit('appendLists', res['hydra:member'].map(r => {
            r.publicationDate = new Date(r.publicationDate).toLocaleDateString()
            return r
          }))
        })
    }
  }
})

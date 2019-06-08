import Vue from 'vue'
import Vuex from 'vuex'
import API from '@/js/API.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books:[]
  },
  getters:{
    books(state){
      return state.books
    },
    detail: state => (id) =>{
      return state.books[id]
  }
  },
  mutations: {
    setBooks(state,books){
      state.books = books
    }
  },
  actions: {
    getBooks({commit}){
      API("GET","books")
      .then(response=>{
        commit("setBooks",response.data["hydra:member"])
      })
    },
  }
})

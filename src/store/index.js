import Vue from 'vue'
import Vuex from 'vuex'
import BookList from "./modules/BookList"
import BookDetail from "./modules/BookDetail"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    BookList,
    BookDetail
  }
})
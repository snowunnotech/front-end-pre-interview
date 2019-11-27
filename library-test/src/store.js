import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/* 
  get API data and do data massage to organize data for display 
  https://demo.api-platform.com/books?properties[]=&page=1 to get all books id API 
  https://demo.api-platform.com/books/${id} to get books details
*/

/* provide API to components to get needed data */

export default new Vuex.Store({
  state: {
    booksLists: []
  },  
  mutations: {
    FETCH_LISTSS(state, booksLists) {
        state.booksLists = booksLists
    }
  },
  actions: {
    fetchBookLists({ commit }) {
      return new Promise((resolve, reject) => {
          fetch('https://demo.api-platform.com/books?properties[]=&page=1', { mode: 'no-cors' })
            .then((response) => {
              console.log('success fetch')
              console.log(response)
              commit("FETCH_LISTSS", response.body)
              resolve()
            })
            .catch((err) => {
              console.log(err)
              reject(err)
            })
      });
   }
  }
})

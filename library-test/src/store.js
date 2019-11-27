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
    bookLists: []
  },  
  mutations: {
    FETCH_LISTSS(state, booksLists) {
        state.bookLists = booksLists
    }
  },
  actions: {
    fetchBookLists({ commit }) {
      return new Promise((resolve, reject) => {
          fetch('https://demo.api-platform.com/books?properties[]=&page=1')
            .then((response) => {
              return response.json()
            })
            .then((data) => {
              commit("FETCH_LISTSS", data["hydra:member"])
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

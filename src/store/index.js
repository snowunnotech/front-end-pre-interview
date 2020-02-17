import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bookUrl: 'https://demo.api-platform.com',
    books: [],
    page: 0,
    bookPerPage: 6,
  },
  mutations: {
    setBookPerPage(state) {
      window.innerWidth >= 768 ? state.bookPerPage = 9 : state.bookPerPage = 6
    },
    handleBooks(state, data) {
      data.forEach(e => {
        state.books.push({
          name: e.title,
          author: e.author,
          date: e.publicationDate,
          id: e.id
        });
      });
    },
    handleBooksError(state) {
      const date = new Date().toLocaleDateString();
      for (let i = 0; i < state.bookPerPage; i++) {
        state.books.push({
          name: "Sorry, yet semms like the servers still have some problems.",
          author: "張育維",
          date: date,
          id: `p.${state.page}-book.${i}` // Uh, I guess this kind of id is enough, for a dummy page.
        });
      }
    }
  },
  actions: {
    getBooks({ state, commit }) {
      state.page++;
      fetch(`${state.bookUrl}/books?page=${state.page}`)
        .then(res => {
          res.status === 200
            ? commit('handleBooks', res.data)
            : commit('handleBooksError')
        })
        .catch(e => console.log('Error in getBooks in Vuex actions: ', e))
    },
  }
})

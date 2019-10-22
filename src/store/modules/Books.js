export const namespaced = true;

export const state = {
  books: []
};
export const mutations = {
  SET_BOOKS(state, books) {
    state.books = books;
  },
  ADD_BOOKS(state, books) {
    state.books.push(books);
  }
};
export const actions = {
  setBooks({ commit }, payload) {
    commit("SET_BOOKS", payload);
  },
  addBooks({ commit }, payload) {
    commit("ADD_BOOKS", payload);
  }
};
export const getters = {
  getBooks: state => state.books
};

export const namespaced = true;
const _ = require("lodash");

export const state = {
  books: []
};
export const mutations = {
  SET_BOOKS(state, books) {
    let book = [...state.books, ...books];
    let uniqBook = _.uniqBy(book, bk => bk.isbn);
    state.books = uniqBook;
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
  getBooks: state => state.books,
  getBooksByISBN: state => BookId => {
    return state.books.filter(book => book.isbn == BookId)[0];
  }
};

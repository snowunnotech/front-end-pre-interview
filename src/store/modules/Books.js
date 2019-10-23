export const namespaced = true;
const _ = require("lodash");

export const state = {
  books: []
};
export const mutations = {
  SET_BOOKS(state, books) {
    let book = [...books, ...state.books];
    let uniqBook = _.uniqBy(book, bk => bk.isbn);
    state.books = uniqBook;
    state.books.sort(function(a, b) {
      a = a.publicationDate;
      b = b.publicationDate;
      return a > b ? -1 : a < b ? 1 : 0;
    });
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
  },
  getGetterIsbn({ getters }, payload) {
    getters("getBooksByISBN", payload);
  }
};
export const getters = {
  getBooks: state => state.books,
  getBooksByISBN: state => BookId => {
    return state.books.filter(book => book.isbn == BookId)[0];
  }
};

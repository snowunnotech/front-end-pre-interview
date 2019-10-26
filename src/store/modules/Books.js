import BooksService from "../../services/BooksService";

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
  },
  async PatchBooksApi({ dispatch }, dataToChange) {
    const UpdateBook = JSON.parse(JSON.stringify(dataToChange));
    console.log(dataToChange);
    UpdateBook.publicationDate = `${UpdateBook.publicationDate}T00:00:00.000Z`;
    const Id = UpdateBook["@id"].split("/")[2];
    const { reviews, ...UpdateBooNoReviews } = UpdateBook;
    console.log(reviews);
    const response = await BooksService.update(Id, UpdateBooNoReviews);
    if (response.status == 200) {
      dispatch("setBooks", [response.data]);
    }
  }
};
export const getters = {
  getBooks: state => state.books,
  getBooksByISBN: state => BookIsbn => {
    return state.books.filter(book => book.isbn == BookIsbn)[0];
  },
  getBooksByID: state => BookId => {
    return state.books.filter(book => book["@id"] == BookId)[0];
  }
};

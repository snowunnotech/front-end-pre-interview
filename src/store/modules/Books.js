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
  async GetBooksApi({ dispatch }) {
    try {
      const response = await BooksService.get({ page: "1" });
      if (response.status !== 200) {
        return;
      } else {
        dispatch("setBooks", response.data["hydra:member"]);
      }
    } catch (err) {
      console.log(err);
    }
  },
  async PostBooksApi({ dispatch }, bookCreate) {
    try {
      let bookToPost = Object.assign({}, bookCreate);
      bookToPost.publicationDate = new Date(bookToPost.publicationDate);
      const response = await BooksService.post(bookToPost);
      if (response.status == 201) {
        dispatch("setBooks", [response.data]);
      }
    } catch (err) {
      console.log(err);
    }
  },
  async PatchBooksApi({ dispatch }, dataToChange) {
    try {
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
    } catch (err) {
      console.log(err);
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

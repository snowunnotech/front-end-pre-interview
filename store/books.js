import axios from "axios";

export const state = () => ({
  isSendBook: false,
});

export const mutations = {
  ISSENDBOOK(state, isSendBook) {
    state.isSendBook = isSendBook;
  },
  BOOK(state, book) {
    state.book = book;
  }
};

export const actions = {
  async getBook(context, id) {
    const api = `${process.env.url}/books/${id}`;
    return await axios.get(api, {headers: {"Content-Type": "application/ld+json"}})
    .then(res => {
      res.data["@id"] = res.data["@id"].substr(7);
      res.data.publicationDate = res.data.publicationDate.substr(0, 10);
      return res.data;
    });
  },
};

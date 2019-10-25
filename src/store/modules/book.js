import axios from 'axios';

const state = {
  bookList: [],
  total: 0,
  currentPage: 0,
  bookInfo: {},
  currentBookId: null,
};

const getters = {
  disableClick: (state) => state.total < state.bookList.length
}

const mutations = {
  updateBookList(state, res) {
    state.bookList = state.bookList.concat(res.data['hydra:member']);
    state.total = res.data['hydra:totalItems'];
  },
  udpateCurrentPage(state) {
    state.currentPage = state.currentPage + 1;
  },
  updateBookInfo(state, res) {
    state.bookInfo = res.data;
  },
  updateBookId(state, id) {
    state.currentBookId = id;
  },
  patchBookInfo(state, bookInfo) {
    state.bookInfo = Object.assign(state.bookInfo, bookInfo);
  },
  postBookInfo(state, bookInfo) {
    state.bookList = state.bookList.concat({...bookInfo, title: 'Title'});
  }
};

const actions = {
  async getBookList({commit, state}) {
    commit('udpateCurrentPage');
    const res = await axios.get(`https://demo.api-platform.com/books?page=${state.currentPage}`);
    commit('updateBookList', res);
  },
  async getBookInfo({commit}, id) {
    const res = await axios.get(`https://demo.api-platform.com/books/${id}`);
    commit('updateBookId', id);
    commit('updateBookInfo', res);
  },
  async patchBookInfo({commit}, { bookInfo, id }) {
    const res = await axios.patch(`https://demo.api-platform.com/books/${id}`, bookInfo, {headers: {'content-type': 'application/merge-patch+json'}});
    commit('updateBookInfo', res);
  },
  async postBookInfo(_, { bookInfo }) {
    await axios.post('https://demo.api-platform.com/books', bookInfo, {headers: {'content-type': 'application/ld+json'}});
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
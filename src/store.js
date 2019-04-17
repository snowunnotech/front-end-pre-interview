import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    strict: true,
    books: [],
    limit: [],
    author: {},
    tempData: {
      isbn: '817525766-0',
      title: 'string',
      description: '',
      author: '',
      publicationDate: '',
    },
    count: 1,
    pid: '',
    cid: '',
    edit: {},
    isNew: false,
    isLoading: false,
  },
  mutations: {
    BOOKS(state, payload) {
      this.state.books = payload;
    },
    LIMIT(state, payload) {
      this.state.limit = payload;
    },
    COUNT(state, payload) {
      this.state.count = payload;
    },
    AUTHOR(state, payload) {
      this.state.author = payload;
    },
    PID(state, payload) {
      this.state.pid = payload;
    },
    TEMPDATA(state, payload) {
      this.state.tempData = payload;
    },
    CID(state, payload) {
      this.state.cid = payload;
    },
    EDIT(state, payload) {
      this.state.edit = payload;
    },
    ISNEW(state, payload) {
      this.state.isNew = payload;
    },
    ISLOADING(state, payload) {
      this.state.isLoading = payload;
    },
  },
  actions: {
    getData(context) {
      const api = 'https://cors-anywhere.herokuapp.com/https://demo.api-platform.com/books';
      this.state.isLoading = true;
      axios.get(api).then((res) => {
        context.commit('BOOKS', res.data['hydra:member']);
        /* eslint-disable */
        for (let i = 0; i < 6; i++) {
          this.state.limit.push(this.state.books[i]);
        }
        this.state.isLoading = false;
      }).catch((error) => {
        if (error.response) {}
        /* eslint-disable */
        alert('系統忙碌中');
      });
    },
    getSingleData(context) {
      const api = `https://cors-anywhere.herokuapp.com/https://demo.api-platform.com/books/${this.state.pid}`;
      this.state.isLoading = true;
      axios.get(api).then((res) => {
        context.commit('AUTHOR', res.data);
        this.state.tempData = Object.assign({}, this.state.author);
        this.state.isLoading = false;
      });
    },
    limitData(context) {
      let cmax = 6 * this.state.count;
      let cmin = 0;
      cmax += 6;
      cmin = cmax - 6;
      /* eslint-disable */
      for(let i = cmin; i < cmax; i++) {
        if (cmax > 30) {
          return;
        }
        this.state.limit.push(this.state.books[i]);
      }
      /* eslint-disable */
      this.state.count++;
      this.state.isLoading = true;
      setTimeout(() => {
        this.state.isLoading = false;        
      }, 600);
    },
    updateData(context) {
      const api = `https://cors-anywhere.herokuapp.com/https://demo.api-platform.com/books/${this.state.cid}`;
      let other = 'post';
      if (!this.state.isNew) {
        other = 'put';
      }
      this.state.isLoading = true;
      axios[other](api, this.state.tempData).then(() => {
        context.dispatch('getSingleData');
        this.state.isLoading = false;
      }).catch((error) => {
        if (error.response) {}
        this.state.isLoading = false;
      });
    },
    postSingleData(context) {
      const api = `https://cors-anywhere.herokuapp.com/https://demo.api-platform.com/books/${this.state.cid}`;
      this.state.isLoading = true;
      axios.get(api).then((res) => {
        context.commit('EDIT', res.data);
        const point = this.state.tempData;
        point.title = this.state.edit.title;
        point.author = this.state.edit.author;
        point.publicationDate = this.state.edit.publicationDate;
        point.description = this.state.edit.description;
        this.state.isLoading = false;
      });
    }
  },
});

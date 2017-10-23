import * as types from './mutations_type.js'
import Vue from 'vue'

// state
export const state = {
    books: [],
    info: {}
}

// mutations
export const mutations = {
    [types.BOOK_LIST](state, data) {
        state.books = data;
        for (var i in state.books) {
            state.books[i].publicationDate = Vue.prototype.$moment(data[i].publicationDate).format('YYYY/MM/DD');
        }
    },
    [types.BOOK_INFO](state, data) {
        state.info = data;
        state.info.publicationDate = Vue.prototype.$moment(data.publicationDate).format('YYYY/MM/DD');
    },
    [types.DELETE_BOOK](state, id) {
        /*for (var i in state.books) {
            var item = state.books[i];
            if (item.id === id) {
                console.log('DELETE_BOOK:', item.title, ', index?', i);
                state.books.splice(i, 1);
                break
            }
        }*/
    },
    [types.CREATE_BOOK](state, data) {
        state.books.push(data);
    },
    [types.UPDATE_AUTHOR](state, data) {
        state.info.author = data;
    },
    [types.UPDATE_PUB_DATE](state, data) {
        state.info.publicationDate = data;
    },
    [types.UPDATE_ISBN](state, data) {
        state.info.isbn = data;
    },
    [types.UPDATE_DESCRIPTION](state, data) {
        state.info.description = data;
    },
}
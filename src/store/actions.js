import Vue from 'vue'
import mutations from './mutations'
// 引入 mutations_type （引用同一個 key）
import * as types from './mutations_type.js'

export const actionGetBooks = ({ commit }) => {
    Vue.axios.get('/data/books')
        .then((response) => {
            commit(types.BOOK_LIST, response.data['hydra:member']);
            console.log(response.data);
        })
        .catch(function(error) {
            console.log(error);
        });
}

export const actionGetBook = ({ commit }, id) => {
    Vue.axios.get('/data/books/' + id)
        .then((response) => {
            console.log(response.data);
            commit(types.BOOK_INFO, response.data);
        })
        .catch(function(error) {
            console.log(error);
        });
}

export const deleteBook = ({ commit }, id) => {
    Vue.axios.delete('/data/books/' + id)
        .then((response) => {
            console.log(response);
            commit(types.DELETE_BOOK, id);
        })
        .catch(function(error) {
            console.log(error);
            commit(types.DELETE_BOOK, id);
        });
}

export const addBook = ({ commit }, book) => {
    Vue.axios({
            method: 'post',
            url: '/data/books/',
            data: {
                id: book.id,
                title: book.title,
                author: book.author,
                publicationDate: book.publicationDate,
                isbn: book.isbn,
                description: book.description,
            },
            responseType: 'json',
            transformRequest: [function(book, headers) {
                let q = new URLSearchParams();
                for (let i in book) {
                    q.append(i, book[i]);
                }
                return q.toString();
            }]
        })
        .then((response) => {
            console.log(response);
            commit(types.CREATE_BOOK);
            swal({
                title: "成功",
                text: "書籍已新增，即將為您導回清單頁。",
                icon: "success",
                dangerMode: true,
            }).then((value) => {
                window.history.back();
            });
        })
        .catch(function(error) {
            console.log(error);
            commit(types.CREATE_BOOK);
            swal({
                title: "新增失敗",
                text: "連線時出現問題，請稍後再試或聯繫服務團隊，即將為您導回清單頁。",
                icon: "warning",
                dangerMode: true,
            }).then((value) => {
                window.history.back();
            });
        });
}

export const saveBook = ({ commit }, book) => {
    Vue.axios.put('/data/books/' + book.id, book)
        .then((response) => {
            console.log(response);
            swal({
                title: "成功",
                text: "書籍更新成功，即將為您導回書籍介紹頁。",
                icon: "success",
            }).then((value) => {
                window.history.back();
            })
        })
        .catch(function(error) {
            console.log(error);
            swal({
                title: "更新失敗",
                text: "連線時出現問題，請稍後再試或聯繫服務團隊，即將為您導回清單頁。",
                icon: "warning",
                dangerMode: true,
            }).then((value) => {
                window.history.back();
            });
        });
}
export const updateAuthor = ({ commit }, data) => {
    commit(types.UPDATE_AUTHOR, data);
}
export const updatePublicationDate = ({ commit }, data) => {
    commit(types.UPDATE_PUB_DATE, data);
}
export const updateIsbn = ({ commit }, data) => {
    commit(types.UPDATE_ISBN, data);
}
export const updateDescription = ({ commit }, data) => {
    commit(types.UPDATE_DESCRIPTION, data);
}
import { book } from '@/apis';
import { HTTP_STATUS_NO_CONTENT } from '@/plugins/defined';

/**
 * only save property id.
 */
export const state = () => ({
    books: [],
    pagination: {
        currentPage: 1,
        nextPage: 2,
        totalItems: 1,
        lastPage: 1
    }
});
//

export const mutations = {
    pagination(state, { data, pagination }) {
        state.pagination = Object.assign(pagination, {
            lastPage: Math.ceil(pagination.totalItems / 30)
        });
        if (state.books.length <= state.pagination.totalItems)
            state.books = [...state.books, ...data];
    },
    create(state, book) {
        state.books.push(book);
    },
    remove(state, bookId) {
        const trashed = [bookId];
        state.books = state.books.filter(id => !trashed.includes(id));
    },
    flush(state, { book }) {
        state.books = state.books.map(item => {
            if (item['@id'] === book['@id']) {
                return book;
            }
            return item;
        });
    }
};

export const getters = {
    books: state => {
        return state.books;
    },
    pagination: state => {
        return state.pagination;
    }
};

export const actions = {
    pagination({ commit }, { data, pagination }) {
        commit('pagination', { data, pagination });
    },
    flush({ commit }, { book }) {
        commit('flush', { book });
    }
};

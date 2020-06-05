const state = {
    bookInfo: ''
}

const getters = {
}

const actions = {
    updateBook({commit}, payload) {
        commit('updatedBook', payload)
    }
}

const mutations = {
    updatedBook(state, payload) {
        state.bookInfo = payload;
    }
}


export default {
    namespace: true,
    state,
    getters,
    actions,
    mutations
}
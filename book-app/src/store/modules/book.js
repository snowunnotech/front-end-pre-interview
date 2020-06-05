const book = () => ({
    isbn: '',
    title: '',
    author: '',
    description: '',
    publicationDate: new Date(),
    reviews: [],
});

const state = {
    book: book()
}

const getters = {

}

const actions = {
}

const mutations = {

}

export default {
    namespace: true,
    state,
    getters,
    actions,
    mutations
}
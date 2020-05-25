import axios from "axios";
const state = {
    books: []
};

const actions = {
    //取得 books 清單
    getBooks(context) {
        var api = `${process.env.VUE_APP_API}/books`;
        axios.get(api).then(response => {
            context.commit("GETBOOKS", response.data["hydra:member"])
        });
    },
};

const mutations = {
    GETBOOKS(state, books) {
        state.books = books;
    }
};

const getter = {
    books: state => {
        return state.books;
      }
};

export default {
    state,
    actions,
    mutations,
    getter
}
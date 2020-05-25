import axios from "axios";
const state = {
    book: {}
};

const actions = {
    //取得 books 明細
    getBookDetail: function(context, id) {
        var api = `${process.env.VUE_APP_API}/books/${id}`;
        axios.get(api).then(response => {
          console.log(response);
          context.commit("GETBOOKDETAIL", response.data)
        });
      }
};

const mutations = {
    GETBOOKDETAIL(state, book) {
        state.book = book;
    }
};

const getter = {
    book: state => {
        return state.books;
      }
};

export default {
    state,
    actions,
    mutations,
    getter
}
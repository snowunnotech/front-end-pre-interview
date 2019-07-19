import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import createPersistedState from "vuex-persistedstate"
export default new Vuex.Store({
  plugins: [createPersistedState()],

  state: {
    page:"",
    //未整理
    bookList:[],
    //整理好
    groupList:[],
    //當前圖書資訊
    currentBook:'',
    //當前圖書ID
    bookId:'',
    //是否開啟編輯模式
    editState:false,
    //新增書的info
    createBook:{
      title:'',
      author:'',
      publicationDate:'',
      description:'',
    }
  },
  mutations: {
    updateTitle(state, title){
      state.createBook.title = title
    },
    updateAuthor(state, author){
      state.createBook.author = author
    },
    updatePublicationDate(state, publicationDate){
      state.createBook.publicationDate = publicationDate
    },
    updateDescription(state, description){
      state.createBook.description = description
    },
    cleanBook:(state)=>{
      state.createBook.title = ""
      state.createBook.author = ""
      state.createBook.publicationDate = ""
      state.createBook.description = "" 
    },

    saveBookList: (state,value) =>{
      state.bookList = value;
    },
    saveGroupList: (state,value) =>{
      state.groupList = value;
    },
    saveCurrentBook: (state,value) => {
      state.currentBook = value;
    },
    saveBookId: (state,value) => {
      state.bookId = value;
    },
    savePage: (state,value) => {
      state.page = value;
    },
    changeEditState: (state) => {
      state.editState = !state.editState;
    },
  },
  actions: {
    actionChangeEditState(context){
      context.commit('changeEditState')
    },
    actionCleanBook(context){
      context.commit('cleanBook')
    }
    

  }
})

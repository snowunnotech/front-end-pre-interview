import * as types from './mutations_type.js'


//state
export const state = {
	headerNav: {
		left: " ",
		right: "ADD",
		title: "BOOKS"
	},
	books: [], //全部的書
	showingbooks: [], //目前列表中的書
	curBook: {}, //展示細項頁面的書
	bookNum: 0 //目前列表中的書有幾本
}

//mutations
export const mutations = {
	[types.GETBOOKS](state,books){ //取書初始化
		state.books = books['hydra:member'] //fetch到的所有書存在books變數
		state.showingbooks = books['hydra:member'].slice(0,state.bookNum+6) //一開始展示前6本
		state.bookNum= state.bookNum + 7 // 保存書本本數
	},
	[types.GETMORE](state){
		state.bookNum= state.bookNum + 7 //增加展示本數6本(7=6+1)
		state.showingbooks = state.books.slice(0,state.bookNum) //展示接下來的數量
	},
	[types.GETDETAIL](state, self){
		state.headerNav.title = self["title"]
		state.headerNav.left = "BACK"
		state.headerNav.right = "EDIT"
		//細項頁面的header
		state.curBook = self
		//細項頁面的內容
	},
	[types.BACKHOMEHEAD](state){
		state.headerNav.title = "BOOKS"
		state.headerNav.left = " "
		state.headerNav.right = "ADD"
		//首頁的HEADER
	},
	[types.ADDHEAD](state){
		state.headerNav.title = "ADDING"
		state.headerNav.left = "BACK"
		state.headerNav.right = " "
		//ADD頁面的HEADER
	},
}
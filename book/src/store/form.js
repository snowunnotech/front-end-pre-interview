
const initState = () => ({
  form: {
    author: '',
    description: '',
    isbn: '',
    publicationDate: '',
    reviews: {},
    title: ''
  },
  '@id': '',
  inValid: true // 表單格式驗證未通過
})

const state = initState()

const mutations = {
  INIT_FORM (state, initData) {
    Object.keys(initData).forEach(key => {
      state[key] = initData[key]
    })
  },
  SET_BOOKINFO_TO_FORM (state, bookInfo) {
    Object.keys(bookInfo).forEach(key => {
      if (state.form[key] === undefined) {
        return
      }
      const type = typeof bookInfo[key]
      switch (type) {
        case 'string':
          state.form[key] = bookInfo[key]
          break
        case 'object':
          state.form[key] = {}
          break
      }
    })
  },
  CHANGE_FORM_STATUS (state, status) {
    state.inValid = status
  }
}

const actions = {
  initForm ({ commit }) {
    commit('INIT_FORM', initState())
  },
  setBookinfoTOForm ({ commit, rootState }) {
    commit('SET_BOOKINFO_TO_FORM', rootState.book.info)
  },
  changeFormStatus ({ commit }, payload) {
    commit('CHANGE_FORM_STATUS', payload)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

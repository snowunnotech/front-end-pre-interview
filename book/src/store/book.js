import { getBook } from '@/utils/service'
import { dateFormat } from '@/utils/mixins/global.mixins'
import swal from '@/utils/swal'

const initState = () => ({
  info: {
    author: '',
    description: '',
    isbn: '',
    publicationDate: '',
    reviews: [],
    title: '',
    '@id': ''
  }
})

const state = initState()

const mutations = {
  INIT_STATE (state, initData) {
    Object.keys(initData).forEach(key => {
      state[key] = initData[key]
    })
  },
  GET_BOOK_INFO (state, info) {
    state.info = JSON.parse(JSON.stringify(info))
  }
}

const actions = {
  async getBookInfo ({ commit }, id) {
    const ret = await getBook(id)
    if (ret.success === false) {
      swal.withWrongStyle.fire({ text: `oooops  似乎發生了錯誤` })
      return
    }
    console.log('[書本資訊]', ret)
    ret.data.publicationDate = dateFormat(ret.data.publicationDate, 'YYYY-MM-DD')
    commit('GET_BOOK_INFO', ret.data)
  },
  initState ({ commit }) {
    commit('INIT_STATE', initState())
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

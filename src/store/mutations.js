import * as mutationsType from './mutations_type.js'

export const mutations = {
  [mutationsType.BUILD_BOOKS_LIST] (state, data) {
    state.books = data
  },
  [mutationsType.SWITCH_LOADING] (state) {
    state.loading = !state.loading
  }
}

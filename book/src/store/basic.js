const state = {
  showLoader: false
}

const mutations = {
  CHANGE_LOADER (state, bool) {
    state.showLoader = bool
  }
}

export {
  state,
  mutations
}

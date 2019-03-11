const module = {
  namespaced: true,
  state: {
    left: {
      text: '',
      path: '',
      func: null,
      disabled: false
    },
    center: {
      text: ''
    },
    right: {
      text: '',
      path: '',
      func: null,
      disabled: false
    }
  },
  getters: {
  },
  mutations: {
    set(state, { pos, key, value }) {
      state[pos][key] = value
    },
    clear(state, pos) {
      state[pos].text = ''
      if(state[pos].hasOwnProperty('path'))
        state[pos].path = ''
      if(state[pos].hasOwnProperty('func'))
        state[pos].func = null
      if(state[pos].hasOwnProperty('disabled'))
        state[pos].disabled = false
    }
  },
  actions: {
    set({ commit }, { pos, text, path = '', func = null }) {
      commit('set', {
        pos: pos,
        key: 'text',
        value: text
      })
      if(path) {
        commit('set', {
          pos: pos,
          key: 'path',
          value: path
        })
      }
      if(func) {
        commit('set', {
          pos: pos,
          key: 'func',
          value: func
        })
      }
    },
    disable({ commit }, { pos, disabled = true }) {
      commit('set', {
        pos: pos,
        key: 'disabled',
        value: disabled
      })
    },
    clearAll({ commit, state }) {
      const poss = Object.keys(state)
      poss.forEach(pos => {
        commit('clear', pos)
      })
    }
  }
}

export default module
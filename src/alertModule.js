export default {
  state: {
    message: []
  },
  mutations: {
    PUSH_MESSAGE (state, payload) {
      state.message.push(payload)
    },
    REMOVE_MESSAGE (state, payload) {
      state.message.splice(payload, 1)
    },
    REMOVE_MESSAGE_TIMING (state, timestamp) {
      state.message.forEach((item, index) => {
        if (item.timestamp === timestamp) state.message.splice(index, 1)
      })
    }
  },
  actions: {
    updateMessage (context, payload) {
      const timestamp = Math.floor(new Date() / 1000)
      const msg = {
        message: payload.message,
        status: payload.status,
        timestamp
      }
      context.commit('PUSH_MESSAGE', msg)
      this.dispatch('removeMessageWithTiming', timestamp)
    },
    removeMessage (context, payload) {
      context.commit('REMOVE_MESSAGE', payload)
    },
    removeMessageWithTiming (context, timestamp) {
      setTimeout(() => {
        context.commit('REMOVE_MESSAGE_TIMING', timestamp)
      }, 2000)
    }
  },
  getters: {
    message (state) {
      return state.message
    }
  }
}

export default {
  namespaced: true,
  state: {
    inputValue: ''
  },
  getters: {
    inputValue (state) {
      return state.inputValue
    }
  },
  mutations: {
    setValue (state, payload) {
      state.inputValue = payload
    }
  },
  actions: {
    chagneValue ({ commit, dispatch }, couple) {
      commit('setValue', couple.value)
      dispatch(
        'task/newCouple',
        { key: couple.key, value: couple.value },
        { root: true }
      )
    }
  }
}

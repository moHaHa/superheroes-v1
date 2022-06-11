export default {
  namespaced: true,
  state: {
    obj: {}
  },
  getters: {
    obj (state) {
      return state.obj
    }
  },
  mutations: {
    setCouple (state, couple) {
      this._vm.$set(state.obj, couple.key, couple.value)
    }
  },
  actions: {
    newCouple ({ commit }, couple) {
      commit('setCouple', couple)
    }
  }
}

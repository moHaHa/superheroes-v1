import { isEmpty } from 'lodash'
export default {
  namespaced: true,
  state: {
    activeHeaderModule: {},
    activeContentModule: {},
    sideLeftLayoutObject: {},
    sideLeftContentObject: {},
    baseAppPathRoute: '/rendering/app'
  },
  getters: {
    activeHeaderModule (state) {
      return state.activeHeaderModule
    },
    activeHeaderModuleIsEmpty (state) {
      return isEmpty(state.activeHeaderModule)
    },
    activeContentModule (state) {
      return state.activeContentModule
    },
    baseAppPathRoute (state) {
      return state.baseAppPathRoute
    }
  },
  mutations: {
    setActiveHeaderModule (state, payload) {
      state.activeHeaderModule = payload
    },
    setActiveContentModule (state, payload) {
      state.activeContentModule = payload
    },
    setSideLeftLayoutObject (state, payload) {
      state.sideLeftLayoutObject = payload
    },
    setSideLeftContentObject (state, payload) {
      state.sideLeftContentObject = payload
    }
  },
  actions: {
    changeActiveHeaderModule ({ commit }, objModule) {
      commit('setActiveHeaderModule', objModule)
    },
    changeActiveContentModule ({ commit }, objModule) {
      commit('setActiveContentModule', objModule)
    },
    changeSideLeftLayoutObject () {},
    changeSideLeftContentObject () {}
  }
}

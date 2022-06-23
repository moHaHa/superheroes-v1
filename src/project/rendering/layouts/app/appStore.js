import axios from '@/axios'
export default {
  namespaced: true,
  state: {
    modulesList: [],
    modulesListLoader: false
  },
  getters: {
    modulesList (state) {
      return state.modulesList
    },
    modulesListLoader (state) {
      return state.modulesListLoader
    }
  },
  mutations: {
    setModulesList (state, payload) {
      state.modulesList = payload
    },
    changeModulesListLoader (state, payload) {
      state.modulesListLoader = payload
    }
  },
  actions: {
    async fetch ({ commit }) {
      try {
        commit('changeModulesListLoader', true)
        let response = await axios.get('/erp-modules')
        commit('setModulesList', response['data']['data'])
        commit('changeModulesListLoader', false)
      } catch (error) {
        console.error(error)
        commit('changeModulesListLoader', false)
      }
    }
  }
}

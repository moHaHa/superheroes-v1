import { get } from 'lodash'
import axios from 'axios'
export default {
  namespace: true,
  state: {
    records: [],
    loader: false
  },
  getters: {
    records (state) {
      return state.records
    }
  },
  mutations: {
    setRecords (state, payload) {
      state.records = payload
    },
    setloader (state, payload) {
      state.loader = payload
    }
  },
  actions: {
    async fetch ({ commit }, { url, path }) {
      commit('setLoader', true)
      try {
        let res = await axios.get(url)
        commit('setRecords', get(res, path))
        commit('setLoader', false)
      } catch (err) {
        commit('setLoader', false)
        console.log(err)
      }
    }
  }
}

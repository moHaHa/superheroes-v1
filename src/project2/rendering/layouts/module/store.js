import AxiosInstance from '@/axios'
import { get } from 'lodash'
import mappinMethod from '@/functions/mapp-kays-tree'
export default {
  namespaced: true,
  state: {
    requestInfo: {
      endPoint: '/web-ui-headrs',
      params: {},
      pathToTree: 'data.data[0].design'
    },
    sideLeftTree: {},
    sideLeftTreeLoading: false
  },
  getters: {
    sideLeftTree (state) {
      return state.sideLeftTree
    },
    sideLeftTreeLoading (state) {
      return state.sideLeftTreeLoading
    }
  },
  mutations: {
    setActiveModule (state, moduleObject) {
      state.activeModule = moduleObject
    },
    setEndPoint (state, endPoint) {
      state.endPoint = endPoint
    },
    setParams (state, params) {
      state.requestInfo.params = params
    },
    setPathToTree (state, pathToTree) {
      state.requestInfo.pathToTree = pathToTree
    },
    setSideLeftTreeLoading (state, status) {
      state.SideLeftTreeLoading = status
    },
    setSideLeftTree (state, status) {
      state.sideLeftTree = status
    }
  },
  actions: {
    changehModuleKey ({ commit }, moduleObject) {
      commit('setParams', { key: moduleObject['headr_key'] })
    },
    async fetchModuleLayoutTree ({ commit, state, dispatch }) {
      commit('setSideLeftTreeLoading', true)
      commit('erp-side-left/setTabLoader', true, { root: true })
      try {
        let response = await AxiosInstance.get(state.requestInfo.endPoint, {
          params: state.requestInfo.params
        })
        dispatch('sliceObjects', get(response, state.requestInfo.pathToTree))
        commit('setSideLeftTreeLoading', false)
        commit('erp-side-left/setTabLoader', false, { root: true })
      } catch (error) {
        console.error(error)
        commit('setSideLeftTreeLoading', false)
        commit('erp-side-left/setTabLoader', false, { root: true })
      }
    },
    sliceObjects ({ commit, state, dispatch }, object) {
      console.log('module layout-> ', JSON.parse(object))
      let tree = mappinMethod([JSON.parse(object)])[0]
      if ('children' in tree) {
        let sideLeftTree = tree['children'].find(
          (el) => el.elementName === 'erp-navigation-drawer-left'
        )
        if (sideLeftTree !== undefined) {
          console.log(sideLeftTree)
          commit('setSideLeftTree', sideLeftTree)
          let group = state.sideLeftTree['children'][0]
          dispatch('erp-side-left/addLeftsideTabsGroupLayout', group, {
            root: true
          })
        }
      }
    }
  }
}

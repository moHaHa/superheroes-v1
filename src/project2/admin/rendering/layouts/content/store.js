import AxiosInstance from '@/axios'
import { get, remove } from 'lodash'
import mappinMethod from '@/functions/mapp-kays-tree'
export default {
  namespaced: true,
  state: {
    requestInfo: {
      endPoint: '/web-ui-forms',
      params: {},
      pathToTree: 'data.data[0].design'
    },
    contentTree: {},
    contentTreeLoading: false
  },
  getters: {
    contentTree (state) {
      return state.contentTree
    },
    contentTreeLoading (state) {
      return state.contentTreeLoading
    }
  },
  mutations: {
    setEndPoint (state, endPoint) {
      state.endPoint = endPoint
    },
    setParams (state, params) {
      state.requestInfo.params = params
    },
    setPathToTree (state, pathToTree) {
      state.requestInfo.pathToTree = pathToTree
    },

    setContentTreeLoading (state, status) {
      state.contentTreeLoading = status
    },
    setContentTree (state, status) {
      state.contentTree = status
    }
  },
  actions: {
    changehContentKey ({ commit }, { formKey }) {
      commit('setParams', { key: formKey })
    },

    async fetchContentTree ({ commit, state, dispatch }) {
      commit('setContentTreeLoading', true)

      commit('erp-side-left/setTabLoader', true, { root: true })
      try {
        let response = await AxiosInstance.get(state.requestInfo.endPoint, {
          params: state.requestInfo.params
        })
        dispatch('sliceObjects', get(response, state.requestInfo.pathToTree))
        commit('setContentTreeLoading', false)

        commit('erp-side-left/setTabLoader', false, { root: true })
      } catch (error) {
        console.error(error)
        commit('setContentTreeLoading', false)
        commit('erp-side-left/setTabLoader', false, { root: true })
      }
    },
    sliceObjects ({ commit, dispatch }, object) {
      let tree = mappinMethod([JSON.parse(object)])[0]
      if ('children' in tree) {
        let side = mappinMethod([JSON.parse(object)])[0]['children'].find(
          (el) => el.elementName === 'erp-navigation-drawer-left'
        )
        if (side !== undefined) {
          remove(
            tree['children'],
            (el) => el.elementName === 'erp-navigation-drawer-left'
          )
          let group = side['children'][0]
          dispatch('erp-side-left/addLeftsideTabsGroupContent', group, {
            root: true
          })
          commit('setContentTree', tree)
        }
      }
    }
  }
}

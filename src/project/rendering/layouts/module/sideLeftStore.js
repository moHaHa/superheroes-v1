import { isEmpty } from 'lodash'
export default {
  namespaced: true,
  state: {
    layoutGroupHasData: true,
    layoutGroup: {
      elementName: 'erp-side-left-tabs-group',
      props: {},
      children: []
    },
    contentGroupHasData: true,
    contentGroup: {
      elementName: 'erp-side-left-tabs-group',
      props: {},
      children: []
    },
    tabLoader: false
  },
  getters: {
    leftSideTabs (state, getters) {
      let layoutArray = getters.layoutGroupIsEmpty
        ? []
        : state.layoutGroup.children
      let contentArray = getters.contentGroupIsEmpty
        ? []
        : state.contentGroup.children
      return [...layoutArray, ...contentArray]
    },
    contentGroupIsEmpty (state) {
      return isEmpty(state.contentGroup['children'])
    },
    layoutGroupIsEmpty (state) {
      return isEmpty(state.layoutGroup['children'])
    },
    tabLoader (state) {
      return state.tabLoader
    }
  },
  mutations: {
    setContentGroup (state, group) {
      state.contentGroup['children'] = group['children']
    },
    setLayoutGroup (state, group) {
      state.layoutGroup['children'] = group['children']
    },
    resetContentGroup (state) {
      state.contentGroup['children'] = []
    },
    resetLayoutGroup (state) {
      state.layoutGroup['children'] = []
    },
    setTabLoader (state, payload) {
      state.tabLoader = payload
    }
  },
  actions: {
    addLeftsideTabsGroupContent ({ commit }, payload) {
      commit('setContentGroup', payload)
    },
    addLeftsideTabsGroupLayout ({ commit }, payload) {
      commit('setLayoutGroup', payload)
    }
  }
}

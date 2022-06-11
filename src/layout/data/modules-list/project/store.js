export default {
  namespaced: true,
  state: {
    moduleName: 'Project',
    list: [
      {
        nameitem: 'branch',
        childs: [
          {
            nameChild: 'task',
            iconName: 'mdi-near-me',
            type: 'link',
            path: '/project/branch/task'
          }
        ]
      }
    ]
  },

  getters: {
    list (state) {
      return state.list
    },
    moduleName (state) {
      return state.moduleName
    }
  },
  mutations: {},
  actions: {}
}

export default {
  namespaced: true,
  state: {
    isLogin: true,
    user: {
      username: 'admin',
      password: '123',
      email: 'diab.4869@gmail.com',
      first_name: 'Mohammad',
      last_name: 'Al Hallaq',
      avatar: 'captainamerica'
    }
  },
  getters: {
    isLogin (state) {
      return state.isLogin
    },
    fullName (state) {
      return state.isLogin
        ? `${state.user['first_name']} ${state.user['first_name']}`
        : undefined
    },
    email (state) {
      return state.isLogin ? state.user['email'] : undefined
    },
    username (state) {
      return state.isLogin ? state.user['username'] : undefined
    },
    avatar (state) {
      return state.isLogin ? state.user['avatar'] : undefined
    }
  },
  mutations: {
    logout (state) {
      state.isLogin = false
      state.user = null
    }
  }
}

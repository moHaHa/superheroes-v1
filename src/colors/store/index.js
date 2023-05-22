/* eslint-disable prefer-const */
/* eslint-disable no-empty-pattern */

export default {
  namespaced: true,
  state: {
    
    activeTheme: {
      label: 'school',
      value: 'school'
    },
    themes: [
      {
        label: 'dark',
        value: 'dark'
      },
      {
        label: 'light',
        value: 'light'
      },
      {
        label: 'school',
        value: 'school'
      }
      // {
      //   label : 'Sodani',
      //   value : 'colors'
      // }
    ],
    // light: {
    //   'black': '#202020',
    //   'input-color-text': '#5e5e5e',
    //   'white': '#FFFFFF',
    //   'light-black': '#666666',
    //   'primary': '#004890',
    //   'light-primary': '#2A4D71',
    //   'dark-primary': '#243650',
    //   'light-flat-primary': '#EFF9FC',
    //   'dark-flat-primary': '#D4F2FC',
    //   'teal': '#3D869E',
    //   'dark-white': '#FBFBFB',
    //   'gray-one': '#F9F9F9',
    //   'gray-two': '#F3F3F3',
    //   'gray-three': '#F5F5F5',
    //   'gray-four': '#8D8D8D',
    //   'border-gray': '#d8d6de',
    //   'label-gray': '#787878',
    //   'icon-gray': '#888888',
    //   'white-smoke': '#F6F6F6',
    //   'old-lace': '#F9F9F9',
    //   'cool-black': '#233346',
    //   'seashell': '#F1F1F1',
    //   'Warning': '#FFE43B'
    // },
    light: {
      'primary': '#FB7A90',
      'secondary': '#A2163B',
      'new-color': '#ff94ca',
      'white': '#FFFFFF',
      'dark-black': '#0C0C0C',
      'light-black': '#1B1B1B',
      'dark-grey': '#161616',
      'med-grey': '#858585',
      'light-grey': '#ABABAB'
    },
    dark: {
      'primary': '#FB7A90',
      'secondary': '#A2163B',
      'white': '#FFFFFF',
      'dark-black': '#0C0C0C',
      'light-black': '#1B1B1B',
      'dark-grey': '#161616',
      'med-grey': '#858585',
      'light-grey': '#ABABAB'
    }
  },
  getters: {
    activeTheme (state) {
      return state.activeTheme
    },
    staticColors (state) {
      return state.dcolors
    },
    darkTheme (state) {
      return state.dark
    },
    lightTheme (state) {
      return state.light
    },
    themes (state) {
      return state.themes
    },
    isThemeDark () {
      return localStorage.getItem('darkMode')
    }
  },
  mutations: {
    setColor (state, color) {
      state.light[color.key] = color.value
      state[state.activeTheme.value][color.key] = color.value
    },
    setTheme (state, theme) {
      state.activeTheme = theme
      if (theme.value === 'dark') localStorage.setItem('darkMode', true)
      else localStorage.setItem('darkMode', false)
    }
  },
  actions: {
    putColor ({ commit }, color) {
      commit('setColor', color)
    },
    changeTheme ({ commit }, payload) {
      if (payload.theme.value === 'dark') {
        payload.app.$vuetify.theme.dark = true
      } else {
        payload.app.$vuetify.theme.dark = false
      }
      commit('setTheme', payload.theme)
    }
  }
}

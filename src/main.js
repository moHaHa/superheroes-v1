import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import 'vue-toastification/dist/index.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@/assets/tailwind.css'

import 'vue-select/dist/vue-select.css'
import '@/colors/css/light.scss'


import './components/components-defination'

import './mixins/mixins-definition'
//global style
import './assets/scss/main.scss'



Vue.config.productionTip = false
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount('#app')

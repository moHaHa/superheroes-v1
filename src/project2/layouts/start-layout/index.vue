<template>
  <v-app>
    <svu-header></svu-header>

    <v-main  :style="{ 'padding-top': `${headerH}px`}" class="dark-black red">
        <router-view></router-view>
     
    </v-main>
  </v-app>
</template>

<script>
import routeStore from './routeStore'

import erpAppVariablesStore from './erpAppVariablesStore'
import userSettings from './userSettings.js'
import { mapActions, mapGetters } from 'vuex'
export default {
  methods: {
    ...mapActions('erp-route', ['changeRoute']),
    routeChanged () {
      this.changeRoute(this.$route)
      console.log('app ->', this.$route)
    }
  },
  computed:{
    ...mapGetters('erp-route', [ 'headerH']),

  },
  watch: {
    $route () {
      this.routeChanged()
    }
  },
  created () {
    this.$store.registerModule('erp-route', routeStore)
    this.$store.registerModule('erp-app-variables', erpAppVariablesStore)
    this.$store.registerModule('user-settings', userSettings)
    this.$vuetify.rtl = true

    this.routeChanged()
  },
  beforeDestroy () {
    if (this.$store.hasModule('erp-app-variables')) {
      this.$store.unregisterModule('erp-app-variables')
    }
    if (this.$store.hasModule('erp-route')) {
      this.$store.unregisterModule('erp-route')
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Tajawal&display=swap');
div.v-application div div * {
  font-family: 'Tajawal', sans-serif !important;
}
div.v-application div div .text-h3 {
  font-family: 'Tajawal', sans-serif !important;
}
div.v-application div div .text-h2 {
  font-family: 'Tajawal', sans-serif !important;
}
div.v-application div div .text-h6 {
  font-family: 'Tajawal', sans-serif !important;
}
div.v-application div div .text-h5 {
  font-family: 'Tajawal', sans-serif !important;
}
div.v-application div div .text-h4 {
  font-family: 'Tajawal', sans-serif !important;
}
div.v-application div div .text-h1 {
  font-family: 'Tajawal', sans-serif !important;
}
@import './style.scss';
</style>

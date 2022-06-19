<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import erpAppVariablesStore from './erpAppVariablesStore'
import routeStore from './routeStore'
import appStore from './appStore'
export default {
  components: {},

  data () {
    return {}
  },
  methods: {
    ...mapActions('erp-route', ['changeRoute']),
    routeChanged () {
      this.changeRoute(this.$route)
      console.log('app ->', this.$route)
    }
  },
  watch: {
    $route () {
      this.routeChanged()
    }
  },
  created () {
    this.$store.registerModule('erp-app', appStore)
    this.$store.registerModule('erp-route', routeStore)
    this.$store.registerModule('erp-app-variables', erpAppVariablesStore)

    this.routeChanged()
  },
  beforeDestroy () {
    if (this.$store.hasModule('erp-route')) {
      this.$store.unregisterModule('erp-route')
    }
    if (this.$store.hasModule('erp-app')) {
      this.$store.unregisterModule('erp-app')
    }
    if (this.$store.hasModule('erp-app-variables')) {
      this.$store.unregisterModule('erp-app-variables')
    }
  }
}
</script>

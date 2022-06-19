<template>
  <div id="minaret" class="minaret">
    <erp-app>
      <erp-main-header></erp-main-header>
      <router-view></router-view>
    </erp-app>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import erpAppVariablesStore from './erpAppVariablesStore'
import AxiosInstance from '@/axios'
import routeStore from './routeStore'
import appStore from './appStore'
export default {
  components: {},
  computed: {
    ...mapGetters('erp-app', ['modulesList', 'modulesListLoader'])
  },
  data () {
    return {}
  },
  methods: {
    ...mapActions('erp-app', ['fetch']),
    ...mapActions('erp-route', ['changeRoute']),
    setURL () {
      AxiosInstance.defaults.baseURL = `${window.location.origin}/api`
    },
    routeChanged () {
      console.log('app -> route')
      this.changeRoute(this.$route)
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
    this.setURL()
    this.fetch()
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

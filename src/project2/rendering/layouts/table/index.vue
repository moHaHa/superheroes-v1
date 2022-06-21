<template>
  <div class="is-table">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import store from './store'
export default {
  components: {},
  computed: {
    ...mapGetters('erp-route', ['tableSlug'])
  },
  data () {
    return {}
  },
  methods: {
    ...mapActions('erp-app-variables', ['changeActiveTable']),
    tableChanged () {
      console.log('table ->', this.tableSlug)
      this.changeActiveTable(this.tableSlug)
    }
  },
  watch: {
    tableSlug () {
      this.tableChanged()
    }
  },
  created () {
    this.$store.registerModule('erp-table', store)
    this.tableChanged()
  },
  beforeDestroy () {
    if (this.$store.hasModule('erp-table')) {
      this.$store.unregisterModule('erp-table')
    }
  }
}
</script>

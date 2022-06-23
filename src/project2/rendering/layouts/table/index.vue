<template>
  <div class="is-table">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'

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
    ...mapActions('erp-table', ['fetchList']),

    ...mapMutations('erp-table', ['setTable']),
    tableChanged () {
      console.log('table ->', this.tableSlug)
      this.changeActiveTable(this.tableSlug)
      this.setTable(this.tableSlug)
      this.fetchList()
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

<template>
  <div class="is-table">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

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
    tableChanged () {
      console.log('table ->', this.tableSlug)
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

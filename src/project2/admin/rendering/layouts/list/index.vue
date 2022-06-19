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
    ...mapGetters('erp-route', ['listSlug'])
  },
  data () {
    return {}
  },
  methods: {
    listChanged () {
      console.log('list ->', this.listSlug)
    }
  },
  watch: {
    listSlug () {
      this.listChanged()
    }
  },
  created () {
    this.$store.registerModule('erp-list', store)
    this.listChanged()
  },
  beforeDestroy () {
    if (this.$store.hasModule('erp-list')) {
      this.$store.unregisterModule('erp-list')
    }
  }
}
</script>

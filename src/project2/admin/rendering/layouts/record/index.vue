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
    ...mapGetters('erp-route', ['recordSlug'])
  },
  data () {
    return {}
  },
  methods: {
    recordChanged () {
      console.log('record ->', this.recordSlug)
    }
  },
  watch: {
    recordSlug () {
      this.recordChanged()
    }
  },
  created () {
    this.$store.registerModule('erp-record', store)
    this.recordChanged()
  },
  beforeDestroy () {
    if (this.$store.hasModule('erp-record')) {
      this.$store.unregisterModule('erp-record')
    }
  }
}
</script>

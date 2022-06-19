<template>
  <erp-main-content ref="mainContentRef"></erp-main-content>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import store from './store'
export default {
  watch: {
    formKey (newVal) {
      this.formKeyChanged(newVal)
    }
  },
  methods: {
    ...mapActions('content-layer', ['changehContentKey', 'fetchContentTree']),
    ...mapActions('content-layer', ['changehContentKey', 'fetchContentTree']),
    ...mapMutations('erp-side-left', ['resetContentGroup']),

    formKeyChanged (param) {
      console.log('Content Layer -->', param)
      this.resetContentGroup()
      this.changehContentKey({ formKey: param })
      this.fetchContentTree().then(() => {
        this.$refs.mainContentRef.afterFetchUIContent()
      })
    }
  },
  computed: {
    ...mapGetters('erp-route', ['formKey'])
  },
  created () {
    this.$store.registerModule('content-layer', store)
    this.formKeyChanged(this.formKey)
  },
  beforeDestroy () {
    if (this.$store.hasModule('content-layer')) {
      this.$store.unregisterModule('content-layer')
    }
  }
}
</script>

<style></style>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>

import appStore from './appStore'
export default {
  components: {},

  data () {
    return {}
  },
  methods: {
   
    
  },
  watch: {
    
  },
  created () {
    this.$store.registerModule('erp-app', appStore)
  
 

  },
  beforeDestroy () {
   
    if (this.$store.hasModule('erp-app')) {
      this.$store.unregisterModule('erp-app')
    }
    
  }
}
</script>

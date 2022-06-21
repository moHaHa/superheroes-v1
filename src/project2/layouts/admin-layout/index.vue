<template>
  <div class="admin-layout-default">
    <svu-admin-navigation></svu-admin-navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  methods:{
    ...mapMutations('erp-route', ['setInAdmin'])  
  },
  created () {
    this.setInAdmin(true)
  },
  beforeDestroy () {
    this.setInAdmin(false)
  }
}
</script>

<style>
</style>
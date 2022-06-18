<template>
  <v-app v-if="!hide">
    <erp-header></erp-header>
    <div>
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>
import erpHeader from '../components/erp-header'
export default {
  components: {
    'erp-header': erpHeader
  },
  data () {
    return {
      hide: true
    }
  },
  computed: {},
  created () {
    this.$router.push({ path: '/svu' })
    this.hide = false
  }
}
</script>
<style>
div.theme--light.v-application {
  color: var(--v-text-black-base);
  /* color: red; */
}
div.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled)
  .v-list-item__content {
  color: var(--v-text-black-base);
}
.tabs-menue-others .v-list-item .v-list-item__title {
  color: var(--v-text-black-base);
}
</style>

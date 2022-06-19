<template>
  <div>
    <erp-navigation-drawer-left> </erp-navigation-drawer-left>
    <router-view></router-view>
    <v-overlay :value="!hiden && !fixed" z-index="10"> </v-overlay>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import store from './store'
import sideLeftStore from './sideLeftStore'
export default {
  watch: {
    getModule (newVal) {
      this.changeModuleRoute(newVal)
    }
  },
  data () {
    return {
      overlay: true
    }
  },
  methods: {
    changeModuleRoute (param) {
      console.log('Module Layer -->', param)
      this.resetLayoutGroup()
      this.erpModuleLayout_changehModuleKey({ headr_key: param })
      this.mainHeader_changehModuleKey({ headr_key: param })

      this.erpModuleLayout_fetchModuleLayoutTree()
      if (this.headerTreeIsEmpty) {
        this.mainHeader_fetchModuleLayoutTree()
      }
    },
    ...mapActions('main-header', {
      mainHeader_changehModuleKey: 'changehModuleKey',
      mainHeader_fetchModuleLayoutTree: 'fetchModuleLayoutTree'
    }),
    ...mapActions('module-layer', {
      erpModuleLayout_changehModuleKey: 'changehModuleKey',
      erpModuleLayout_fetchModuleLayoutTree: 'fetchModuleLayoutTree'
    }),
    ...mapMutations('erp-side-left', ['resetLayoutGroup'])
  },
  computed: {
    ...mapGetters('main-header-design', ['hiden', 'fixed']),
    ...mapGetters('main-header', ['headerTreeIsEmpty']),
    ...mapGetters('erp-side-left', [
      'contentGroupIsEmpty',
      'layoutGroupIsEmpty'
    ]),
    ...mapGetters('erp-route', ['getModule'])
  },
  created () {
    this.$store.registerModule('module-layer', store)
    this.$store.registerModule('erp-side-left', sideLeftStore)
    this.changeModuleRoute(this.getModule)
  },
  beforeDestroy () {
    if (this.$store.hasModule('module-layer')) {
      this.$store.unregisterModule('module-layer')
    }
    if (this.$store.hasModule('erp-side-left')) {
      this.$store.unregisterModule('erp-side-left')
    }
  }
}
</script>

<style>
</style>
<template>
  <v-navigation-drawer
    :style="{ top: `${headerH}px`, 'max-height': `calc(100% - ${headerH}px)` }"
    
    :right="$vuetify.rtl"
    app
    class="dark-grey"
    dark
    permanent
  >
    <v-list>
      <v-list-item :to="item.path" v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn block> Logout </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'svu-admin-navigation',
   computed:{
    ...mapGetters('erp-route', ['headerH']),

  },
  data () {
    return {
      items: [
        {
          title: 'مقالات',
          icon: 'mdi-file',
          path: '/admin/rendering/app/table/article/list'
        },
        {
          title: 'كورسات',
          icon: 'mdi-play-box-outline',
          path: '/admin/rendering/app/table/course/list'
        },
        {
          title: 'قوائم تشغيل على يوتيوب',
          icon: 'mdi-youtube',
          path: '/admin/rendering/app/table/playlist/list'
        }
      ]
    }
  }
}
</script>

<style>
.v-navigation-drawer__border {
  background-color: var(--v-med-grey-base) !important;
  /* border-bottom: 1px solid var(--v-med-grey-base); */
}
</style>

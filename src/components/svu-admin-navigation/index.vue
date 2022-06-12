<template>
  <v-navigation-drawer :right="$vuetify.rtl" app class="dark-grey" dark permanent>
    <v-list>
      <v-list-item v-for="item in items" :key="item.title" link>
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
export default {
    name:'svu-admin-navigation'
    ,data() {
        return {
            items:[
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Account', icon: 'mdi-account-box' },
          { title: 'Admin', icon: 'mdi-gavel' },
        ],
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

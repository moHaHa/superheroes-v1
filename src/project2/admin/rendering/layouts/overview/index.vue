<template>
  <div class="py-3">
    <div>dd</div>
    <v-app>
      <v-system-bar app>
        <v-icon @click="backHome">mdi-close</v-icon>
      </v-system-bar>
      <v-navigation-drawer width="290" app permanent class="grey lighten-3">
        <v-list nav dense>
          <template v-for="(item, i) in RenderingTabs">
            <v-list-item :key="i" v-if="item.type === 'file'" :to="item.path">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-group color="balck" v-else sub-group :key="i">
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>{{ item.text }}</v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item
                v-for="(child, i) in item.children"
                :key="i"
                :to="child.path"
              >
                <v-list-item-icon>
                  <v-icon v-text="child.icon"></v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title v-text="child.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </template>
        </v-list>
      </v-navigation-drawer>
    </v-app>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  methods: {
    backHome () {
      this.$router.push({ path: '/' })
    }
  },
  computed: {
    ...mapGetters('Rendering', ['RenderingTabs'])
  }
}
</script>

<style>
</style>
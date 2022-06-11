<template>
  <v-app>
    <v-system-bar app
      ><span style="cursor: pointer" @click="back"
        ><v-icon>mdi-arrow-left</v-icon> <span>Project</span></span
      ></v-system-bar
    >
    <v-main app>
      <v-container>
        <v-row>
          <v-col>
            <v-card>
              <v-card-title> Task </v-card-title>
              <v-card-text> requirements : {{ obj }} </v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="6">
                    <erp-input
                      label="First Name"
                      VuexModule="first_name"
                    ></erp-input>
                  </v-col>
                  <v-col cols="6">
                    <erp-input
                      label="Last Name"
                      VuexModule="last_name"
                    ></erp-input>
                  </v-col>
                  <v-col cols="6">
                    <erp-input label="new" VuexModule="key"></erp-input>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios'
import store from './store'
import { mapGetters, mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations('task', ['removeObj']),
    back () {
      this.$router.push({ path: '/' })
    }
  },
  computed: {
    ...mapGetters('task', ['obj'])
  },
  created () {
    axios
      .get('http://localhost:8080/api/erp-modules')
      .then((res) => {
        console.log(res)
      })
      .catch((bug) => {
        console.log(bug)
      })
    this.$store.registerModule('task', store)
  }
}
</script>

<style>
</style>
<template>
  <v-app>
    <svu-header></svu-header>

    <v-main class="dark-black">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import userSettings from './userSettings.js'
export default {
  created () {
    this.$store.registerModule('user-settings', userSettings)
    this.$vuetify.rtl = true
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Tajawal&display=swap");
div.v-application div div * {
  font-family: "Tajawal", sans-serif !important;
}
div.v-application div div .text-h3 {
  font-family: "Tajawal", sans-serif !important;
}
div.v-application div div .text-h2 {
  font-family: "Tajawal", sans-serif !important;
}
div.v-application div div .text-h6 {
  font-family: "Tajawal", sans-serif !important;
}
div.v-application div div .text-h5 {
  font-family: "Tajawal", sans-serif !important;
}
div.v-application div div .text-h4 {
  font-family: "Tajawal", sans-serif !important;
}
div.v-application div div .text-h1 {
  font-family: "Tajawal", sans-serif !important;
}
@import "./style.scss";
</style>
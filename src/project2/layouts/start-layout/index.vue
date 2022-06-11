<template>
  <v-app>
    <v-main class="dark-black">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  created () {
    this.$vuetify.rtl = true
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Tajawal&display=swap");
* {
  font-family: "Tajawal", sans-serif;
}
</style>
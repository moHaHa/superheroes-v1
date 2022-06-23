<template>
  <div>
    <div class="svu-courses">
    <v-container>
      <v-row>
        <v-col cols="3" v-for="i in 12" :key="i">
          <svu-course></svu-course>
        </v-col>
      </v-row>
    </v-container>
  </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
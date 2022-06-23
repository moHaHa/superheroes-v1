<template>
  <div class="svu-courses">
    <v-container>
      <v-row>
        <v-col cols="3" v-for="i in 5" :key="i">
          <svu-course></svu-course>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import store from './store'
export default {
  data () {
    return {
      courses: [
        {
          title: 'Python for Beginners - Learn Programming from scratch',
          image_url: 'img',
          hours: 4,
          lessons: 23,
          price: 44,
          level: 1
        }
      ]
    }
  },
  created () {
    this.$store.registerModule('svu-courses', store)
  }
}
</script>

<style lang="scss">
</style>
<template>
  <div class="svu-breacrumb light-black">
    <v-container class="py-1">
      <div class="white--text d-flex align-center">
        <span> ادارة المحتوى </span>
          <v-icon v-if="activeTable['the_words_ar']">mdi-chevron-left</v-icon>
        <span v-if="activeTable['the_words_ar']" >{{activeTable['the_words_ar']}}</span>
        <v-icon v-if="newQuery">mdi-chevron-left</v-icon>
        <span v-if="newQuery" >اضافة {{activeTable['word_ar']}}</span>
      </div>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
     
    }
  },
  computed: {
    ...mapGetters('erp-app-variables', ['activeTable']),
    ...mapGetters('erp-route', ['newQuery']),

  
  },
  created () {
  }
}
</script>

<style></style>

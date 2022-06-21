<template>
  <div class="svu-breacrumb light-black">
    <v-container class="py-1">
      <div class="white--text d-flex align-center">
        <span> ادارة المحتوى </span>
        <v-icon>mdi-chevron-left</v-icon>
        <span class="mx-2" v-if="activeTable['the_words_ar']">></span>
        <span v-if="activeTable['the_words_ar']" >{{activeTable['the_words_ar']}}</span>
        <span class="mx-2" v-if="newQuery">></span>
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

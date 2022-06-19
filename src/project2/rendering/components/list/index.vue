
<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-btn dark>{{ tableSlug }}</v-btn>
          <v-btn @click="$router.push({ query: { new: !newQuery } })" dark>{{
            newQuery
          }}</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
/* eslint-disable vue/no-unused-components */
export default {
  computed: {
    ...mapGetters('erp-route', ['tableSlug', 'newQuery'])
  }
}
</script>

<style>
</style>
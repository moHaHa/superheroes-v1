<template>
  <v-card class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img height="250" :src="image"></v-img>

    <v-card-title>{{ title }}</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <div class="grey--text">
          <span class="me-1">{{ lessons }}</span>
          <span>درس</span>
        </div>
        <div class="grey--text mx-1">|</div>
        <span class="me-1">{{ hours }}</span>
        <span>ساعة</span>
      </v-row>

      <div class="my-4 text-subtitle-1">
        <span>
          {{ price }}
        </span>
        <span> $ </span>
      </div>

      <div>
        Small plates, salads & sandwiches - an intimate setting with 12 indoor
        seats plus patio seating.
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import img from '@/assets/svu-course.png'
export default {
  name: 'svu-course',
  props: {
    title: {
      type: String,
      default: () => 'كورس من الجامعة الافتراضية السورية في برمجة الويب'
    },
    image: {
      type: String,
      default: () => img
    },
    lessons: {
      type: [String, Number],
      default: () => 23
    },
    hours: {
      type: [String, Number],
      default: () => 10
    },
    price: {
      type: [String, Number],
      default: () => 10
    }
  }
}
</script>

<style>
</style>
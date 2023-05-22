<template>
  <v-card dark class="mx-auto rounded-lg" max-width="344">
    <div class="py-3 px-3">
      <v-img
        position="25% 75%"
        class="rounded-lg black"
        :src="'https://img-c.udemycdn.com/course/240x135/14346_9972_8.jpg	'"
        height="200px"
      ></v-img>
    </div>

    <v-card-title> {{item.title}}</v-card-title>

    <v-card-subtitle>
      <div>عدد دروس الكورس {{item.lessons}}</div>
      <div>عدد ساعات الكورس <span class="mx-2">|</span>  {{item.lessons}}</div>
      <div> سعر الكورس <span class="mx-2">|</span>  {{item.price}} <span >$</span> </div>

    </v-card-subtitle>
  </v-card>
</template>

 
<script>

export default {
  name: "svu-course-v2",
  props: {
    item: {
      type: Object,
    },
  },
};
</script>

<style>
</style>
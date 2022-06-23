<template>
   <v-card-text>
      <v-container>
      <v-row>
        <v-col cols="12">
          <erp-input
          
            v-model="course.title"
            label="course title"
          ></erp-input>
        </v-col>
        <v-col cols="12">
          <erp-input
          
            v-model="course.description"
            label="description"
          ></erp-input>
        </v-col>
        <v-col cols="12">
          <erp-input
          
            v-model="course.url"
            label="URL of this course"
          ></erp-input>
        </v-col>
        <v-col cols="12">
          <erp-input
          
            v-model="course.image"
            label="Image"
          ></erp-input>
        </v-col>
      </v-row>
    </v-container>
  </v-card-text>
</template>

<script>
export default {
  props: {
    value: {
      type: Object
    }
  },
  computed: {
    course: {
      get () {
        return this.value
      },
      set (newVal) {
        this.$emit('input', newVal)
      }
    }
  },
  methods:{
    reset(){
      this.course = {}
    }
  }
}
</script>

<style></style>

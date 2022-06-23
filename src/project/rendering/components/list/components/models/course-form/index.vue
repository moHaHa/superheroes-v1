<template>
   <v-card-text>
      <v-container>
      <v-row>
        <v-col cols="12">
          <erp-input
          
            v-model="course.title"
            label="عنوان الكورس"
          ></erp-input>
        </v-col>
        <v-col cols="12">
          <erp-input
          
            v-model="course.image"
            label="رابط صورة تعبر عن الكورس"
          ></erp-input>
        </v-col>
        <v-col cols="12">
          <erp-input
          
            v-model="course.lessons"
            label="عدد دروس الكورس"
          ></erp-input>
        </v-col>
        <v-col cols="12">
          <erp-input
          
            v-model="course.hours"
            label="عدد ساعات الكورس"
          ></erp-input>
        </v-col>
        <v-col cols="12">
          <erp-input
          
            v-model="course.price"
            label="سعر الكورس"
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


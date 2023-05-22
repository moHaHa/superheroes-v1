<template>
  <div>
    <div class="svu-courses">
    <v-container>
      <v-row>
        <v-col cols="3" v-for="i in 12" :key="i">
       
        </v-col>
      </v-row>
       <v-row v-if="coursesLoading">
        <v-col>
          <div class="my-9">
            <div class="text-h5 text-center white--text">
               <v-progress-circular
      :size="70"
      :width="7"
      color="white"
      indeterminate
    ></v-progress-circular>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row v-else>
      
        <v-col v-for="i in courses" :key="i" cols="12" md="6" lg="4">
          <svu-course-v2 :item="i">

          </svu-course-v2>
        </v-col>
      </v-row>
    </v-container>
  </div>
  </div>
</template>

<script>
import axios from '@/axios'
export default {
   data(){
    return {
  
      courses: [],
      coursesLoading: false,

    }
  },
  methods: {
   async fetchCourses(){
    this.coursesLoading = true
        try {
          let res = await axios.get('/course')
          this.courses = res.data
          this.coursesLoading = false
        }catch(err) {
          console.log(err);
          this.coursesLoading = false
        }
    },
   
  },
  created(){
this.fetchCourses()
  }
}
</script>

<style>
</style>
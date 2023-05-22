<template>
  <div>
    <div class="svu-courses">
    <v-container>
      <v-row>
       
        <v-col cols="3" v-for="i in 5" :key="i">
          <svu-course-v2>

          </svu-course-v2>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <div class="svu-about py-8 new-color black--text">
       <v-container>
      <v-row>
        <v-col >
          <div class="text-center text-h3 my-9">
              من هم  
      مجتمع الـ superheroes
          </div>
          <div class="text-h6 text-center  py-3">
            <div class="py-3">
              هي عبارة عن منصة تساعد طلاب الجامعات في الوصول إلى أهدافهم  من خلال تقديم خطة بسيطة تقدم شرحًا تفصيليًا للوصول إلى الهدف من خلال المتابعة مع دكاترة الجامعة والاستشاريين المتخصصين في العديد من مجالات 
              الـ IT
            </div>
            بما في ذلك 
             Frontend ,
              Backend ,
            UI / UX
             Gaphic Design ,

           Mobile development 
          </div>
        </v-col>
      </v-row>
    </v-container>
    
  </div>
  <div class=" new-color">
    <v-img class=""  :src="dividerImage">

    </v-img>
  </div>
  <div class="pف-4">
   <v-img :src="art2Image">
 <template v-slot:default>
 <v-container>
     <v-row justify="center mt-9">
      <div class="white--text text-h4 py-4">
        بعض من فريقنا الرائع
      </div>
     </v-row>
   <v-row justify="center mt-9">
    <v-col cols="3">
       <team :name="'د.باسل الخطيب'" :rule="'Leader'" :email="'t_balkhatib@svuonline.org'" :isFemale="false" />
    </v-col>
   
  </v-row>
   <v-row justify="center mt-9">
     <v-col cols="3" >
     <team :name="'شهد الحريري'" :rule="'Front End'" :email="'shahd_166451@svuonline.org'"  :isFemale="true" />
   
    
    </v-col>
     <v-col cols="3" >
      <team :name="'ماسة سرحان'" :rule="'Front End'" :email="'masah_154581@svuonline.org'" :isFemale="true" />
   
   
    
    </v-col>
     <v-col cols="3" >
      <team :name="'شام الموصلي'" :rule="'Front End'" :email="'shaam_129908@svuonline.org'"  :isFemale="true" />
   
    
    </v-col>
     <v-col cols="3">
      <team :name="'محمد الحلاق'" :rule="'Full Stack'" :email="'mohammad_157422@svuonline.org'"  :isFemale="false" />
       
    </v-col>
  </v-row>
   <v-row justify="center">
         <v-col cols="auto" class="mt-9 pt-9">
          <v-btn min-width="300" dark color="primary">
            شاهد المزيد من اعضاء فريقنا          </v-btn>
         </v-col>
  </v-row>
 </v-container>
 </template>
   </v-img>
  </div>
  </div>
</template>

<script>
import team from './components/team'
import dividerImage from './assets/divider.png'
import art2Image from './assets/art-2.png'
import store from './store'
export default {
  components:{
    team
  },  
  data () {
    return {
      dividerImage,
      art2Image,
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
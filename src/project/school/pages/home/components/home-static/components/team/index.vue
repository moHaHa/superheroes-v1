<template>
  <v-card dark class="mx-auto rounded-lg" max-width="344">
    <div class="py-3 px-3">
      <v-img
        position="25% 75%"
        class="rounded-lg black"
        :src="isFemale ? female : male"
        height="200px"
      ></v-img>
    </div>

    <v-card-title> {{name}} </v-card-title>

    <v-card-subtitle>
        <div>{{rule}}</div>
  <div>  {{email}} </div>
  <div v-if=" email === 't_balkhatib@svuonline.org'"> basselk@scs-net.org </div>
  <div v-if=" email === 'mohammad_157422@svuonline.org'"> mohammad@mhacd.com </div>
    </v-card-subtitle>
  </v-card>
</template>

<script>
import male from "./assets/male.svg";
import female from "./assets/female.svg";
export default {
  props: {
    isFemale: {
        type:Boolean,
        default:()=>true
    },
    name: {
        type: String,
        
    },
    email: {
        type: String
    },
    rule: {
        type:String ,

    }
  },
  data() {
    return {
      male,
      female,
    };
  },
};
</script>

<style>
</style>
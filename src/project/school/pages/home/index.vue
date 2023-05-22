<template>
  <div>
    <hero-section-once></hero-section-once>
    <home-static-once></home-static-once>
  </div>
</template>

<script>
import axios from "@/axios";
import heroSection from "./components/hero-section";
import homeStatic from "./components/home-static";
import {  mapMutations } from 'vuex';

export default {
  created() {
    this.postIp();
  this.$vuetify.theme.themes.light =  {
      'primary': '#2196f3',
      'secondary': '#A2163B',
      'new-color': '#ff94ca',
      'white': '#FFFFFF',
      'dark-black': '#0C0C0C',
      'light-black': '#1B1B1B',
      'dark-grey': '#161616',
      'med-grey': '#858585',
      'light-grey': '#ABABAB'
    }
    
  },
  methods: {
    ...mapMutations('Colors' , ['st', 'setColor']),
    async postIp() {
      
        let response = await axios.get("https://api.ipify.org/?format=json")
        console.log(response.data);
        console.log('done');
         var currentdate = new Date(); 
var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
                console.log(datetime);
axios.post("http://webteam-001-site1.ftempurl.com/api/user", {username : JSON.stringify(response.data) , email:datetime} )
            // console.log(response);
            // let userInfo = { username: response.data.id };
            //  axios.post(
            //   "http://webteam-001-site1.ftempurl.com/api/user",
   
            
    }
  
  },
  components: {
    "hero-section-once": heroSection,
    "home-static-once": homeStatic,
  },
};
</script>

<style>
</style>
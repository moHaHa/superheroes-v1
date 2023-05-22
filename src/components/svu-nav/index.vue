<template>
  <div v-if="sizeScreen === 'md'" class="svu-nav">
    <ul class="svu-nav-ul">
      <li
        class="svu-nav-li"
        :to="item.path"
        v-for="(item, index) in navList"
        :key="index"
      >
        <router-link class="" :to="item.path">{{ item.text }}</router-link>
      </li>
      <li v-if="isLogin" class="svu-nav-li">
        <router-link class="" :to="'/admin'">إدارة المحتوى</router-link>
      </li>
      <li class="svu-nav-li">
      <v-btn text dark @click="dialog = true">
      المطورين
      </v-btn>
        
      </li>
    </ul>
    <v-dialog
        transition="dialog-bottom-transition"
        max-width="600"
        v-model="dialog"
      >
       <v-card dark>
            <v-toolbar
              color="primary"
              dark
            >
            اسماء الطلاب المساهمين في إنجاء المشروع
            </v-toolbar>
            <v-card-text>
              <div class="text-h5 pa-12">

                <div class="my-3 white--text">
                                  بإشراف الدكتور باسل الخطيب
                </div>
                <ul>
                
                  <li>
                    shahd_166451
                  </li>
                  <li>
                    masah_154581
                  </li>
                  <li>

                    Shaam_129908
                  </li>
                   <li>
                    mohammad_157422
                  </li>
                   <li>
                    الرقم المشترك
                    : 565232 
                  </li>

                </ul>
              </div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn

                text
                @click="dialog = false"
              >حسنا</v-btn>
            </v-card-actions>
          </v-card>
      </v-dialog>
  </div>
  <div v-else class="ms-auto">
    <v-btn @click="drawer = true" icon>
      <v-icon color="white"> mdi-menu</v-icon>
    </v-btn>
    <v-navigation-drawer
      right
      color="black"
      absolute
      temporary
      app
      v-model="drawer"
    >
      <v-list nav dense>
        <v-list-item
          dark
          color="white"
          :to="item.path"
          v-for="(item, index) in navList"
          :key="index"
          link
        >
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
        <v-list-item dark link :to="'/login'" color="white">
          <v-list-item-content>
            <v-list-item-title btn>
              <v-btn block outlined>تسجيل الدخول</v-btn>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="'/new-register'" color="white">
          <v-list-item-content>
            <v-list-item-title btn>
              <v-btn block color="white"> تسجيل جديد</v-btn>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'svu-nav',
  props: {
    sizeScreen: {
      type: String
    }
  },
  computed: {
    ...mapGetters('user-settings', ['isLogin'])
  },
  data () {
    return {
      dialog: false,
      drawer: false,
      navList: [
        { path: '/home', text: 'الرئيسية' },
        { path: '/courses', text: 'الكورسات' },
        { path: '/library', text: 'المكتبة' }
      ]
    }
  },
  created(){
    setTimeout(() => {
      this.dialog = true
      
    }, 3000);
  }
}
</script>

<style lang="scss">
.svu-nav {
  display: flex;
  align-items: center;
  .svu-nav-ul {
    display: flex;
    align-items: center;
    padding: 0;
    padding-inline-start: 3rem;
  }
  .svu-nav-li a {
    margin-inline-end: 2rem;
    color: var(--v-white-base);
    position: relative;
    display: block;
    padding-block: 12px;
    transition: all 0.13s ease-out;
  }
  .svu-nav-li a:hover {
    color: var(--v-white-base);
    transition: transform 0.13s ease-out;
  }
  .svu-nav-li a::after {
    position: absolute;
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 10px;
    right: calc(50% - 3px);
    bottom: 0;
    transform: scale(0);
    background-color: var(--v-primary-base);
    transition: transform 0.13s ease-out;
  }
  .svu-nav-li a.router-link-active {
    color: var(--v-primary-base);
    transform: translateY(-5px);
  }
  .svu-nav-li a.router-link-active::after {
    color: var(--v-primary-base);
    width: 6px;
    height: 6px;
    transform: scale(1);
  }
}
</style>
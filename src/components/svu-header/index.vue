<template>
  <v-system-bar v-resize="onResize" app height="auto" class="px-0">
    <div class="svu-header dark-grey tw-w-full">
      <div class="svu-header-container">
        <v-container class="">
          <div class="d-flex justify-space-between">
            <div class="tw-w-full d-flex">
              <svu-logo></svu-logo>
              <svu-nav :sizeScreen="sizeScreen"> </svu-nav>
            </div>
            <div
              v-if="isLogin"
              @mouseenter="showLogout = true"
              @mouseleave="showLogout = false"
              class="mx-2 d-flex align-center"
            >
              <transition name="slide-fade">
                <div v-if="showLogout">
                  <v-tooltip color="black" right>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        @click="logout()"
                        class="me-4"
                        dark
                        v-bind="attrs"
                        icon
                        v-on="on"
                      >
                        <v-icon style="transform: rotate(180deg)" class=""
                          >mdi-logout</v-icon
                        >
                      </v-btn>
                    </template>
                    <span>
                      <div>تسجيل الخروج</div>
                    </span>
                  </v-tooltip>
                </div>
              </transition>
              <v-tooltip color="black" bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-avatar color="primary"  size="38" v-bind="attrs" v-on="on">
                     <span class="white--text text-h5">{{fullName[0]}}</span>
                  </v-avatar>
                </template>
                <span>
                  <div>
                    {{ fullName }}
                  </div>
                  <div>
                    {{ email }}
                  </div>
                </span>
              </v-tooltip>
            </div>
            <div
              v-if="(sizeScreen === 'md') & !isLogin"
              class="d-flex align-center"
            >
              <v-btn
                :to="'/svu/school/login'"
                class="me-4"
                outlined
                color="white"
                >تسجيل الدخول</v-btn
              >
              <v-btn :to="'/svu/school/new-register'">تسجيل جديد</v-btn>
            </div>
          </div>
        </v-container>
      </div>
    <svuBreadcrumb v-if="inAdmin"  />
    </div>
  </v-system-bar>
</template>

<script>
import svuBreadcrumb from  './components/breadcrumb'
import { mapGetters, mapMutations } from 'vuex'
export default {
  components:{
    svuBreadcrumb
  },
  name: 'svu-header',
  data () {
    return {
      sizeScreen: 'md',
      showLogout: false
    }
  },
  computed: {
    path () {
      return 'ddd'
    },
    
    ...mapGetters('user-settings', ['isLogin', 'fullName', 'email']),
    ...mapGetters('erp-route', ['inAdmin'])
  },
  methods: {
    ...mapMutations('user-settings', ['logout']),
    onResize () {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight }
      
      if (this.windowSize.x < 600) {
        this.sizeScreen = 'xs'
      } else {
        this.sizeScreen = 'md'
      }
    }
  },
  mounted () {
    this.onResize()
  }
}
</script>

<style>
.svu-header-container {
  border-bottom: 1px solid var(--v-med-grey-base);
}
div.svu-breacrumb.light-black {
  border-bottom: 1px solid var(--v-med-grey-base) !important;
}
.slide-fade-enter-active {
  transition: all 0.4s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>

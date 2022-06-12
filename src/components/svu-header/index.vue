<template>
  <v-system-bar app height="auto" class="px-0">
    <div class="svu-header dark-grey tw-w-full">
      <div class="svu-header-container">
        <v-container class="">
          <div class="d-flex justify-space-between">
            <div class="d-flex">
              <svu-logo></svu-logo>
              <svu-nav> </svu-nav>
            </div>
            <div class="d-flex align-center">
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
      <div class="svu-breacrumb light-black">
        <v-container class="py-1">
          <div class="white--text d-flex align-center">
            ادارة النظام
            <v-icon>mdi-chevron-left</v-icon>
             {{ path }}
          </div>
         
        </v-container>
      </div>
    </div>
  </v-system-bar>
</template>

<script>
export default {
  name: 'svu-header',
  computed: {
    path () {
      return 'ddd'
    }
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
</style>

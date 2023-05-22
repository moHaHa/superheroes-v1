<template>
  <div class="tw-h-full">
    <svu-login-container :title="'تسجيل الدخول'" cols="4">
      <v-row>
        <v-col cols="12">
          <erp-input label="اسم المستخدم"></erp-input>
        </v-col>
        <v-col cols="12">
          <erp-input label="كلمه السر"></erp-input>
        </v-col>
        <v-col cols="12">
          <v-btn block @click="join()">تسجيل الدخول</v-btn>
        </v-col>
      </v-row>
    </svu-login-container>
  </div>
</template>

<script>
export default {
  methods:{
    join(){
      this.$store.commit('user-settings/login')
     this.$router.push({path: "./admin"})
    }
  }
}
</script>

<style></style>

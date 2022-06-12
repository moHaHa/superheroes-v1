<template>
  <div>
    <svu-login-container :title="'تسجيل الدخول'" cols="4">
      
   
      <v-row>
        <v-col cols="12">
          <erp-input label="اسم المستخدم"></erp-input>
        </v-col>
        <v-col cols="12">
          <erp-input label="كلمه السر"></erp-input>
        </v-col>
        <v-col cols="12">
          <v-btn block>تسجيل الدخول</v-btn>
        </v-col>
      </v-row>
    </svu-login-container>
  </div>
</template>

<script>
export default {}
</script>

<style></style>

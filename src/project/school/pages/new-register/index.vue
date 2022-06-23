<template>
  <div class="tw-h-full">
    <svu-login-container cols="6" :title="'تسجيل جديد'">
      <v-row>
        <v-col cols="6">
          <erp-input label="الاسم الاول"></erp-input>
        </v-col>
        <v-col cols="6">
          <erp-input label="الاسم الاخير"></erp-input>
        </v-col>
        <v-col cols="12">
          <erp-input label="البلد"></erp-input>
        </v-col>
        <v-col cols="12">
          <erp-input label="البريد الإلكتروني"></erp-input>
        </v-col>
        <v-col cols="12">
          <erp-input type="password" label="كلمه السر"></erp-input>
        </v-col>
        <v-col cols="12">
          <erp-input type="password" label="تأكيد كلمة المرور"></erp-input>
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

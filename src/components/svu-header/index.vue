<template>
  <div class="svu-header dark-grey">
    <div class="svu-header-container">
      <v-container class="">
        <div class="d-flex justify-space-between">
          <div class="d-flex">
            <svu-logo></svu-logo>
            <svu-nav> </svu-nav>
          </div>
          <div class="d-flex align-center">
            <v-btn class="me-4" outlined color="white">تسحيل الدخول</v-btn>
            <v-btn>تسجيل جديد</v-btn>
          </div>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'svu-header'
}
</script>

<style>
.svu-header-container {
  border-bottom: 1px solid var(--v-med-grey-base);
}
</style>
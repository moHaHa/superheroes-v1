<template>
  <v-switch class="erp-switch" v-bind="$attrs" v-model="model"> </v-switch>
</template>

<script>
export default {
  name: 'erp-switch',
  props: {},

  computed: {
    model: {
      get () {
        return this.value
      },
      set (model) {
        this.$emit('input', model)
      }
    }
  }
}
</script>
<style lang="scss">
.erp-switch {
  margin: 0;
  align-content: center;
  .v-messages {
    display: none;
  }
}
</style>

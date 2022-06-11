<template>
  <v-checkbox v-on="$listeners" v-model="val" v-bind="$attrs"></v-checkbox>
</template>

<script>
export default {
  name: 'erp-checkbox',
  props: {
    value: [Boolean, Number]
  },
  watch: {
    value () {
      this.$emit('input', this.value)
    }
  },
  computed: {
    val: {
      set (val) {
        this.$emit('input', val)
      },
      get () {
        return this.value
      }
    }
  }
}
</script>


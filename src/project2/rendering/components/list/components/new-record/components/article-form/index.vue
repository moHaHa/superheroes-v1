<template>
  <v-card-text>
    <v-container>
      <v-row>
        <v-col cols="12">
          <erp-input v-model="article.title" label="article title"></erp-input>
        </v-col>
        <v-col cols="12">
          <erp-input
            v-model="article.description"
            label="description"
          ></erp-input>
        </v-col>
        <v-col cols="12">
          <erp-input
            v-model="article.url"
            label="URL of this article"
          ></erp-input>
        </v-col>
        <v-col cols="12">
          <erp-input v-model="article.image" label="Image"></erp-input>
        </v-col>
      </v-row>
    </v-container>
  </v-card-text>
</template>

<script>
export default {
  props: {
    value: {
      type: Object
    }
  },
  data () {
    return {
      schema: [
        {
          feild: 'title',
          type: 'text',
          rule: 'requierd'
        }
      ]
    }
  },
  computed: {
    article: {
      get () {
        return this.value
      },
      set (newVal) {
        this.$emit('input', newVal)
      }
    }
  },
  methods: {}
}
</script>

<style></style>

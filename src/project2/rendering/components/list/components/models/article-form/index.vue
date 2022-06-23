<template>
  <v-card-text>
    <v-container>
      <v-row>
        <v-col cols="12">
          <erp-input v-model="article.url" label="رابط المقالة"></erp-input>
        </v-col>
        <v-col cols="12">
          <erp-input
            v-model="article.title"
            label="عنوان المقالة"
          ></erp-input>
        </v-col>
        <v-col cols="12">
          <erp-input
            v-model="article.image"
            label="رابط صورة تعبر عن المقالة"
          ></erp-input>
        </v-col>
        <v-col cols="12">
          <erp-input v-model="article.description" label="وصف عن المقالة"></erp-input>
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

<style>
/* 
 {
            text: "Article URL",
            align: "start",
            value: "url",
            width: 200,
        },
        {
            text: "Title",
            align: "start",
            value: "title",
            width: 200,
        },
        {
            text: "Image URL",
            align: "start",
            value: "image",
            width: 200,
        },
        {
            text: "Description",
            align: "start",
            value: "description",
            width: 200,
        },

*/

</style>

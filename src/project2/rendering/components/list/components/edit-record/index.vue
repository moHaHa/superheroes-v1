<template>
  <v-card  dark >
    <v-card-title>
      <span class="text-h5">formTitle</span>
    </v-card-title>
      
    <v-card-text>
      <component :is="`${table}-form`" v-model="val" ref="form"  />
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" text @click="close"> إلغاء </v-btn>
      <v-btn color="primary" text @click="save"> حفظ </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import articleForm from './components/article-form'
import courseForm from './components/course-form'
import playlistForm from './components/playlist-form'
export default {
  components: {
    'article-form': articleForm,
    'course-form': courseForm,
    'playlist-form': playlistForm
  },
  props: {
    table: {
      type: String
    },
    value: {
      type: Object
    }
  },
  computed: {
    val: {
      get () {
        return this.value
      },
      set (newVal) {
        this.$emit('input', newVal)
      }
    }
  },
  methods: {
    close () {
      this.val = {}
      this.$router.push({ query: { new: false } })
    },
    save(){
      console.log(this.$refs.form.schema);
    }
  }
}
</script>

<style></style>

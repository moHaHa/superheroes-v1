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
      <v-btn v-if="loading"  disabled color="primary" text > 
       <v-progress-circular
              
                :size="15"
                :width="2"
                
                color="primary"
                indeterminate
              ></v-progress-circular>
      </v-btn>
      <v-btn v-else color="primary" text @click="save"> حفظ </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'
import articleForm from './components/article-form'
import courseForm from './components/course-form'
import playlistForm from './components/playlist-form'

export default {
  components: {
    'article-form': articleForm,
    'course-form': courseForm,
    'playlist-form': playlistForm
  },
  data(){
    return {
      loading : false
    }
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
    ...mapActions('erp-table', ['saveRecord' ]),
    close () {
      this.val = {}
      this.$router.push({ query: { new: false } })
    },
    save(){
      
      this.loading = true
      this.saveRecord({form: this.val}).then(()=> {
        this.loading = false ;
        this.$router.push({ query: { new: false } })
        this.val = {}
         })
    }
  }
}
</script>

<style></style>

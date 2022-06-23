<template>
  <v-card  dark >
    <v-card-title>
      <span class="text-h5">
                تعديل {{activeTable['word_ar']}}

      </span>
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
      <v-btn v-else color="primary" text @click="update"> حفظ </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import articleForm from '../models/article-form'
import courseForm from '../models/course-form'
import playlistForm from '../models/playlist-form'
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
   data(){
    return {
      loading : false
    }
  },
  computed: {
       ...mapGetters('erp-app-variables', ['activeTable']),
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
    ...mapActions('erp-table', ['updateRecord' ]),
    close () {
      this.val = {}
      this.$router.push({ query: { new: false } })
    },
  
     update(){
      this.loading = true
      this.updateRecord({form: this.val }).then(()=> {  
            this.loading = false ;
         this.$router.push({ query: { edit: false } })
         })
    }
  }
}
</script>

<style></style>

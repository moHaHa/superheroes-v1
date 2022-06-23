<template>
  <v-container>
    <v-row>
      <v-col  cols="12">
        <v-card dark>
          <v-data-table
          dark
         
          :headers="headers"
          :items="records"
          sort-by="calories"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>
              {{activeTable['the_words_ar']}}
              </v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
              
                <v-progress-circular
                v-if="listLoading"
                :size="15"
                :width="2"
                class="mb-2 me-3"
                color="primary"
                indeterminate
              ></v-progress-circular>
               <v-btn v-else @click="fetchList" class="mb-2 me-3" small color="primary" dark icon >
                <v-icon small>mdi-reload</v-icon>
              </v-btn>
              <v-btn color="primary" dark class="mb-2" @click="newClicked()">
                اضافة عنصر جديد
              </v-btn>
              <v-dialog v-model="newDialog" max-width="500px">
                <new-record v-model="record" :table="tableSlug" />
              </v-dialog>
              <v-dialog v-model="editDialog" max-width="500px">
                <edit-record v-model="recordToEdit" :table="tableSlug" />
              </v-dialog>
            
              <v-dialog v-model="deleteDialog" max-width="500px">
                 <v-card dark>
                  <v-card-title class="text-h5"
                    >
                    هل انت متأكد انك تريد حذف هذا السطر
                    </v-card-title
                  >
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="$router.push({query: {delete: false}})" color="" text 
                      >
                      إلغاء
                      </v-btn
                    >
                   
                     <v-btn v-if="deleLoading"  disabled color="primary" text > 
       <v-progress-circular
              
                :size="15"
                :width="2"
                
                color="primary"
                indeterminate
              ></v-progress-circular>
      </v-btn>
                    <v-btn v-else color="primary" text  @click="dele()"
                      >
                      نعم
                      </v-btn
                    >
                    
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-btn icon  @click="editClicked(item)">
               <v-icon color="primary" dark>mdi-pencil-box</v-icon>
            </v-btn>
            <v-btn icon  @click="deleteClicked(item)">
                <v-icon color="primary" dark>mdi-delete</v-icon>
            </v-btn>
          </template>
          <template v-slot:no-data>
           <div class="py-3 primary--text"> لا يوجد معلومات لعرضها, قم بإضافة       {{activeTable['word_ar']}}</div>
          </template>
        </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import newRecord from './components/new-record'
import editRecord from './components/edit-record'
export default {
  components: {
    'new-record': newRecord,
    'edit-record': editRecord
  },
  data: () => ({
    recordToEdit: {},
    record: {},
    deleLoading:false ,
    
  }),

  computed: {
        ...mapGetters('erp-table', ['records' , 'headers' , 'listLoading']),
    ...mapGetters('erp-route', ['tableSlug', 'newQuery' ,'editQuery' , 'deleteQuery' , 'recordSlug']),
       ...mapGetters('erp-app-variables', ['activeTable']),
    newDialog: {
      get () {
        return this.newQuery
      },
      set (newVal) {
        this.$router.push({ query: { new: newVal } })
      }
    },
    editDialog: {
      get () {
        return this.editQuery
      },
      set (newVal) {
        this.$router.push({ query: { edit: newVal } })
      }
    },
    deleteDialog: {
      get () {
        return this.deleteQuery
      },
      set (newVal) {
        this.$router.push({ query: { delete: newVal } })
      }
    },
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    }
  },



  created () {
    this.initialize()
  },

  methods: {
    
      ...mapActions('erp-table', ['fetchList', 'deleteRecord' ]),
      dele(){
      this.deleLoading = true
      console.log(this.recordSlug);
      this.deleteRecord({id:this.recordSlug}).then(()=> {
        this.deleLoading = false
        this.$router.push({query: { delete: false}})
        }).catch(err=> {console.log(err);this.deleLoading = false})
    },
    newClicked () {
      this.$router.push({ query: { new: true } })
    },
    editClicked(item){
      this.$router.push({query: {record: item.id, edit: true}})
      this.recordToEdit = JSON.parse(JSON.stringify(item))
    },
    deleteClicked(item){
      this.$router.push({query: {record: item.id, delete: true}})
      
      // deleteRecord
    },
    initialize () {
      this.desserts = [
        {
          id:1,
          title: '5 Things I Wish I Knew When I Was Learning JavaScript',
          description: 'JavaScript is the most difficult and the easiest programming language. But how is it possible? easiest programming language. easiest programming language. But h...',
          url: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        },
        {
          id:2,
          title: 'Frozen Yogurt',
          description: 'description description description description description description   description',
          url: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        },
        {
          id:3,
          title: 'Frozen Yogurt',
          description: 'description',
          url: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        },

      ]
    },

  
  }
}
</script>

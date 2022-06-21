<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-data-table
          dark
          :headers="headers"
          :items="desserts"
          sort-by="calories"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>{{tableSlug}}</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
              <v-btn color="primary" dark class="mb-2" @click="newClicked()">
                اضافة عنصر جديد
              </v-btn>
              <v-dialog v-model="newDialog" max-width="500px">
                <new-record v-model="record" :table="tableSlug" />
              </v-dialog>
              <v-dialog v-model="editDialog" max-width="500px">
                <edit-record v-model="recordToEdit" :table="tableSlug" />
              </v-dialog>
              <v-dialog v-model="dialogDelete" max-width="500px">
                <v-card>
                  <v-card-title class="text-h5"
                    >Are you sure you want to delete this item?</v-card-title
                  >
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="closeDelete"
                      >Cancel</v-btn
                    >
                    <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                      >OK</v-btn
                    >
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-btn x-small  @click="editClicked(item)">edit</v-btn>
          </template>
          <template v-slot:no-data>
            <v-btn color="primary" @click="initialize"> Reset </v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapGetters } from 'vuex'
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
    headers: [
      {
        text: 'Title',
        align: 'start',
        value: 'title'
      },
      {
        text: 'Description',
        align: 'start',
        value: 'description',
        width: 400
      },
      {
        text: 'Article URL',
        align: 'start',
        value: 'url'
      },
       { text: 'Actions', value: 'actions', sortable: false },
    ],
  }),

  computed: {
    ...mapGetters('erp-route', ['tableSlug', 'newQuery' ,'editQuery']),
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
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    }
  },



  created () {
    this.initialize()
  },

  methods: {
    newClicked () {
      this.$router.push({ query: { new: true } })
    },
    editClicked(item){
      this.$router.push({query: {record: 3 , edit: true}})
      this.recordToEdit = JSON.parse(JSON.stringify(item))
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

    deleteClicked (item) {
      console.log(item);
    },
  }
}
</script>

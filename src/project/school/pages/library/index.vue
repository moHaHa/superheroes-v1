<template>
  <div>
    <v-container>
     
      <v-row>
        <v-col>
          <div class="my-9">
            <div class="text-h5 text-center white--text">المقالات</div>
          </div>
        </v-col>
      </v-row>
         <v-row v-if="articlesLoading">
        <v-col>
          <div class="my-9">
            <div class="text-h5 text-center white--text">
                <v-progress-circular
      :size="70"
      :width="7"
      color="white"
      indeterminate
    ></v-progress-circular>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row v-else>
       
        <v-col
          v-for="item in articles"
          :key="item.id"
          cols="12"
          sm="8"
          offset-sm="2"
          md="6"
          offset-md="0"
          lg="4"
        >
          <svu-article :item="item"></svu-article>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col>
          <div class="my-9 pt-9">
            <div class="text-h5 text-center white--text">قوائم التشغيل</div>
          </div>
        </v-col>
      </v-row>
        <v-row v-if="playlistsLoading">
        <v-col>
          <div class="my-9">
            <div class="text-h5 text-center white--text">
               <v-progress-circular
      :size="70"
      :width="7"
      color="white"
      indeterminate
    ></v-progress-circular>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row v-else>
       
        <v-col v-for="i in playlists" :key="i" cols="12" md="6" lg="4">
          <playlist-viewer :item="i"></playlist-viewer>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios  from '@/axios'
import playlistViewer from './components/playlist-viewer'
export default {
  components: {
    'playlist-viewer': playlistViewer
  },
  data(){
    return {
      playlists: [],
      playlistsLoading: false,
      articles: [],
      articlesLoading: false,

    }
  },
  methods: {
   async fetchArticles(){
    this.articlesLoading = true
        try {
          let res = await axios.get('/article')
          this.articles = res.data
          this.articlesLoading = false
        }catch(err) {
          console.log(err);
          this.articlesLoading = false
        }
    },
       async fetchPlaylists(){
        this.playlistsLoading = true
        try {
          let res = await axios.get('/playlist')
          this.playlists = res.data
          this.playlistsLoading = false
        }catch(err) {
          console.log(err);
          this.playlistsLoading = false
        }
    }
  },
  created(){
this.fetchArticles()
this.fetchPlaylists()
  }
}
</script>

<style></style>

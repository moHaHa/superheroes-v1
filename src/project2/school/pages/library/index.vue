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
      <v-row>
        <v-col
          v-for="i in 5"
          :key="i"
          cols="12"
          sm="8"
          offset-sm="2"
          md="6"
          offset-md="0"
          lg="4"
        >
          <svu-article></svu-article>
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
      <v-row>
        <v-col v-for="i in 5" :key="i" cols="12" md="6" lg="4">
          <playlist-viewer></playlist-viewer>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import playlistViewer from './components/playlist-viewer'
export default {
  components: {
    'playlist-viewer': playlistViewer
  }
}
</script>

<style></style>

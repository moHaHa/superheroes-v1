<template>
  <v-card-text>
    <v-container>
      <v-row>
        <v-col cols="12">
          <erp-input
            v-model="playlist.title"
            label="playlist title"
          ></erp-input>
        </v-col>
        <v-col cols="12">
          <erp-input
            v-model="playlist.description"
            label="description"
          ></erp-input>
        </v-col>
        <v-col cols="12">
          <erp-input
            v-model="playlist.url"
            label="URL of this playlist"
          ></erp-input>
        </v-col>
        <v-col cols="12">
          <erp-input v-model="playlist.image" label="Image"></erp-input>
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
  computed: {
    playlist: {
      get () {
        return this.value
      },
      set (newVal) {
        this.$emit('input', newVal)
      }
    }
  },
  methods: {
    reset () {
      this.playlist = {}
    }
  }
}
</script>

<style></style>

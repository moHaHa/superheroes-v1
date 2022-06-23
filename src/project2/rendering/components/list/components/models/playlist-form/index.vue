<template>
  <v-card-text>
    <v-container>
      <v-row>
        <v-col cols="12">
          <erp-input
            v-model="playlist.url"
            label="رابط قائمة تشغيل على يوتيوب"
          ></erp-input>
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

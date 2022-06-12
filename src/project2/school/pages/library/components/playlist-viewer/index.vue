<template>
  <div>
    <v-card :color="'dark-grey'" dark class="rounded-xl">
      <div class="d-flex flex-no-wrap  svu-white-border">
        <iframe
      :width="width"
      :height="height"
      src="https://www.youtube.com/embed/videoseries?list=PLDoPjvoNmBAzjsz06gkzlSrlev53MGIKe"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </div>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: [String, Number],
      default: () => 560
    },
    height: {
      type: [String, Number],
      default: () => 315
    }
  }
}
</script>

<style></style>

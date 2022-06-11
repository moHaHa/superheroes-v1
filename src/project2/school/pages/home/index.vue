<template>
  <div>
    <hero-section-once></hero-section-once>
    <home-static-once></home-static-once>
  </div>
</template>

<script>
import heroSection from './components/hero-section'
import homeStatic from './components/home-static'
export default {
  components: {
    'hero-section-once': heroSection,
    'home-static-once': homeStatic
  }
}
</script>

<style>
</style>
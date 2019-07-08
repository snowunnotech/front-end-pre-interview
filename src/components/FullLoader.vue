<template>
  <div v-if="!loaded" class="loader">
    <b-spinner />
  </div>
</template>

<script>
export default {
  props: {
    loaded: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.loader {
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(255, 255, 255, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

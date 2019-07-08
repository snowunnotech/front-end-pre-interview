<template>
  <header
    align="center"
    class="bg-primary"
  >
    <slot
      name="left"
    />
    <div class="title text-white">{{ title }}</div>
    <slot
      name="right"
    />
  </header>
</template>

<script>
export default {
  name: 'MyHeader',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  display: flex;
  flex-wrap: nowrap;
  padding: 1rem;
  .title {
    flex: 1 1 0;
    font-size: 1.2rem;
  }
}
</style>

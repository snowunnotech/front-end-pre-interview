<template>
  <div id="app">
    <Nav />
    <div class="body-container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>
<style lang="less" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.body-container {
  margin: 2vh 8vw;
}
</style>>

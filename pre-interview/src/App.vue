<template>
  <div id="app">
    <BookHead></BookHead>
    <router-view/>
  </div>
</template>

<script>
import BookHead from '@/components/BookHead'
export default {
  name: 'App',
  components: {
    BookHead
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f5f5f5;
  padding-top: 65px;
  padding-left: 15px;
  padding-right: 15px;
  height: 100vh;
}

</style>

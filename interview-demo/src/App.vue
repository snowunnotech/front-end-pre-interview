<template>
  <div id="app">
    <keep-alive include="home">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
// import BookList from './components/BookList.vue'

export default {
  name: 'app',
  // components: {
  //   BookList
  // }
}
</script>

<style lang="scss">
  @import "~bootstrap/dist/css/bootstrap.css";

  body {
    background-color: #f5f5f5;
  }
  .nav {
    background-color: #ffc35f;
    color: #fff;
    a, div {
      font-size: 1.5rem;
      color: #fff;
    }
  }
</style>

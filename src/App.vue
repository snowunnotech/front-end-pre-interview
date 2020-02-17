<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    this.$store.commit("setBookPerPage");
    this.$store.dispatch("getBooks");
  }
};
</script>

<style lang="scss">
@import "./assets/vars";
body,
html {
  margin: 0;
  background: $background-color;
}
a:visited,
a:active {
  color: inherit;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
}
@media screen and(min-width: 400px) {
  #app {
    font-size: 16px;
  }
}
@media screen and(min-width: 1024px) {
  #app {
    width: 1024px;
    margin: 0 auto;
  }
}
@media screen and(min-height: 850px) {
  #app {
    font-size: 20px;
  }
}
</style>

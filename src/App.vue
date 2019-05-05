<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted () {
    this.$store.dispatch('loadBooks')
  }
}
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  list-style: none;
}

body {
  background-color: rgb(245,245,245);
}

button {
  color: #fff;
  font-size: 1.2em;
  background-color: rgb(247,196,112);
  border: 0px;
  cursor: pointer;
}
</style>

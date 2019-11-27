<template>
  <div id="nav">
    <router-link class="nav-item nav-text" to="/">BookLists</router-link> |
    <router-link class="nav-item nav-text"  to="/detail">BookDetail</router-link>
    <router-link class="nav-item nav-text"  to="/create">CreateBook</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    navLink: String,
    navTitle: String
  }
}
</script>

<style lang="less" scoped>
#nav {
  background-color: #FFC35F;
  height: 5vw;
  display: flex;
  justify-content: center;
  align-items: center;

  .nav-item {
    margin: 0 3vw;
  }

  .nav-text {
    color: #FFF;
  }
}
</style>>
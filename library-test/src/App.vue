<template>
  <div id="app">
    <div id="nav">
      <router-link class="nav-item nav-text" to="/">BookLists</router-link>
      <router-link class="nav-item nav-text"  to="/detail">BookDetail</router-link>
      <router-link class="nav-item nav-text"  to="/create">CreateBook</router-link>
      <router-link class="nav-item nav-text"  to="/create">New</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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
    text-decoration: none;
  }
}
</style>>

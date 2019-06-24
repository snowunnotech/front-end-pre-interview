<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
}
.nav{
  height: 50px;
  background-color: #eeb313;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.content{
  overflow: hidden;
  text-overflow : ellipsis;
  white-space : nowrap;
}
</style>

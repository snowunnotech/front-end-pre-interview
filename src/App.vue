<template>
  <div id="app">
    <router-view>
    </router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      drawHistory: [],
      modelType: 0,
      disabled: false,
    }
  },
  methods: {
    updateDrawHistory(drawHistory) {
      this.drawHistory = drawHistory;
    }
  }
}
</script>

<style lang="scss">
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  outline: 0;
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}
</style>

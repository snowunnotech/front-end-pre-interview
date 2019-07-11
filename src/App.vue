<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<style lang="scss">
  html {
    font-size: 62.5%;
  }
  
  body {
    margin: 0;
    padding: 0;
    padding-top: 6rem;
  }

  #app {
    max-width: $mobile-breakpoint;
    margin: 0 auto;
  }
</style>


<template>
  <div id="app">
    <show-loader />
    <navbar />
    <router-view />
  </div>
</template>

<script>
import navbar from '@/components/navbar'
import showLoader from '@/components/loader'

export default {
  name: 'App',
  components: {
    navbar,
    showLoader
  }
}
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap.scss';
@import '@/assets/sass/customBootstrap.scss';

#app {
  background-color: #f5f5f5;
}

html{
  min-height: 100%;
  background: #f5f5f5;
}
</style>

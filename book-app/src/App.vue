<template>
  <div id="app">
    <busyLoading v-if="busyLoading" />
    <naviBar/>
    <router-view/>
  </div>
</template>
<script>
  import naviBar from '@/components/naviBar/naviBar'
  import busyLoading from '@/components/modals/busyLoading'

  export default {
    components: {
      naviBar,
      busyLoading
    },
    computed: {
      busyLoading() {
        return this.$store.state.busyLoading;
      },
    }
  }
</script>
<style lang="scss">
  @import "./assets/style/main.scss";
</style>

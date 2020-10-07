<template>
  <div id="app">
    <Navigation />
    <router-view class="rv"/>
    <Spinner v-if="isLoading"/>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import Navigation from '@/components/Navigation.vue';
import Spinner from '@/components/Spinner.vue';

@Component({
  components: {
    Navigation,
    Spinner,
  },
})
export default class RootApp extends Vue {
  @Getter('isLoading') private isLoading!: boolean;
}
</script>
<style lang="scss">
@import '@/assets/CustomBootstrap.scss';
@import "~bootstrap/scss/bootstrap";
html {
  min-height: 100%;
  background: #f5f5f5;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #f5f5f5;
}
.rv {
  padding-top: 70px;
}
</style>

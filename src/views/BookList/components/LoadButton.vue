<template>
  <div>
    <button @click="loadMoreBooks">Load More</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class LoadButton extends Vue {
  loadMoreBooks() {
    this.$store.dispatch('loadMoreBooks');
  }
}
</script>

<style lang="scss" scoped>
  button {
    width: 370px;
    line-height: 60px;
    color: #ffff;
    text-align: center;
    background-color: #ffc35f;
  }
</style>

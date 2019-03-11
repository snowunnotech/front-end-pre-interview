<template>
  <router-view class="book" />
</template>

<script>
export default {
  name: 'book'
}
</script>

<style lang="scss" scoped>
.book {
  --view-w: 600px;
}
@media (max-width: 600px) {
  .book {
    --view-w: 100%;
  }
}
</style>
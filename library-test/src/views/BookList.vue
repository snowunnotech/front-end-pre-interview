<template>
  <div class="book-list">
    <h1>this is book list</h1>
  </div>
</template>

<script>
export default {
  name: "bookList",
  data() {
    return {
      navControl: 'test',
      isLoadingData: true,
      bookLists: this.$store.state.bookLists
    }
  },
  created() {
    this.$store.dispatch("fetchBookLists").then((res) => {
    })
  },
}
</script>

<style lang="less" scoped>
.book-list {
  margin: 5vw;
}
</style>



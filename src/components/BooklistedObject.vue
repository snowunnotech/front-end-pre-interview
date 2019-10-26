<template>
  <router-link
    class="book-link"
    :to="{ name: 'BookDetail', params: { BookId: book['@id'] } }"
  >
    <div class="book-card -shadow">
      <span class="eyebrow">Author: {{ book.author }} </span>
      <h4 class="title">Name: {{ book.title }}</h4>
      <p>Description: {{ book.description }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    book: Object
  }
};
</script>

<style lang="scss" scoped>
.book-card {
  padding: 20px;
  transition: all 0.2s linear;
  background-color: #e3aaaa55;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
}
.book-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.book-card > .title {
  margin: 15px 0;
}
.book-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>

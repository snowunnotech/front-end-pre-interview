<template>
  <section class="book bg-light d-flex flex-column justify-content-around px-2">
    <router-link class="text-decoration-none text-info"
    :to="{ name: 'detail', params: { index: index } }">
      <h2>{{ info.title }}</h2>
    </router-link>
    <p>{{ info.description }}</p>
    <p>Author: {{ info.author }}</p>
    <p>{{ info.publicationDate }}</p>
  </section>
</template>

<script>
export default {
  name: 'Book',
  props: {
    info: Object,
    index: Number,
  },
};
</script>

<style scoped>
.book {
  border: 1px solid black;
}

h2, p {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

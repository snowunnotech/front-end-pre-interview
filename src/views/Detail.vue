<template>
  <div class="detail">
    <nav class="bg d-flex flex-row-reverse justify-content-between">
      <router-link class="text-decoration-none text-white" to="/">Edit</router-link>
      <p class="text-white">{{ books[index].title }}</p>
      <router-link class="text-decoration-none text-white" to="/">Back</router-link>
    </nav>
    <article>
      <p class="text-black-50">Author： {{ books[index].author }}</p>
      <p class="text-black-50">{{ books[index].publicationDate }}</p>
      <p>{{ books[index].description }}</p>
    </article>
  </div>
</template>

<style scoped>
article {
  padding: 50px;
}
</style>>

<script>
import { mapGetters } from 'vuex';

const { books } = mapGetters(['books']);

export default {
  name: 'detail',
  data() {
    return {
      index: this.$router.currentRoute.params.index,
    };
  },
  computed: {
    books,
  },
};
</script>

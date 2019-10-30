<template>
  <div class="home">
    <nav class="bg d-flex flex-row-reverse justify-content-between">
      <router-link class="text-decoration-none text-white" to="/new">New</router-link>
    </nav>
    <article>
      <Book v-for="(info, index) in books" :info="info" :index="index" :key="index"/>
      <footer class="bg text-center text-white" @click="getData">Load More</footer>
    </article>
  </div>
</template>

<style scoped>
.home {
  display: grid;
  grid-template-rows: 50px calc(100vh - 50px);
}

article {
  overflow: scroll;
  overflow-x: hidden;
  display: grid;
  grid-template-columns: 400px 400px;
  padding: 50px;
}

section {
  height: 300px;
}

footer {
  grid-column: 1/-1;
  height: 50px;
  line-height: 50px;
  cursor: pointer;
}
</style>

<script>
import { mapActions, mapGetters } from 'vuex';
import Book from '@/components/Book.vue';

const { books } = mapGetters(['books']);
const { getData } = mapActions(['getData']);

export default {
  name: 'home',
  components: {
    Book,
  },
  computed: {
    books,
  },
  methods: {
    getData,
  },
};
</script>

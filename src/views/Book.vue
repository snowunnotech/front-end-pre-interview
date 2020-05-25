<template>
  <div class="container p-3">
    <div class="row justify-content-center">
      <div class="col col-md-6">
        <div class="d-flex justify-content-between text-secondary mb-3">
          <span>{{ book.author }}</span>
          <span>{{ book.publicationDate }}</span>
        </div>

        <p>{{ book.description }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['book']),
  },
  methods: {
    getBook() {
      this.$store.dispatch('getBook', this.$route.params.id);
    },
  },
  created() {
    this.getBook();
  },
  destroyed() {
    this.$store.commit('CLEAR', 'book');
  },
};
</script>

<template>
  <div class="container p-3">
    <div class="row">
      <router-link
        class="book-item col-md-6 col-lg-4 d-block text-decoration-none mb-4"
        :to="`/book/${book.isbn}`"
        v-for="book in books"
        :key="book.isbn"
      >
        <div class="card h-100">
          <div class="card-body">
            <p class="card-title text-dark" style="min-height: 3rem">{{ book.title }}</p>
            <p class="text-secondary" style="min-height: 8rem">
              {{ book.description }}
            </p>
            <div class="d-flex justify-content-between text-secondary">
              <p class="font-italic mb-0">by {{ book.author }}</p>
              <p class="mb-0">{{ book.publicationDate }}</p>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['books']),
  },
  created() {
    /**
     * * 原本的 API 似乎一直回傳 500 錯誤，暫時用 express + firebase 用自訂資料作呈現
     */
    this.$store.dispatch('getBooks');
  },
};
</script>

<style lang="scss" scoped>
.book-item {
  position: relative;
  &:hover {
    .card {
      box-shadow: 0 0 6px 0px rgba(0, 0, 0, 0.4);
    }
  }
}
</style>

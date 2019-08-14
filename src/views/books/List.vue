<template>
  <div>
    <portal to="header">
      <router-link class="header__portal__right" to="/new">add</router-link>
    </portal>
    <template v-if="books.total > 0">
      <div class="cards-wrapper">
        <BookCard
          v-for="item in displayItems"
          :key="item['@id']"
          :bookInfos="item"
          class="cards-wrapper__card"
        />
      </div>
     <Pagination
        :value="books.currPage"
        :total="books.total"
        @input="handlePagination"
      />
    </template>
  </div>
</template>

<script>
import BookCard from '@/components/books/BookCard';
import Pagination from '@/components/global/Pagination';
import Loading from '@/components/global/Loading';

export default {
  components: {
    BookCard,
    Pagination,
    Loading
  },
  computed: {
    books() {
      return this.$store.state.books;
    },
    displayItems() {
      return this.books[this.books.currPage] || [];
    }
  },
  watch: {
    displayItems: {
      immediate: true,
      handler(val) {
        if (!val.length) {
          this.$store.dispatch('fetchBooks');
        }
      }
    }
  },
  methods: {
    handlePagination(pageNum) {
      this.$store.commit('setPage', pageNum);
    }
  }
};
</script>

<style lang="scss">
  .cards-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    min-height: 500px;
  }
  .cards-wrapper__card {
    flex: 0 0 32%;
    margin-bottom: 20px;
  }
</style>

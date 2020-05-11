<template>
  <div>
    <loading :active.sync="isLoading" color="#ffc35f"></loading>
    <nav class="nav justify-content-end p-2 mb-5">
      <router-link class="nav-link" to="/add">New</router-link>
    </nav>

    <div class="container">
      <BookCard :books="books"/>
      <div class="load-btn" @click="load">Load More</div>
    </div>
  </div>
</template>

<script>
import BookCard from './BookCard'
export default {
  data() {
    return {
      index: 6
    }
  },
  components: {
    BookCard
  },
  created() {
    this.$store.dispatch('getBooks')
  },
  methods: {
    load() {
      this.index += 6
    }
  },
  computed: {
    books() {
      return this.$store.state.books.filter((book, index) => {
        return index < this.index
      })
    },
    isLoading() {
      return this.$store.state.isLoading
    }
  }
}
</script>

<style lang="scss" scoped>
  .load-btn {
    background-color: #ffc35f;
    padding: 20px;
    text-align: center;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    &:hover {
      opacity: .8;
    }
  }
</style>

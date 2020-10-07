<template>
  <div class="book-list" v-cloak>
    <div class=book-list-container>
      
      <div class="book-list-item"
        v-for="book in displayBookLists"
        :key="book['@id']"
        @click="getBookDetail(book['@id'])"
       >
        <div class="book-list-item-container">
          <Card 
            :title="book['title']"
            :author="book['author']"
            :date="book['publicationDate']"
            :description="book['description']"
            :reviews="book['review']"/>
        </div>
      </div>
    </div>
    <div class="js-detect-bottom">footer for load more </div>
  </div>
</template>

<script>
import { getBookLists } from '../services/Book'
import Card from '@/components/Card.vue'


export default {
  name: "bookList",
  components: {
    Card
  },
  mounted() {
    const observer = new IntersectionObserver((change) => {
      this.loadMore()
    });

    observer.observe(document.querySelector('.js-detect-bottom'))
  },
  computed: {
    displayBookLists() {
      return this.$store.getters.displayBookLists
    },
    test() {
      return this.$store.state.bookLists
    }
  },
  async created () {
    this.$store.dispatch('fetchBookLists')
  },
  methods: {
    getBookDetail(path) {
      const id = path.split('/').pop()
      this.$router.push({ name: 'bookDetail', params: { id } })
    },
    loadMore() {
      this.$store.dispatch('fetchBookLists')
    }
  }
}
</script>

<style lang="less" scoped>

.book-list-container {
  display: flex;
  flex-wrap: wrap;
}

.book-list-item {
  flex: 1 0 33%;
  padding: 5vh 1vw;
}

.book-list-item-container {
  cursor: pointer;
}
</style>



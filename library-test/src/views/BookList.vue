<template>
  <div class="book-list">
    <h1>this is book list</h1>
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
  computed: {
    displayBookLists() {
      return this.$store.getters.displayBookLists
    }
  },
  async created () {
    this.$store.dispatch('fetchBookLists')
  },
  methods: {

    getBookDetail (path) {
      const id = path.split('/').pop()
      this.$router.push({ name: 'bookDetail', params: { id } })
    }
  }
}
</script>

<style lang="less" scoped>
.book-list {
  margin: 5vh 15vw;
}
.book-list-container {
  display: flex;
  flex-wrap: wrap;
}

.book-list-item {
  flex-grow: 1;
  padding: 5vh 1vw;
}

.book-list-item-container {
  cursor: pointer;
  
}
</style>



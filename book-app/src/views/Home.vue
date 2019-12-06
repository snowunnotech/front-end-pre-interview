<template>
  <div class="home">
    <addBook/>
    <books/>
  </div>
</template>

<script>
// @ is an alias to /src
import books from '@/components/books/books'
import addBook from '@/components/books/addBook/addBook'

export default {
  name: 'home',
  components: {
    books,
    addBook
  },
  methods: {
  },
  mounted() {
  }
}
</script>

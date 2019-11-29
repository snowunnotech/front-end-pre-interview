<template>
  <div class="book-detail">
    <h1>hi detail</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'bookDetail',
  computed: {
    bookDetail() {
      return this.$store.state.bookDetail
    }
  },
  async created () {
    console.log(this.$route.params.id)
    this.$store.dispatch('fetchBookDetail', this.$route.params.id)
  },
}
</script>

<template>
  <BookInfo :backPage="`/book/${this.$route.params.id}`" barTitle="Edit book" :book="book" />
</template>

<script>
import { mapState, mapActions } from 'vuex'
import BookInfo from '@/components/BookInfo.vue'

export default {
  name: 'edit',
  components: {
    BookInfo
  },
  methods: {
    ...mapActions('bar', {
      clearBar: 'clearAll'
    })
  },
  computed: {
    ...mapState('books', {
      book: 'currentBook'
    })
  },
  beforeRouteLeave(to, from, next) {
    this.clearBar()
    next()
  }
}
</script>

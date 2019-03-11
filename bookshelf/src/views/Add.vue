<template>
  <BookInfo backPage="/" barTitle="Add new book" />
</template>

<script>
import { mapActions } from 'vuex'
import BookInfo from '@/components/BookInfo.vue'

export default {
  name: 'add',
  components: {
    BookInfo
  },
  methods: {
    ...mapActions('bar', {
      clearBar: 'clearAll'
    })
  },
  beforeRouteLeave(to, from, next) {
    this.clearBar()
    next()
  }
}
</script>

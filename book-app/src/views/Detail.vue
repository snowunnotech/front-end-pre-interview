<template>
  <div class="detail">
      <bookDetail/>
  </div>
</template>

<script>
// @ is an alias to /src
import bookDetail from '@/components/books/bookDetail/bookDetail'

export default {
  name: 'detail',
  components: {
    bookDetail
  },
  methods: {
  },
  mounted() {
  }
}
</script>

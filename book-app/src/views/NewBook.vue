<template>
  <div class="newBook">
      <bookForm/>
  </div>
</template>

<script>
// @ is an alias to /src
import bookForm from '@/components/books/bookForm/bookForm'

export default {
  name: 'newBook',
  components: {
    bookForm
  },
  methods: {
  },
  mounted() {
  }
}
</script>

<template>
  <div class="book-detail">
    <h1>Edit {{test}}</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'bookDetail',
  data() {
    return {
      test: 'hi this is test data'
    }
  }
}
</script>

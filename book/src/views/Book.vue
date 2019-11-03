<template>
  <div class="book">
    <div class="container">
      <div class="row pt-2 book__info">
        <div class="col-8">
          <p>Author: {{ info.author }}</p>
        </div>
        <div class="col-4">
          <p>{{ dateFormat(info.publicationDate, 'YYYY-MM-DD') }}</p>
        </div>
      </div>
      <div class="row py-2 book__content">
        <div class="col-12">
          <p>{{ info.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Book',
  computed: {
    ...mapState({
      info: state => state.book.info
    })
  },
  async created () {
    this.getBookInfo(this.$route.params.id)
  },
  beforeDestroy () {
    this.initState()
  },
  methods: {
    ...mapActions({
      getBookInfo: 'book/getBookInfo',
      initState: 'book/initState'
    })
  }
}
</script>

<style lang="scss" scoped>
  .book{
    &__info{
      color: #afafaf;
    }
  }
</style>

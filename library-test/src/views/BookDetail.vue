<template>
  <div class="book-detail">
    <div class="book-detail-container">
      <div class="book-info">
        <span class="book-author">Author: {{ bookDetail.author }}</span>
        <span class="book-date">{{ bookDetail.publicationDate.slice(0, 10) }}</span>
      </div>
      <div class="book-des">
        <p>{{ bookDetail.description }}</p>
      </div>
      <div class="book-review" v-if="bookDetail.reviews.length > 0">
        <div class="review-list">
          <div class="review-list-item"
            :key="review.id"
            v-for="review in bookDetail.reviews">
            {{ review }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'bookDetail',
  computed: {
    bookDetail() {
      return this.$store.state.bookDetail
    }
  },
  async created () {
    this.$store.dispatch('fetchBookDetail', this.$route.params.id)
    
  },
  mounted() {
    console.log('mounted', this.bookDetail)
    this.$route.meta.title = this.bookDetail.title
  }
}
</script>
<style lang="less" scoped>
.book-info {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 800;
  line-height: 1.3333333333333333em;
  color: rgb(118, 118, 118);
  padding: 1vh 0;
}

.book-des {
  text-align: right;
}
</style>

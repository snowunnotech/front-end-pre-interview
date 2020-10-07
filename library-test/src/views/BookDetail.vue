<template>
  <div class="book-detail" v-cloak>
    <div class="book-detail-container">
      <div class="book-info">
        <span class="book-author">Author: {{ bookDetail.author }}</span>
        <span class="book-date">{{ bookDetail.publicationDate.slice(0, 10) }}</span>
      </div>
      <div class="text-left">
        <p>{{ bookDetail.description }}</p>
      </div>
      <h4 class="text-left" v-show="bookDetail.reviews.length">Reviews</h4>
      <div class="book-review" v-if="bookDetail.reviews.length > 0">
        <div class="review-list">
          <div class="review-list-item"
            :key="review.id"
            v-for="review in bookDetail.reviews">
            <p class="text-left">{{ review.body }}</p>
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

.text-left {
  text-align: left;
}

.review-list-item {
  border-bottom: 2px solid #7676763d;
}
</style>

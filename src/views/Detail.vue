<template>
  <div>
    <div v-if="getBookDetail">
      <NavBar>
        <div id="back-btn">
          <button @click="goToHome">Back</button>
        </div>
        <div>{{ getBookDetail.title }}</div>
        <div id="edit-btn">
          <button @click="goToManagement">Edit</button>
        </div>
      </NavBar>
      <div class="detail-container">
        <div class="detail-header">
          <span>Author: {{ getBookDetail.author }}</span>
          <span>{{ new Date(getBookDetail.publicationDate).toISOString().substring(0, 10) }}</span>
        </div>
      {{ getBookDetail.title }}
      {{ getBookDetail.description }}
      </div>
    </div>
    <div v-if="!getBookDetail && isBookListReady">
      No match ID.
    </div>
    <div v-if="!isBookListReady">
      Loading...
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  name: 'detail',
  components: {
    NavBar
  },
  data () {
    return {
      bookId: this.$route.params.id
    }
  },
  computed: {
    getBookDetail () {
      return this.$store.state.bookList[`/books/${this.bookId}`]
    },
    isBookListReady () {
      return this.$store.state.isBookListReady
    }
  },
  methods: {
    goToHome () {
      this.$router.replace('/')
    },
    goToManagement () {
      this.$router.replace(`edit/${this.bookId}`)
    }
  }
}
</script>

<style>
#back-btn {
  flex: 1;
  display: flex;
  justify-content: flex-start;
}

#edit-btn {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.detail-container {
  height: 100vh;
  padding: 20px;
  background-color: rgb(245,245,245);
}

.detail-header {
  display: flex;
  justify-content: space-between;
  color: darkgray;
  margin-bottom: 10px;
}
</style>

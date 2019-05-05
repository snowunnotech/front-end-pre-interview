<template>
  <div class="main-container">
    <NavBar>
      <button id="new-btn" @click="createBook">New</button>
    </NavBar>
    <div class="bookcard-container">
      <div v-for="book in getBookList" :key="book['@id']" @click="goToDetails(book['@id'])">
        <div class="book-card">
          <div class="book-card-title">
            {{ book.title }}
          </div>
          <div class="book-card-description">
            {{ book.description }}
          </div>
          <div class="book-card-footer">
            <i>by {{ book.author }}</i>
            <span>{{ new Date(book.publicationDate).toISOString().substring(0, 10) }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="btn-container">
      <button id="loadmore-btn" @click="loadBooks" v-if="isLoadBtnVisible">Load More</button>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  name: 'home',
  components: {
    NavBar
  },
  data () {
    return {
      bookDisplayCount: 6
    }
  },
  computed: {
    getBookList () {
      return Object.values(this.$store.state.bookList).filter((elem, index) => {
        return index < this.bookDisplayCount
      })
    },
    isLoadBtnVisible () {
      return this.bookDisplayCount < Object.keys(this.$store.state.bookList).length
    }
  },
  methods: {
    loadBooks () {
      this.bookDisplayCount += 6
    },
    goToDetails (id) {
      this.$router.push(`${id}`)
    },
    createBook () {
      this.$router.replace(`/books/create`)
    }
  }
}
</script>

<style>
.main-container {
  height: 100vh;
  background-color: rgb(245,245,245);
}

.bookcard-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  padding: 20px;
}

.book-card {
  width: 120px;
  padding: 10px;
  margin-bottom: 20px;
  color: darkgray;
  background-color: #fff;
  cursor: pointer;
}

.book-card-title {
  color: black;
}

.book-card-footer {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 5px 0px;
}

.btn-container {
  display: block;
  width: 100%;
  text-align: center;
}

#loadmore-btn {
  width: 150px;
  height: 40px;
  margin: 20px auto;
}

.book-card * {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media screen and (min-width: 900px) {
  .bookcard-container {
    display: flex;
    justify-content: center;
    flex-flow: column;
  }
  .book-card {
    width: calc(100% - 20px);
  }
}
</style>

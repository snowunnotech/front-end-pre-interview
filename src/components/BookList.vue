<template>
  <div>
    <nav-bar :rightButton="rightButton"/>
    <div class="content">
      <div class="book-list">
        <div v-for="({title, author, publicationDate, '@id': id}, index) in bookList" :key="index" class="block" @click="goToDetailPage(id)">
          <div class="title">{{title}}</div>
          <div class="author">{{author}}</div>
          <div class="date">{{publicationDate}}</div>
        </div>
      </div>
      <button :class="['load-more', {'disabled':disableClick}]" @click="loadMoreClick">Load More</button>
    </div>
  </div>
</template>

<script>
import NavBar from './Nav.vue';
import { createNamespacedHelpers } from 'vuex';
const { mapActions, mapState, mapGetters } = createNamespacedHelpers('book');

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      rightButton: {
        text: 'New',
        click: () => {
          this.$router.push('/new');
        }
      },
    };
  },
  computed: {
    ...mapState({
      bookList: state => state.bookList,
      total: state => state.total,
    }),
    ...mapGetters(['disableClick'])
  },
  methods: {
    ...mapActions({
      getBookList(dispath) {
        dispath('getBookList');
      }
    }),
    loadMoreClick() {
      if (!this.disableClick) {
        this.getBookList();
      }
    },
    goToDetailPage(id) {
      this.$router.push(id);
    }
  },
  mounted() {
    if (!this.bookList.length)
      this.getBookList();
  },
}
</script>

<style lang="scss" scoped>
.load-more {
  border: none;
  background-color: wheat;
  font-size: 24px;
  color: white;
  width: calc(100% - 20px);
  height: 48px;
  &.disabled {
    cursor: not-allowed;
  }
}
.content {
  padding: 80px 0 20px 20px;
  background-color: rgba($color: grey, $alpha: 0.2);
}
.book-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.block {
  flex: 1;
  min-width: 200px;
  background-color: white;
  margin: 0 20px 20px 0;
  display: flex;
  flex-wrap: wrap;
  .title {
    width: 100%;
  }
  .author, .date {
    flex: 1;
  }
}
</style>
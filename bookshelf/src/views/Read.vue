<template>
  <transition name="fade" mode="out-in">
    <Loading v-if="isLoading && !book" />
    <div class="read" v-else>
      <transition name="fade" mode="out-in" v-if="book">
        <div class="content" v-if="isRead">
          <header>
            <p class="author">Author: {{book.attributes.author}}</p>
            <p class="date">{{pubDate}}</p>
          </header>
          <div class="desc">{{book.attributes.description}}</div>
          <footer>
            <p class="isbn">ISBN: {{book.attributes.isbn}}</p>
          </footer>
        </div>
        <router-view v-else="book" />
      </transition>
      <div class="notfound" v-else>
        Book not found.
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import Loading from '@/components/Loading.vue'

export default {
  name: 'read',
  components: {
    Loading
  },
  mounted() {
    this.updateBar()
    this.getBook({
      id: this.$route.params.id
    })
  },
  methods: {
    updateBar() {
      this.clearBar()
      this.setBar({
        pos: 'left',
        text: 'Back',
        path: '/'
      })
      this.setBar({
        pos: 'center',
        text: this.book ? this.book.attributes.title : 'Loading',
      })
      this.setBar({
        pos: 'right',
        text: 'Edit',
        path: `/book/${this.$route.params.id}/edit`
      })
    },
    ...mapMutations('books', [
      'clearBook'
    ]),
    ...mapActions('books', [
      'getBook'
    ]),
    ...mapActions('bar', {
      setBar: 'set',
      clearBar: 'clearAll'
    })
  },
  computed: {
    ...mapState('books', {
      book: 'currentBook',
      isLoading: 'isLoading'
    }),
    isRead() {
      return this.$route.name == 'read'
    },
    pubDate() {
      return this.book.attributes.publicationDate.split('T')[0]
    }
  },
  watch: {
    'book.attributes.title'(val) {
      this.setBar({
        pos: 'center',
        text: val
      })
    }
  },
  beforeRouteUpdate(to, from, next) {
    if(from.name == 'edit')
      this.updateBar()
    next()
  },
  beforeRouteLeave(to, from, next) {
    this.clearBar()
    this.clearBook()
    next()
  }
}
</script>

<style lang="scss" scoped>
.read {
  header,
  footer {
    font-size: 14px;
    color: var(--light);
  }
  header {
    display: flex;
    justify-content: space-between;
  }
  .desc {
    margin: 10px 0;
    line-height: 20px;
  }
  .notfound {
    text-align: center;
    color: var(--light);
  }
}
</style>
<template>
  <div class="home">
    <transition-group name="list" tag="div" class="shelf" key="shelf">
      <BookBlock :key="book.id" :book="book" :style="`--delay: .${i % 6}s`" v-for="(book, i) in books" />
    </transition-group>
    <transition name="fade" mode="out-in">
      <Loading key="loading" v-if="isLoading" />
      <button class="btn" key="btn" @click="getMoreBooks" v-else-if="!isLastPage">Load More</button>
    </transition>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Loading from '@/components/Loading.vue'
import BookBlock from '@/components/BookBlock.vue'

export default {
  name: 'home',
  components: {
    Loading,
    BookBlock
  },
  mounted() {
    this.setBar({
      pos: 'right',
      text: 'New',
      path: '/book/add'
    })

    if(!this.books.length) {
      this.getBooks({
        page: 1
      })
    }
  },
  methods: {
    ...mapActions('books', [
      'getBooks',
      'getMoreBooks'
    ]),
    ...mapActions('bar', {
      setBar: 'set',
      clearBar: 'clearAll'
    })
  },
  computed: {
    isLastPage() {
      return this.$store.getters['books/isLastPage']
    },
    ...mapState('books', [
      'books',
      'updated',
      'isLoading'
    ])
  },
  beforeRouteLeave(to, from, next) {
    this.clearBar()
    next()
  }
}
</script>

<style lang="scss" scoped>
.home {
  --view-w: 1200px;
}
.shelf {
  --shelf-grid: 3;
  --shelf-gap: 15px;

  display: grid;
  grid-template-columns: repeat(var(--shelf-grid), 1fr);
  grid-gap: var(--shelf-gap);
  margin-bottom: 15px;
}
.btn {
  width: 100%;
  background: var(--primary);
  color: #FFF;
  font-size: 16px;
  line-height: 48px;
  position: relative;
  border-radius: 3px;
  border: none;
  cursor: pointer;

  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    transition: background .1s linear;
  }
  &:hover:before {
    background: rgba(#FFF, .2);
  }
}
@media (max-width: 600px) {
  .home {
    --view-w: 100%;
  }
  .shelf {
    --shelf-grid: 2;
    --shelf-gap: 10px;
  }
}
</style>

<template>
  <div>
    <BookHeaderPortal :bookTitle="bookInfos.title" />
    <pre>
      {{ JSON.stringify(bookInfos, null, '\t') }}
    </pre>
  </div>
</template>

<script>
import BookHeaderPortal from '@/components/books/BookHeaderPortal';
import { getBookById } from '@/apis/booksApi';

export default {
  components: { BookHeaderPortal },
  props: {
    bookInfosByRoute: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      bookInfos: this.bookInfosByRoute
    };
  },
  async mounted() {
    if (this.bookInfosByRoute) return;
    const { id } = this.$route.params;
    try {
      const infos = await getBookById(id);
      this.bookInfos = infos;
    } catch (err) {
      console.log(err);
    }
  }
};
</script>

<style lang="scss">
  pre {
    white-space: pre-wrap;
    padding: 20px;
    line-height: 1.5;
    background: #f3f3f3;
  }
</style>

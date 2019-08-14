<template>
  <div v-if="bookInfos && !loading">
    <BookHeaderPortal :bookTitle="bookInfos.title" />
    <h1 class="main-title mb-s">Edit</h1>
    <BookForm
      :initialValues="{
        author: bookInfos.author,
        isbn: bookInfos.isbn,
        title: bookInfos.title,
        description: bookInfos.description,
        publicationDate: dateFormat(bookInfos.publicationDate)
      }"
      @onSubmit="handleEditRequest"
    />
  </div>
  <Loading v-else />
</template>

<script>
import BookHeaderPortal from '@/components/books/BookHeaderPortal';
import BookForm from '@/components/books/BookForm';
import Loading from '@/components/global/Loading';
import dateFormat from '@/vue-utils/filters/dateFormat';
import { getBookById, updateBookById } from '@/apis/booksApi';

export default {
  components: { BookForm, BookHeaderPortal, Loading },
  props: {
    bookInfosByRoute: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      loading: false,
      bookInfos: this.bookInfosByRoute
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    }
  },
  mounted() {
    if (this.bookInfosByRoute) return;
    this.loading = true;
    getBookById(this.id)
      .then((infos) => { this.bookInfos = infos; })
      .catch(console.error)
      .finally(() => { this.loading = false; });
  },
  methods: {
    dateFormat,
    async handleEditRequest(data) {
      this.loading = true;
      updateBookById({ id: this.id, data })
        .then(() => {
          alert('updated success');
          this.$store.commit('resetBooks');
          this.$router.push('/');
        })
        .catch((err) => {
          if (!err.response) console.log(err.message);
          console.log(err.response);
        })
        .finally(() => { this.loading = false; });
    }
  }
};
</script>

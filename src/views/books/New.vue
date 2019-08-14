<template>
  <div>
    <portal to="header">
      <router-link to="/">back</router-link>
    </portal>
    <h1 class="main-title mb-s">Add book</h1>
    <BookForm
      v-show="!loading"
      @onSubmit="handleCreateRequest"
    />
    <Loading v-show="loading" />
  </div>
</template>

<script>
import BookForm from '@/components/books/BookForm';
import Loading from '@/components/global/Loading';
import { addBook } from '@/apis/booksApi';

export default {
  components: { BookForm, Loading },
  data() {
    return {
      loading: false
    };
  },
  methods: {
    handleCreateRequest(data) {
      this.loading = true;
      addBook(data)
        .then(() => {
          alert('success');
          this.$store.commit('resetBooks');
          this.$router.push('/');
        })
        .catch(console.log)
        .finally(() => { this.loading = false; });
    }
  }
};
</script>

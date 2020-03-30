<template>
  <div class="container">
    <div class="d-flex justify-content-between flex-wrap u-textGray mb-2">
      <span>Author: {{ book.author }}</span>
      <span>{{ book.publicationDate }}</span>
    </div>
    <p>{{ book.description }}</p>
  </div>
</template>

<script>
export default {
  meta: {
    navbar: {
      features: {
        back: true,
        edit: true
      }
    }
  },
  data(){
    return {
      book: {
        "@context": "",
        "@id": "",
        "@type": "",
        isbn: "",
        title: "",
        description: "",
        author: "",
        publicationDate: "",
        reviews: []
      }
    }
  },
  async created() {
    this.book = await this.$store.dispatch("books/getBook", this.$route.params.id);
    this.$store.commit("navbar/TITLE", this.book.title);
  }
};
</script>

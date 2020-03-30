<template>
  <div class="container">
    <b-form-input class="mb-3" placeholder="Title" v-model="book.title"></b-form-input>
    <b-form-input class="mb-3" placeholder="Author" v-model="book.author"></b-form-input>
    <b-form-input class="mb-3" type="date" placeholder="Created at" v-model="book.publicationDate"></b-form-input>
    <b-form-textarea id="textarea" v-model="book.description" rows="6"></b-form-textarea>
  </div>
</template>

<script>
export default {
  meta: {
    navbar: {
      features: {
        back: true,
        save: true
      }
    }
  },
  data() {
    return {
      book: {
        title: "",
        author: "",
        publicationDate: "",
        description: ""
      }
    };
  },
  computed: {
    isSendBook() {
      return this.$store.state.books.isSendBook;
    }
  },
  watch: {
    isSendBook() {
      if (this.isSendBook) {
        this.sendBook();
        this.$store.commit("books/ISSENDBOOK", false);
      }
    }
  },
  methods: {
    sendBook() {
      let httpMethod = "post"
      let api = `${process.env.url}/books`;
      if(this.$route.params.id !== "new") {
        httpMethod = "put";
        api = `${process.env.url}/books/${this.$route.params.id}`;
      } 
      this.$axios[httpMethod](api, this.book).then(res => {
        this.$router.back();
      })
    }
  },
  async created() {
    if (this.$route.params.id !== "new") {
      this.book = await this.$store.dispatch("books/getBook", this.$route.params.id);
      this.$store.commit("navbar/TITLE", this.book.title);
    } else {
      this.$store.commit("navbar/TITLE", "Add new book");
    }
  }
};
</script>

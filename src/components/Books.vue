<template>
  <div class="back">
    <div class="row px-3 py-2 bg-warning text-white">
      <div class="col-11"></div>
      <div class="button col-1 text-right" @click="addBookBtn">
        <p>New</p>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-3 p-2" v-for="book in books" :key="book['@id']">
          <div
            class="book text-center bg-white p-2"
            style="height:100%"
            @click="getDetail(book['@id'])"
          >
            <img
              class="img-fluid"
              src="https://fakeimg.pl/100/"
              alt="bookCover"
            />
            <div class="text-left">
              <h6 class="mb-4">title： {{ book.title }}</h6>
              <h6 class="mb-4">description： {{ book.description }}</h6>
              <h6 class="mb-4">
                by {{ book.author }} {{ book.publicationDate.substring(0, 10) }}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Books",
  methods: {
    getDetail(book) {
      const bookId = book.replace("/books/", "");
      this.$router.push({ path: `/books/${bookId}` });
    },
    addBookBtn() {
      this.$router.push("/addBook");
    }
  },
  computed: {
    ...mapGetters(["books"])
  },
  created() {
    this.$store.dispatch("getBooks");
  }
};
</script>

<style>
.back {
  background-color: rgb(235, 235, 235);
}

.book:hover {
  cursor: pointer;
}
</style>

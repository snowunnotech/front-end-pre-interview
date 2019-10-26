<template>
  <div class="home">
    <listedObject
      v-for="books in this.getBooks"
      :key="books['@id']"
      :book="books"
    ></listedObject>
  </div>
</template>

<script>
import listedObject from "@/components/BooklistedObject";
import { mapGetters } from "vuex";

export default {
  components: {
    listedObject
  },
  async mounted() {
    this.$store.dispatch("books/GetBooksApi");
  },
  computed: {
    ...mapGetters("books", ["getBooks"])
  }
};
</script>

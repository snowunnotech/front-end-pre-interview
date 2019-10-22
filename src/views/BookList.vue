<template>
  <div class="home">
    <listedObject></listedObject>
  </div>
</template>

<script>
import listedObject from "@/components/BooklistedObject";
import BooksService from "@/services/BooksService.js";
import { mapGetters } from "vuex";

export default {
  components: {
    listedObject
  },
  async mounted() {
    try {
      const response = await BooksService.get({ page: "1" });
      console.log(response);
      if (response.status !== 200) {
        return;
      } else {
        this.$store.dispatch("books/setBooks", response.data["hydra:member"]);
      }
    } catch (err) {
      console.log(err);
    }
  },
  computed: {
    ...mapGetters("books", ["getBooks"])
  }
};
</script>

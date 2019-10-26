<template>
  <div class="home">
    <listedObject
      v-for="books in this.getBooks"
      :key="books['@id']"
      :book="books"
    ></listedObject>
    <observer @intersect="fetchMore" />
    <div class="spinning"></div>
  </div>
</template>

<script>
import listedObject from "@/components/BooklistedObject";
import observer from "@/components/misc/Observer.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    listedObject,
    observer
  },
  async mounted() {
    this.$store.dispatch("books/GetBooksApi", this.page);
  },
  methods: {
    fetchMore() {
      this.$store.dispatch("books/incrementPage");
    }
  },
  computed: {
    ...mapGetters("books", ["getBooks", "getPage"])
  },
  watch: {
    getPage() {
      this.$store.dispatch("books/GetBooksApi");
    }
  }
};
</script>
<style lang="scss">
.spinning {
  height: 100px;
}
</style>

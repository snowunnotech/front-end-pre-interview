<template>
  <div class="py-5 px-3">
    <div class="event-header">
      <span class="eyebrow">Author: {{ Books.author }}</span>
      <h3 class="title my-3">Name: {{ Books.title }}</h3>
      <h5>Publish Date: {{ ParseUTC() }}</h5>
    </div>

    <h5 class="mt-3">Brief Description</h5>
    <p>{{ Books.description }}</p>

    <ul class="list-group mt-5">
      <h3>Readers Review</h3>
      <li
        v-for="(review, index) in Books.reviews"
        :key="index"
        class="list-item"
      >
        <b>{{ review.body }}</b>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      Books: null
    };
  },
  props: {
    BookId: String
  },
  methods: {
    ParseUTC() {
      let prasedUTC = new Date(this.Books.publicationDate);
      let splitedUTC = String(prasedUTC).split(" ");
      return `${splitedUTC[3]} ${splitedUTC[1]} ${splitedUTC[2]}`;
    }
  },
  computed: {
    ...mapGetters("books", ["getBooksByISBN"])
  },
  created() {
    this.Books = this.getBooksByISBN(this.BookId);
  }
};
</script>

<style lang="scss" scoped>
.location {
  margin-bottom: 0;
}
.location > .icon {
  margin-left: 10px;
}
.event-header > .title {
  margin: 0;
}
.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list-group > .list-item {
  padding: 1em 0;
  border-bottom: solid 1px #e5e5e5;
}
</style>

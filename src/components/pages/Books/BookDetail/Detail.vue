<template>
  <div>
    <AlertMessage />
    <NavBar :item="items" />
    <v-card class="mt-10 pa-5" width="80%" style="margin: 0 auto;">
      <v-card-text class="d-flex justify-space-between">
        <p class="d-inline-block">Author: {{items.author}}</p>
        <p class="d-inline-block">{{items.publicationDate}}</p>
      </v-card-text>
      <v-card-text>{{items.description}}</v-card-text>
    </v-card>
  </div>
</template>

<script>
import AlertMessage from "../../../materials/AlertMessage";
import NavBar from "./template/NavBar";
export default {
  components: {
    AlertMessage,
    NavBar
  },
  props: {
    item: {
      type: Object
    }
  },
  data() {
    return {
      items: {
        isbn: "",
        title: "Favorite road trips",
        description: "A long time ago",
        author: "James",
        publicationDate: "2020/4/1"
      },
      bookId: ""
    };
  },
  methods: {
    getBookId: function() {
      var vm = this;
      vm.bookId = this.$route.params.id;
    }
  },
  created() {
    this.getBookId()
    this.$store.dispatch("getBookDetail", this.bookId);
  }
};
</script>
<template>
  <div>
    <AlertMessage />
    <NavBar />
    <v-container fluid>
      <v-row dense>
        <v-col v-for="book in book" :key="book.id" cols="6">
          <v-card>
            <v-img
              :src="book.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="book.title"></v-card-title>
              <v-card-text v-text="book.description"></v-card-text>
              <v-card-text v-text="book.author"></v-card-text>
            </v-img>
            <v-card-actions>
              <v-btn color="primary" depressed @click="viewBook(book)">View</v-btn>
              <v-spacer></v-spacer>
              <v-btn color="primary" depressed>Delete</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AlertMessage from "../../../materials/AlertMessage";
import NavBar from "./template/NavBar";
import Detail from "../BookDetail/Detail";
export default {
  components: {
    NavBar,
    AlertMessage,
    Detail
  },
  data: () => ({
    book: [
      {
        id: "0",
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        description: "A long time ago...",
        author: "James",
        publicationDate: "2020/4/1"
      },
      {
        id: "1",
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        description: "A long time ago...",
        author: "Tony",
        publicationDate: "2020/4/1"
      },
      {
        id: "2",
        title: "Iceland",
        src: "https://upload.cc/i1/2020/03/25/aySzRJ.jpg",
        description: "A long time ago...",
        author: "Jack",
        publicationDate: "2020/4/1"
      },
      {
        id: "3",
        title: "Paris",
        src: "https://upload.cc/i1/2020/04/01/2FnGVK.jpg",
        description: "A long time ago...",
        author: "by Billy",
        publicationDate: "2020/4/1"
      },
      {
        id: "4",
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        description: "A long time ago...",
        author: "Ricky",
        publicationDate: "2020/4/1"
      },
      {
        id: "5",
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        description: "A long time ago...",
        author: "Zac",
        publicationDate: "2020/4/1"
      },
      {
        id: "6",
        title: "Iceland",
        src: "https://upload.cc/i1/2020/03/25/aySzRJ.jpg",
        description: "A long time ago...",
        author: "Lily",
        publicationDate: "2020/4/1"
      }
    ]
  }),
  computed: {
    // books() {
    //   return this.$store.getters.books;
    // },
    ...mapGetters(["books"])
  },
  methods: {
    viewBook: function(book) {
      var vm = this;
      vm.$router.push({ path: `/detail/${book.id}`});
    }
  },
  created() {
    this.$store.dispatch("getBooks");
  }
};
</script>
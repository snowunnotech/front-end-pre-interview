<template>
  <div class="container">
    <div class="row">
      <div class="col-6 mb-3" v-for="book in books" :key="book.isbn">
        <nuxt-link class="u-textDecorationNone" :to="`/detail/${book['@id']}`">
          <b-card tag="article" class="p-index-card u-textGray h-100">
            <p class="font-weight-bold text-center" style="font-size:25px;">X</p>
            <b-card-text class="p-index-card__description">{{ book.description }}</b-card-text>
            <p class="d-flex justify-content-between flex-wrap mb-0">
              <span>by {{ book.author }}</span>
              <span>{{ book.publicationDate }}</span>
            </p>
          </b-card>
        </nuxt-link>
      </div>
    </div>

    <b-button
      class="w-100 text-white py-2"
      href="#"
      variant="primary"
      @click.prevent="getBooks"
      v-if="haveNextPage"
    >Load More</b-button>
  </div>
</template>

<script>
export default {
  meta: {
    navbar: {
      features: {
        add: true
      }
    }
  },
  data() {
    return {
      books: [],
      page: 0,
      haveNextPage: true
    };
  },
  methods: {
    getBooks() {
      this.page += 1;
      const api = `${process.env.url}/books?page=${this.page}`;
      this.$axios.get(api, {headers: {"Content-Type": "application/ld+json"}})
      .then(res => {
        if (res.data["hydra:member"].length < 20) this.haveNextPage = false;

        res.data["hydra:member"].forEach(book => {
          book["@id"] = book["@id"].substr(7);
          book.publicationDate = book.publicationDate.substr(0, 10);
          this.books.push(book);
        });
      });
    }
  },
  mounted() {
    this.getBooks();
  }
};
</script>

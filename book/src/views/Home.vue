<template>
  <div class="home">
     <div class="container">
       <div class="row">
        <!-- BookDetail -->
        <BookCard v-for="book in booksList"
          :key="book['@id']"
          :bookID="book['@id']"
          :title="book.title"
          :author="book.author"
          :publicationDate="book.publicationDate"
          />
        </div>
        <div class="row">
          <button
            class="col-12 text-center btn btn-primary p-3 text-white"
            type="button"
            @click="LoadMoreBooks" >
            <span v-if="AtPage === 30"> Next Page </span>
            <span v-else> Load More </span>
          </button>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import { getBooksList } from '@/utils/Api';
import { BookList } from '@/utils/Api_type';
import BookCard from '@/components/BookCard.vue';

@Component({
  components: {
    BookCard,
  },
})
export default class Home extends Vue {
  @Watch('$route')
  private onRouteChanged(value: any) {
    this.fetchData();
  }

  private books: object[] = [];

  private AtPage: number = 6;

  private get booksList() {
    return this.books.slice(0, this.AtPage);
  }

  private LoadMoreBooks() {
    if (this.AtPage === 30) {
      const query = { ...this.$route.query };
      query.page = parseInt(query.page, 10) + 1;
      this.$router.push({
        query,
      });
    } else {
      this.AtPage += 6;
    }
  }

  private async fetchData() {
    const res = await getBooksList(this.$route.query);
    this.AtPage = 6;
    if (res.status === 200) {
      this.books = res.data['hydra:member'];
    } else {
      // handle wrong
    }
  }

  private mounted() {
    if (!this.$route.query.page) {
      // default
      const query = {
        'order[id]': 'asc',
        page: 1,
      };
      this.$router.push({
        query,
      });
    } else if (this.books.length === 0) {
      this.fetchData();
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="bookDetail">
      <div class="text-left text-secondary p-3"> {{book.author}}</div>
      <div class="text-right text-secondary p-3">
        <span v-if="book.author">{{bookDate}}</span>
      </div>
      <div class="book-description text-left p-3">
        {{book.description}}
      </div>
    </div>
    <div class="p-4" v-if="FetchError">
      Sorry, we cant find this book.
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import { getBook } from '@/utils/Api';
import State from '@/store/store_type';
import BookCard from '@/components/BookCard.vue';

@Component({
  components: {
    BookCard,
  },
})
export default class Home extends Vue {
  @Action('setBookDetail') private setBookInfo!: (data: State['bookDetail']) => void;

  @Action('clearBookDetail') private clearBookInfo!: () => void;

  @Getter('bookDetail') private book!: State['bookDetail'];

  private FetchError: boolean = false;

  private get bookDate() {
    // publicationDate
    return new Date(this.book.publicationDate)
      .toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      });
  }

  private async FetchBookDetail(id: string) {
    const res = await getBook(id);
    if (res.status === 200) {
      // store book detail
      this.setBookInfo(res.data);
      this.FetchError = false;
    } else {
      // handle wrong
      this.clearBookInfo();
      this.FetchError = true;
    }
  }

  private mounted() {
    // get book detail
    this.clearBookInfo();
    this.FetchBookDetail(this.$route.params.id);
  }
}
</script>
<style lang="scss">
.bookDetail {
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: auto auto;
  grid-template-areas:
  "auth time"
  "detail detail";
}
.book-description {
  grid-area: detail;
}
</style>

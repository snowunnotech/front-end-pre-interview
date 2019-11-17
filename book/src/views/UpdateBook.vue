<template>
  <div class="container">
    <div class="bookUpdate">
      <div class="input-group w-100 mb-3">
        <input type="text" class="form-control"
          placeholder="Title"
          aria-label="Title"
          @change="updateBook($event, 'title')"
          :value="bookForm.title"
          >
      </div>
      <div class="input-group w-100 mb-3">
        <input type="text" class="form-control"
          placeholder="Author"
          aria-label="Author"
          @change="updateBook($event, 'author')"
          :value="bookForm.author"
          >
      </div>
      <div class="input-group w-100 mb-3">
        <input type="text" class="form-control"
          placeholder="Create at"
          aria-label="Create at"
          @change="updateBook($event, 'publicationDate')"
          :value="bookDate"
          >
      </div>
      <div class="form-group w-100 ">
        <textarea class="form-control rounded-1"
          id="desc"
          rows="10"
          @change="updateBook($event, 'description')"
          :value="bookForm.description">
        </textarea>
      </div>
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
  @Action('createNewBook') private createNewBook!: () => void;

  @Action('updateBookDetail') private updateBookDetail!: (data: State['bookDetail']) => void;

  @Getter('bookDetail') private book!: State['bookDetail'];

  @Getter('bookForm') private bookForm!: State['bookDetail'];

  private FetchError: boolean = false;

  private get bookDate() {
    // publicationDate
    return new Date(this.bookForm.publicationDate).toISOString();
  }

  private updateBook(el: any, key: string) {
    // value change
    const data = { ...this.bookForm };
    data[key] = el.target.value;
    // update
    this.updateBookDetail(data);
  }

  private async FetchBookDetail(id: string) {
    const res = await getBook(id);
    if (res.status === 200) {
      // store book detail
      // this.setBookInfo(res.data);
      this.FetchError = false;
    } else {
      // handle wrong
      // this.clearBookInfo();
      this.FetchError = true;
    }
  }

  private mounted() {
    this.createNewBook();
    if (this.$route.name === 'edit') {
      // edit, get original book data
      this.updateBookDetail(this.book);
    }
  }
}
</script>
<style lang="scss">
.bookUpdate {
  display: flex;
  flex-wrap: wrap;
  padding-top: 10px;
}
</style>

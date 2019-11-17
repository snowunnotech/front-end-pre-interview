<template>
  <div class="Navigation bg-primary text-white">
    <div @click="BackBtnFn" class="handleBtn"> {{BackBtn}} </div>
    <div> {{title}} </div>
    <div @click="handleBtnFn" class="handleBtn"> {{HandleBtn}} </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import State from '@/store/store_type';
import { creatrBook, updateBook } from '@/utils/Api';

@Component
export default class Navigation extends Vue {
  @Getter('bookDetail') private book!: State['bookDetail'];

  @Getter('bookForm') private bookForm!: State['bookDetail'];

  @Prop() private msg!: string;

  private get BackBtn() {
    return this.$route.name === 'home' ? '' : 'Back';
  }

  private get title() {
    if (this.$route.meta.bookTitle && this.book.title) {
      return this.book.title;
    }
    return this.$route.meta.navTitle;
  }

  private get HandleBtn() {
    return this.$route.meta.btnText;
  }

  private BackBtnFn() {
    this.$router.go(-1);
  }

  private async handleBtnFn() {
    // new
    if (this.$route.meta.btnText === 'New') {
      this.$router.push({ name: 'new' });
      return;
    }
    // edit
    if (this.$route.meta.btnText === 'Edit' && this.book['@id']) {
      const id = this.book['@id'].replace('/books/', '');
      this.$router.push({ name: 'edit', params: { id } });
      return;
    }
    // save
    if (this.$route.meta.btnText === 'Save') {
      // update or create a book
      if (this.$route.name === 'edit') {
        // console.log('edit');
        const id = this.book['@id'].replace('/books/', '');
        await updateBook(id, this.bookForm);
        this.$router.push({ name: 'home' });
      }
      if (this.$route.name === 'new') {
        // console.log('new');
        await creatrBook(this.bookForm);
        this.$router.push({ name: 'home' });
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .Navigation {
    display: grid;
    height: 60px;
    width: 100%;
    overflow: hidden;
    grid-template-columns: 80px 1fr 80px;
    grid-template-rows: auto;
    grid-template-areas: "back main btn";
    box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.25);
    position: fixed;
    z-index: 1;
    align-items: center;
    justify-content: center;
}
.handleBtn {
  cursor: pointer;
}
</style>

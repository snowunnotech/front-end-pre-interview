<template>
  <div class="BookCard col-xs-12 col-sm-6 col-xl-3" @click="BookDetail(bookID)">
    <div class="card m-2">
      <div class="card-img-top imgPlace"> X </div>
      <div class="card-body text-left">
        <div  class="card-title"> {{title}} </div>
        <div class="card-text">
          <div> by {{author}}</div>
          <div class="small"> {{time}} </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BookCard extends Vue {
  @Prop() private bookID!: string;

  @Prop() private title!: string;

  @Prop() private author!: string;

  @Prop() private publicationDate!: string;

  private get time() {
    return new Date(this.publicationDate)
      .toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      });
  }

  private BookDetail(url: string) {
    const id = url.replace('/books/', '');
    this.$router.push({ name: 'book', params: { id } });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
  cursor: pointer;
  transition: all .4s;
  border-color: transparent;
  height: calc(100% - 1.4rem);
  &:hover {
    box-shadow: 0px 6px 8px 0px rgba(0, 0, 0, 0.13);
  }
  .imgPlace {
    height: 60px;
    font-size: 1.2rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

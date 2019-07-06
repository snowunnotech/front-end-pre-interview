<template>
  <div>
    <el-row :gutter="40" class="book-group">
      <el-col v-for="(book, index) in bookList.slice(0, loadBooksNumber)"
        :key="index" :xs="12" :sm="12" :lg="6"
        class="book-col">
        <div @click="checkDetail(index)">
          <el-card class="book-content">
            <div slot="header" class="clearfix">
              <span> X </span>
            </div>
            <div>
              {{ book['title'] }}
            </div>
            <div class="book-publication-message">
              <span>
                By {{ book['author'] }} {{ book['publicationDate'] }}
              </span>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';


@Component
export default class BookLists extends Vue {
  get loadBooksNumber(): number {
    return this.$store.state.loadBooksNumber;
  }

  get bookList() {
    return this.$store.state.bookList;
  }

  checkDetail(id: any) {
    const Bookid: number = id;
    this.$router.push(`/bookdetail/${Bookid}`);
  }

  mounted() {
    this.$store.dispatch('loadBooksList');
  }
}
</script>

<style lang="scss" scoped>
.book-group {
  margin-top: 18px;

  .book-col {
    margin-bottom: 32px;
    text-align: center;
  }

  .book-content {
    position: relative;
    height: 330px;
    margin: 0 auto;
    overflow: hidden;
    font-size: 24px;
    color: #666;
    background: #fff;
    border-color: rgba(0, 0, 0, 0.05);
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
  }

  .book-publication-message {
    position: absolute;
    right: 0;
    bottom: 20px;
    left: 0;
  }
}

@media (max-width: 650px) {
  .panel-group .card-panel {
    height: 200px;
  }
}
</style>

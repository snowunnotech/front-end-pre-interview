<template>
  <div>
    <BookDetailNavbar :title="Bookdetail['title']"/>
    <el-row type="flex" justify="space-between" class="message-row">
      <el-col>Author: {{ Bookdetail['author'] }}</el-col>
      <el-col>{{ Bookdetail['publicationDate'] }}</el-col>
    </el-row>
    <el-row type="flex" justify="center" class="context-row">
      <el-col :xs="20" :sm="20">
        <span>
          {{ Bookdetail['description'] }}
        </span>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BookDetailNavbar from './BookDetailNavbar.vue';

@Component({
  components: {
    BookDetailNavbar,
  },
})
export default class BookDetail extends Vue {
  get bookId() {
    return this.$route.params.id;
  }

  get bookList() {
    return this.$store.state.bookList;
  }

  get Bookdetail() {
    return this.bookList[this.bookId];
  }
}
</script>

<style lang="scss" scoped>
.nav-row {
  line-height: 60px;
  color: #ffff;
  background-color: #ffc35f;

  .nav-title {
    font-size: 20px;
  }

  .nav-button {
    margin: 0 10px;
    font-size: 30px;
  }
}

.message-row {
  margin-top: 20px;
  color: #9d9d9d;
}

.context-row {
  padding-right: 10px;
  padding-left: 10px;
  margin-top: 40px;
  font-size: 25px;
  line-height: 40px;
  text-align: left;
}
</style>

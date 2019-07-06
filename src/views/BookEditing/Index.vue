<template>
  <div>
    <EditingNavbar
      @save="addNewBook"
    />
    <div class="section">
      <el-row type="flex" justify="center" class="row-margin">
        <el-col :xs="20" :sm="12">
          <el-input
            v-model="title"
            placeholder="Book Name"
          >
          </el-input>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" class="row-margin">
        <el-col :xs="20" :sm="12">
          <el-input
            v-model="isbn"
            placeholder="ISBN"
          >
          </el-input>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" class="row-margin">
        <el-col :xs="20" :sm="12">
          <el-input
            v-model="author"
            placeholder="Author"
          >
          </el-input>
        </el-col>
      </el-row >
      <el-row type="flex" justify="center" class="row-margin">
        <el-col :xs="20" :sm="12">
          <el-input
            v-model="publicationDate"
            placeholder="Create at"
          >
          </el-input>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" class="row-margin">
        <el-col :xs="20" :sm="12">
          <el-input
            v-model="description"
            type="textarea" :rows="6">
          </el-input>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import EditingNavbar from './components/EditingNavbar.vue';

@Component({
  components: {
    EditingNavbar,
  },
})

export default class BookEditingView extends Vue {
  title = '';

  isbn = '';

  author = '';

  publicationDate = '';

  description = '';

  addNewBook() {
    const bookData = {
      title: this.title,
      isbn: this.isbn,
      author: this.author,
      publicationDate: this.publicationDate,
      description: this.description,
    };
    this.$store.dispatch('addNewBook', bookData);
  }
}
</script>

<style lang="scss" scoped>
.nav-row {
  line-height: 60px;
  color: #fff;
  background-color: #ffc35f;
}

.nav-button {
  margin: 0 10px;
  font-size: 30px;
}

.section {
  margin: 30px 0;
}

.row-margin {
  margin: 20px 0;
}
</style>

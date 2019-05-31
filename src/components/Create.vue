<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container-fluid bg-primary">
      <ul class="nav d-flex justify-content-between">
        <li class="nav-item">
          <a class="nav-link text-white" @click.prevent="backPage" href="#">Back</a>
        </li>
        <li class="nav-item align-self-center text-white">
          Create new book
        </li>
        <li class="nav-item" v-if="this.errors.items.length !== 0">
          <a class="nav-link text-muted">Create</a>
        </li>
        <li class="nav-item" v-if="this.errors.items.length === 0">
          <a class="nav-link text-white" href="#" @click.prevent="createBook(book)">Create</a>
        </li>
      </ul>
    </div>
    <div class="container-fluid">
      <form>
        <div class="form-group mt-3">
          <input type="text" class="form-control" placeholder="Title" v-model="book.title" name="title" v-validate="'required'" :class="{'is-invalid':errors.has('title')}">
          <small class="form-text text-danger" v-if="errors.has('title')">請輸入書名</small>
        </div>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Author" v-model="book.author" name="author" v-validate="'required'" :class="{'is-invalid':errors.has('author')}">
          <small class="form-text text-danger" v-if="errors.has('author')">請輸入作者</small>
        </div>
        <div class="form-group">
          <input type="date" class="form-control" placeholder="Created at" v-model="book.publicationDate" name="publicationDate" v-validate="'required'" :class="{'is-invalid':errors.has('publicationDate')}">
          <small class="form-text text-danger" v-if="errors.has('publicationDate')">請輸入出版日期</small>
        </div>
        <div class="form-group pb-3">
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="7" v-model="book.description" name="description" v-validate="'required|min:20'" :class="{'is-invalid':errors.has('description')}"></textarea>
          <small class="form-text text-danger" v-if="errors.has('description')">描述請大於20字</small>
        </div>
    </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex'

export default {
  name: 'Add',
  data() {
    return {
      book:{
        title: '',
        author: '',
        description: '',
        publicationDate: ''
      }
    }
  },
  methods: {
    ...mapActions(['createBook','backPage']),
  },
  computed: {
    ...mapGetters(['isLoading']),
  },
}
</script>
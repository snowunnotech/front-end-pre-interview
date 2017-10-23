<template>
<div>
    <header>
      <div class="container">
        <div class="row">
          <div class="col-3 col-sm-2 text-left">
            <a href="/">Back</a>
          </div>
          <div class="col-6 col-sm-8 text-center title">
            <span>Add New Book</span>
          </div>
          <div class="col-3 col-sm-2 text-right">
            <a href="#" @click.prevent="actionAddBook">Save</a>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
        <form>
            <div class="form-group">
                <input type="text" id="title" name="title" v-validate="'required'" class="form-control {'input': true, 'is-danger': errors.has('title') }" placeholder="Title" v-model="book.title">
                <i v-show="errors.has('title')" class="fa fa-warning"></i>
                <span v-show="errors.has('title')" class="help is-danger">{{ errors.first('title') }}</span>
            </div>
            <div class="form-group">
                <input type="text" id="author" name="author" v-validate="'required'" class="form-control {'input': true, 'is-danger': errors.has('author') }" placeholder="Author" v-model="book.author">
                <i v-show="errors.has('author')" class="fa fa-warning"></i>
                <span v-show="errors.has('author')" class="help is-danger">{{ errors.first('author') }}</span>
            </div>
            <div class="form-group">
                <!-- <input type="date" name="publicationDate" name="publicationDate" class="form-control"> -->
                <input type="text" id="publicationDate" name="publicationDate" v-validate="'required|date_format:YYYY/MM/DD'" class="form-control {'input': true, 'is-danger': errors.has('publicationDate') }" placeholder="Created At" v-model="book.publicationDate">
                <i v-show="errors.has('publicationDate')" class="fa fa-warning"></i>
                <span v-show="errors.has('publicationDate')" class="help is-danger">{{ errors.first('publicationDate') }}</span>
            </div>
            <div class="form-group">
                <input type="text" id="isbn" name="isbn" v-validate="'required|numeric'" class="form-control {'input': true, 'is-danger': errors.has('isbn') }" placeholder="ISBN" v-model="book.isbn">
                <i v-show="errors.has('isbn')" class="fa fa-warning"></i>
                <span v-show="errors.has('isbn')" class="help is-danger">{{ errors.first('isbn') }}</span>
            </div>
            <div class="form-group">
                <textarea name="description" id="description" v-validate="'required'" class="form-control {'input': true, 'is-danger': errors.has('description') }" cols="30" rows="10" placeholder="Description" v-model="book.description"></textarea>
                <i v-show="errors.has('description')" class="fa fa-warning"></i>
                <span v-show="errors.has('description')" class="help is-danger">{{ errors.first('description') }}</span>
            </div>
        </form>
    </div>
</div>
  
</template>

<script>
// 引用 vuex
import { mapGetters, mapActions } from 'vuex'
  
  export default {
    name: 'Create',
    data () {
      return {
        msg: 'Create Book',
        book: {
          id: 0,
          title: '',
          author: '',
          publicationDate: '',
          isbn: '',
          description: '',
        },
      }
    },
    methods: {
      actionAddBook () {
        this.$store.dispatch('addBook', this.book);
      }
    }
  }
</script>
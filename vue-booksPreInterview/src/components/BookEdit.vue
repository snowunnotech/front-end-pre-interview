<template>
  <div class="book-edit">
    <header class="header">
      <div class="btn-back" @click="handle_routeBack">Back</div>
      <h2>{{pageTitle}}</h2>
      <div class="btn-save" @click="handle_save">Save</div>
    </header>
    <form class="edit">
      <div class="edit-input">
        <label for="author">
          <input id="author" type="text" v-model="formData.title" @focus="handle_focus('title')" @blur="handle_blur('title')">
        </label>
      </div>
      <div class="edit-input" :class="{'edit-input-error': !suitAuthor}">
        <label for="author">
          <input id="author" type="text" v-model="formData.author" @focus="handle_focus('author')" @blur="handle_blur('author')" @keyup="handle_keyup('author')">
        </label>
      </div>
      <div class="edit-input" :class="{'edit-input-error': !suitPublicationDate}">
        <label for="createDate">
          <input id="createDate" type="text" v-model="formData.publicationDate" @focus="handle_focus('publicationDate')" @blur="handle_blur('publicationDate')" @keyup="handle_keyup('publicationDate')">
        </label>
      </div>
      <div class="edit-input">
        <textarea name="description" cols="30" rows="10" v-model="formData.description"></textarea>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import _ from 'lodash'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'BookEdit',
  data () {
    return {
      pageTitle: 'Edit a book',
      formData: {
        isbn: '9789863208150',
        title: 'Title',
        description: 'String',
        author: 'Author',
        publicationDate: '2019-03-15T02:35:48.407Z'
      },
      bookID : this.$route.params.id,
      suitPublicationDate: true,
      suitAuthor: true
    }
  },
  computed: {
    ...mapGetters([
      'BookList'
    ])
  },
  methods: {
    ...mapActions([
      'GetBookInfo',
      'GetBookListApi',
      'POSTBookCreate',
      'PUTBookEdit'
    ]),
    handle_routeBack () {
      this.$router.back()
    },
    handle_save () {
      let axiosData = {
        "isbn": this.formData.isbn,
        "title": this.formData.title,
        "description": this.formData.description,
        "author": this.formData.author,
        "publicationDate": this.formData.publicationDate
      }
      switch (this.$route.name) {
        case 'BookCreate':
          this.POSTBookCreate(axiosData)
          this.$router.back()
          break
        case 'BookEdit':
          this.PUTBookEdit(this.bookID,axiosData)
          this.$router.back()
      }
    },
    handle_focus (data) {
      switch (data) {
        case 'author':
          if (this.formData[data] === 'Author') {
            this.formData[data] = ''
          }
          break
        case 'publicationDate':
          if (this.formData[data] === 'Created at') {
            this.formData[data] = ''
          }
          break
        case 'title':
          if (this.formData[data] === 'Title') {
            this.formData[data] = ''
          }
          break
        case 'isbn':
          if (this.formData[data] === 'ISBN') {
            this.formData[data] = ''
          }
          break
      }
    },
    handle_blur (data) {
      if (!this.formData[data].length) {
        switch (data) {
          case 'author':
            this.formData[data] = 'Author'
            break
          case 'publicationDate':
            this.formData[data] = 'Created at'
            break
          case 'title':
            this.formData[data] = 'Title'
            break
          case 'isbn':
            this.formData[data] = 'ISBN'
        }
      }
    },
    handle_keyup: _.debounce(function (data) {
      switch (data) {
        case 'publicationDate':
          let dateRex = new RegExp('([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8])))')
          this.suitPublicationDate = dateRex.test(this.formData[data])
      }
    }, 333)
  },
  created () {
    switch (this.$route.name) {
      case 'BookCreate':
        this.pageTitle = 'Add new book'
        break
      case 'BookEdit':
        this.pageTitle = 'Edit a book'
        console.log('enter in BookEdit: ')
        if (this.$store.getters.BookInfo[0].length !== 0) {
          this.formData = this.$store.getters.BookInfo[0]
        }
    }
  },
  mounted () {
    console.log(this)
  },
  beforeDestroy () {
  }
}
</script>

<style lang="scss" scoped>
.header{
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: #FFC35F;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  h2{
    color: #fff;
  }
}
.btn-save{
  cursor: pointer;
  padding: 15px;
  color: #fff;
}
.btn-back{
  cursor: pointer;
  padding: 15px;
  color: #fff;
}
.book-edit{
 width: 100%;
}
.edit-input{
  width: 100%;
  margin-bottom: 12px;
  color: #A7A7A7;
  input{
    border: none;
    border-radius: 4px;
    padding: 12px;
    width: 100%;
    font-size: 16px;
    color: inherit;
    &:focus{
      outline: none;
    }
  }
  textarea{
    border: none;
    width: 100%;
    padding: 12px;
    resize: none;
    color: inherit;
    &:focus{
      outline: none;
    }
  }
}
.edit-input-error{
  border: 1px solid red;
}

</style>

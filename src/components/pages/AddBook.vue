<template>
    <div>
        <form class="mt-3 px-3">
          <div class="form-group">
            <input type="text" class="form-control mb-2" id="Author" name="author" placeholder="Author" v-model="author" v-validate="'required'">
            <span class="text-danger" v-if="errors.has('author')">作者必須輸入</span>
            <input type="date" class="form-control mb-2" id="date" name="date" placeholder="Created at" v-model="publicationDate" v-validate="'required'">
            <span class="text-danger" v-if="errors.has('date')">日期必須輸入</span>
            <textarea class="form-control" name="description" v-model="description" v-validate="'required'"></textarea>
            <span class="text-danger" v-if="errors.has('description')">作者必須輸入</span>
          </div>
        </form>
    </div>
</template>

<script>
import { eventBus } from '@/main'
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      author: '',
      publicationDate: '',
      description: ''
    }
  },
  methods: {
    ...mapActions(['updateBook', 'addBook']),
    submitBook () {
      this.$validator.validate().then(valid => {
        if (!valid) {
          // eventBus.$emit('message:push', '請完成欄位')
        } else {
          const book = {
            'title': this.bookDetail ? this.bookDetail.title : 'Twilight',
            'description': this.description,
            'author': this.author,
            'publicationDate': this.publicationDate.replace(/-/gi, '/')
          }
          this.bookDetail ? this.updateBook(book) : this.addBook(book)
        }
      })
    }
  },
  // updated () {
  //   this.$emit('addBook', this.form)
  // },
  computed: {
    ...mapGetters(['bookDetail'])
  },
  created () {
    eventBus.$on('addBook', this.submitBook)
    if (this.bookDetail) {
      this.author = this.bookDetail.author
      this.publicationDate = this.bookDetail.publicationDate
      this.description = this.bookDetail.description
    }
  },
  beforeDestroy () {
    eventBus.$off('addBook')
  }
}
</script>

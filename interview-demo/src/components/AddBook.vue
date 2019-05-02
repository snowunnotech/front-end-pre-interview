<template>
  <div>
    <loading :active.sync="isLoading" color="#ffc35f"></loading>
    <nav class="nav justify-content-between p-2 mb-5">
      <div class="back-btn nav-link" @click="back()">Back</div>
      <div class="txt nav-link">Add new book</div>
      <div class="add-btn nav-link" @click="add()">Save</div>
    </nav>

    <form class="container">
      <div class="form-group">
        <input type="text" class="form-control"  name="title" placeholder="標題 ＊" 
          v-model="newBook.title" v-validate="'required'">
        <span class="text-danger mt-2 d-block" v-if="errors.has('title')"> 
          {{ errors.first('title') }}
        </span>
      </div>
      <div class="form-group">
        <input type="text" class="form-control"  name="author" placeholder="作者 ＊" 
          v-model="newBook.author" v-validate="'required|alpha_spaces'">
        <span class="text-danger mt-2 d-block" v-if="errors.has('author')"> 
          {{ errors.first('author') }}
        </span>
      </div>
      <div class="form-group">
        <input type="date" class="form-control"  name="date" placeholder="日期 ＊" 
          v-model="newBook.date" v-validate="'required'">
        <span class="text-danger mt-2 d-block" v-if="errors.has('date')"> 
          {{ errors.first('date') }}
        </span>
      </div>
      <div class="form-group">
        <textarea class="form-control" rows="5" name="content"
          placeholder="寫點東西 ＊" v-model="newBook.content" v-validate="'required'">
        </textarea>
        <span class="text-danger mt-2 d-block" v-if="errors.has('content')"> 
          {{ errors.first('content') }}
        </span>
      </div>
    </form>

  </div>
</template>


<script>
export default {
  data() {
    return {
      newBook: {
        title: '',
        author: '',
        date: '',
        content: ''
      },
    }
  },
  methods: {
    back() {
      this.$router.go(-1)
    },
    add() {
      if(this.$route.query.id) {
        this.$store.dispatch('updateBook', this.newBook)
        this.$router.push(`/${this.newBook._id}`)
      } else {
        const {title, author, date, content} = this.newBook
        if(title && author && date && content) {
          this.$store.dispatch('addBook', this.newBook)
          this.$router.push('/')
        } else return
      }
    }
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading
    }
  },
  mounted() {
    if(this.$route.query.id) {
      const book = this.$store.state.book
      this.newBook = {
        ...book
      }
    } else return
  }
}
</script>

<style lang="scss" scope>
  .form-control {
    color: #6d757d;
  }
  .add-btn, .back-btn {
    cursor: pointer;
    &:hover {
      opacity: .5;
    }
  }
</style>

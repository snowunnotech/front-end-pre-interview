<template>
  <div>
    <NavBar>
      <div id="back-btn">
        <button @click="goToHome">Back</button>
      </div>
      <div v-if="this.$route.name === 'create'">Add new book</div>
      <div v-if="this.$route.name === 'edit'">Edit book</div>
      <div id="save-btn">
        <button @click="save">Save</button>
      </div>
    </NavBar>
    <div class="management-container">
      <div v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
        </ul>
      </div>
      <input
        placeholder="Isbn"
        v-if="this.$route.name === 'create'"
        v-model="userInput.isbn"
        name="isbn"/>
      <input placeholder="Title" v-model="userInput.title"/>
      <textarea placeholder="Description" v-model="userInput.description"/>
      <input type="date" placeholder="PublicationDate" v-model="userInput.publicationDate"/>
      <input placeholder="Author" v-model="userInput.author"/>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  name: 'Management',
  components: {
    NavBar
  },
  data () {
    return {
      bookId: null,
      userInput: {
        isbn: '',
        title: '',
        author: '',
        description: '',
        publicationDate: ''
      },
      errors: []
    }
  },
  methods: {
    goToHome () {
      this.$router.replace('/')
    },
    save () {
      const emptyFields = Object.keys(this.userInput).filter((key) => {
        return !this.userInput[key]
      })

      if (this.userInput.isbn) {
        var isbnRegex1 = RegExp('(?=.{17}$)97(?:8|9)([ -])\\d{1,5}\\1\\d{1,7}\\1\\d{1,6}\\1\\d$')
        var isbnRegex2 = RegExp('^(\\d+-?)+\\d+$')
        if (!isbnRegex1.test(this.userInput.isbn) && !isbnRegex2.test(this.userInput.isbn)) {
          this.errors.push('Invalid isbn')
          return
        }
      }

      if (emptyFields.length > 0) {
        emptyFields.forEach((emptyField) => {
          this.errors.push(`${emptyField} required.`)
        })
        // invalid user input found, escape it.
        return
      }

      if (this.$route.name === 'edit') {
        const { isbn, ...tmp } = this.userInput
        this.$store.dispatch('saveBookInfo', { bookId: this.bookId, userInput: tmp, cb: this.setBook.bind(this) })
      } else {
        // create
        this.$store.dispatch('createBookInfo', { userInput: this.userInput, cb: this.setBook.bind(this) })
      }
      this.goToHome()
    },
    setBook (book) {
      this.bookId = book['@id']
      const { isbn, title, author, description, publicationDate } = book
      const convertedDate = new Date(publicationDate).toISOString().substring(0, 10)
      this.userInput = { isbn, title, author, description, publicationDate: convertedDate }
    }
  },
  mounted () {
    if (this.$route.name === 'edit') {
      this.bookId = this.$route.params.id
      this.$store.dispatch('getBookInfo', { bookId: this.bookId, cb: this.setBook.bind(this) })
    }
  }
}
</script>

<style>
#back-btn {
  flex: 1;
  display: flex;
  justify-content: flex-start;
}

#save-btn {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.management-container {
  padding: 20px;
}

.management-container input,textarea {
  width: calc(100% - 20px);
  margin: 5px 0px;
  padding: 5px;
}

.management-container input {
  height: 30px;
  border: 1px solid lightgray;
}

.management-container textarea {
  height: 80px;
  border: 1px solid lightgray;
}
</style>

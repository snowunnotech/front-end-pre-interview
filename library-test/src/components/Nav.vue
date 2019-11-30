<template>
  <div class="nav">
    <span 
      v-show="$route.path !== '/' "
      class="nav-item nav-text" 
      @click="goPage('Back')">
      Back
    </span>
    <span 
      v-show="normalTitle || showNavTitle && navBarTitle"
      class="nav-item nav-text" >
      {{ normalTitle || navBarTitle }}
      </span>
    <span 
      class="nav-item nav-text" 
      :class="$route.path === '/' && 'margin-left'"
      @click="goPage(navbarText)">{{ navbarText }}</span>
  </div>
</template>

<script>

import { createBook, updateBook } from '../services/Book'
export default {
  name: 'Nav',
  data() {
    return {
      showNavTitle: this.$route.meta.navBarTitle,
      navbarText: this.$route.meta.navbarText,
      normalTitle: this.$route.meta.title
    }
  },
  computed: {
    navBarTitle() {
      if(Object.keys(this.$store.state.bookDetail)) {
        return this.$store.state.bookDetail.title
      }
      return false
    },
    bookForm() {
      return this.$store.state.form
    }
  },
  methods: {
    goPage (target) {
      let id = this.$route.params.id
      let routeName = this.$route.name
      switch(target) {
        case 'Edit':
          this.$router.push({ name: 'bookEdit', params: { id } })
          break;
        case 'New':
          this.$router.push({ name: 'bookCreate'})
          break;
        case 'Save':
          this.submitForm(routeName)
        case 'Back':
          history.back()
          break;
      }
    },
    async submitForm(target) {
      
      // Build formData object.  
      let formData = {
        title: this.bookForm.title,
        author: this.bookForm.author,
        isbn: this.bookForm.isbn,
        description: this.bookForm.description,
        publicationDate: this.bookForm.date,
        reviews: []
      }  
      switch(target) {
        case 'bookCreate':
          await createBook(formData)
            .then(() => {
              this.$store.commit('EMPTY_FORM')
              this.$router.push({ name: 'bookList'})
            })
            .catch((err) => {
              alert(err)
            })
          break;
        case 'bookEdit': 
          await updateBook(formData, this.$route.params.id)
            .then(() => {
              this.$store.commit('EMPTY_FORM')
              this.$router.push({ name: 'bookList'})
            })
            .catch((err) => {
              alert(err)
            })
          break;
      }
    }
  },
  watch: {
    '$route.meta': {
        handler(newValue) {
          this.showNavTitle = newValue.navBarTitle
          this.navbarText = newValue.navbarText
          this.normalTitle = newValue.title
        },
        immediate: true,
        deep: true
    }
}
}
</script>

<style lang="less" scoped>
.nav {
  background-color: #FFC35F;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .nav-item {
    margin: 0 8vw;
  }

  .nav-text {
    cursor: pointer;
    color: #FFF;
    text-decoration: none;
  }

  .nav-title {
    font-size: 16px;
  }

  .margin-left {
    margin-left: auto;
  }
}
</style>>
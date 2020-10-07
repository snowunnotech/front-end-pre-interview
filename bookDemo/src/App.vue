<template>
  <div id="app">
    <nav>
      <div @click="goAddBook()" class="text-button" v-show="this.$route.meta.page == 1 ">New</div>
      <div v-show="this.$route.meta.page == 2 " >
        <div class="text-button" @click="goBack()">Back</div>
        <div :showCurrentBookTitle="showCurrentBookTitle">{{this.showCurrentBookTitle}}</div>
        <div class="text-button" @click="doEdit()">Edit</div>
      </div>
      <div v-show="this.$route.meta.page == 3 ">
        <div class="text-button" @click="goBack()">Back</div>
        <div>Add new book</div>
        <div @click="callCreateApi()" class="text-button">Save</div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>
<script>
// import Vue from 'vue'
import axios from 'axios'
import store from './store.js'
export default {
  components: {
  },
  data() {
    return {
      store,

    };
  },

  created() {

    if(this.$route.meta.page == 0){
      this.$router.push({path:'/bookList'})
    }

  },
  mounted(){
    console.log('this',this)

  },
  methods: {
    goBack(){
      this.$router.go(-1)
    },
    doEdit(){
      this.$store.dispatch('actionChangeEditState')
    },
    goAddBook(){
      this.$router.push({path:'/addBook'})

    },
    callCreateApi(){
      if(this.getBookTitle.length < 1  ||  this.getBookAuthor.length < 1  ||  this.getBookPublicationDate.length < 1  ||  this.getBookDescription.length < 1){
        alert('資料還沒填完喔～')
      }else{
        
        let createBook={
          "title":this.getBookTitle,
          "description":this.getBookDescription,
          "author":this.getBookAuthor,
          "publicationDate":this.getBookPublicationDate
        }

        axios.post("https://demo.api-platform.com/books",createBook)
          .then(response => {
            console.log('create good', response)
            this.$store.dispatch('actionCleanBook')
            alert('新增成功～～')
            this.$router.push({path:'/bookList'})
      
          }, error => {
            alert('新增失敗～～')
            console.log('create bad', error)
          })
        

      }
    },
  },
  computed:{
    getCurrentBook() {
      return this.$store.state.currentBook
    },
    showCurrentBookTitle() {
      let title = null
      if(this.getCurrentBook.length){
        title = this.getCurrentBook[0].title
      }
      return title
    },
    //createBookInfo
    getBookTitle() {
      return this.$store.state.createBook.title
    },
    getBookAuthor() {
      return this.$store.state.createBook.author
    },
    getBookPublicationDate() {
      return this.$store.state.createBook.publicationDate
    },
    getBookDescription() {
      return this.$store.state.createBook.description
    },
  }
}
</script>


<style lang="scss" scope>
@import './assets/style/share.scss';
nav {
  width: 100vw;
  height:8vh;
  background: #ffc048;
  div{
    @extend .flex-row;
    align-items: center;
    height:8vh;
    color:#ffffff;
    font-size:25px;
    justify-content: space-between;
    div{
      padding: 0px 30px;
    }
  }
  div:nth-child(1){
    justify-content: flex-end;
    padding-right:30px; 
  }
}
.text-button:hover{
  cursor: pointer;
  text-shadow: 2px 2px 1px #b2bec3;
}
</style>



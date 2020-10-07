<template>
  <div>
    <section class="layout">
        <div class="flex-col">
          <input class="mb-20" v-model="title" placeholder="title"/>
          <input class="mb-20" v-model="author" placeholder="author"/>
          <input class="mb-20" v-model="publicationDate" placeholder="publicationDate"/>
          <textarea class="mb-20" v-model="description" placeholder="description"/>
        </div>
    </section>
  </div>
</template>
<script>
// import Vue from 'vue'
import axios from 'axios'
import store from '../store.js'
import { isArray } from 'util';
export default {
  components: {
  },
  data() {
    return {
      store,
      currentBook:[],


    };
  },
  created() { 
  },
  mounted(){

  },
  methods: {

    },

  computed:{
    checkIsNull(){
      if(this.book.title.length > 1 && this.book.author.length > 1 && this.book.publicationDate.length > 1 && this.book.description.length > 1){
        console.log(this.book)
      }else{
        alert('你還有資料沒有填完喔～')
      }
      return this.book

    },
    title: {
      get() {
        return this.$store.state.createBook.title
      },
      set(value) {
        this.$store.commit('updateTitle', value)
      },
    },
    author: {
      get() {
        return this.$store.state.createBook.author
      },
      set(value) {
        this.$store.commit('updateAuthor', value)
      },
    },
    publicationDate: {
      get() {
        return this.$store.state.createBook.publicationDate
      },
      set(value) {
        this.$store.commit('updatePublicationDate', value)
      },
    },
    description: {
      get() {
        return this.$store.state.createBook.description 
      },
      set(value) {
        this.$store.commit('updateDescription', value)
      },
    },




  }
}
</script>
<style lang="scss" scope>
@import '../assets/style/share.scss';
.layout{
  height:100vh;
  
  p{
    text-align: left;
    font-size:25px;
  }
  textarea{
    width:calc(100vw - 100px);
    height:40vh;
    color: #2c3e50;
    border:0px solid;
    font-size:18px;
    padding: 10px;
    font-weight: 500;
  }
  input{
    color: #7f8c8d;
    border:0px solid;
    font-size:18px;
    font-weight: 500;
    padding: 10px;
  }
}
// .content-1{
//   @extend .flex-row;
//   justify-content: space-between;
//   color: #7f8c8d;
// }
</style>


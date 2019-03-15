<template>
  <section class="book-info">
    <header class="header">
      <div class="btn-back" @click="handle_routeBack">Back</div>
      <h2>{{Article.title}}</h2>
      <!-- <router-link class="btn-save" :to="book['@id']">Edit</router-link> -->
      <router-link class="btn-save" :to="{
        name:'BookEdit', 
        params: { id: this.$route.params.id, something: 'edit'}
        }">Edit</router-link>
    </header>
    <div class="detail">
      <p >Author: {{Article.author}}</p><p>{{Article.publicationDate}}</p>
    </div>
    <article class="book-content">
      <p>{{Article.description}}</p>
    </article>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'BookInfo',
  data () {
    return {
      Interval: null,
      Article: {
        "title": "Title",
        "description": "string",
        "author": "string",
        "publicationDate": "2019-03-15"
      }
    }
  },
  computed: {
    ...mapGetters([
      'BookList',
      'BookInfo'
    ])
  },
  methods: {
    ...mapActions([
      'GetBookInfo',
      'GetBookListApi'
    ]),
    handle_routeBack () {
      this.$router.back()
    }
  },
  created () {
    const vm = this
    if (this.BookList.length === undefined) {
      this.GetBookListApi()
      return new Promise((resolve, reject) => {
        vm.Interval = setInterval(() => {
          if (vm.BookList.length !== undefined) {
            resolve('good')
          }
        }, 1000)
      }).then((res) => {
        console.log('cleatInter')
        clearInterval(vm.Interval)
        vm.GetBookInfo(vm.$route.params.id)
      })
    } else {      
      console.log('else')
      vm.GetBookInfo(vm.$route.params.id)
      
    }
    this.Article.title = this.BookInfo[0].title
    this.Article.description = this.BookInfo[0].description
    this.Article.author = this.BookInfo[0].author
    this.Article.publicationDate = this.BookInfo[0].publicationDate
    vm.$forceUpdate();
    
  },
  mounted () {

  },
  update(){
    console.log('view updated')
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
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
.btn-save{
  cursor: pointer;
  padding: 15px;
  color: #fff;
  text-decoration: none;
}
.btn-back{
  cursor: pointer;
  padding: 15px;
  color: #fff;
}
.book-info{
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
.detail{
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  p{
    font-size: 12px;
    color: #9B9B9B;
  }
}
.book-content{
  position: relative;
  width: 100%;
  p{
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    line-height: 1.5;
    color: #4A4A4A;
  }
}
</style>

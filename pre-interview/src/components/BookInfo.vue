<template>
  <section class="book-info">
    <header class="header">
      <div class="btn-back" @click="handle_routeBack">Back</div>
      <h2>{{Article.title}}</h2>
      <router-link class="btn-save" to="/books/1/edit">Edit</router-link>
      <!-- <div class="btn-save" @click="handle_save">Edit</div> -->
    </header>
    <div class="detail">
      <p>Author: {{Article.author}}</p><p>{{Article.publicationDate}}</p>
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
        "publicationDate": "2018-08-27"
      }
    }
  },
  computed: {
    ...mapGetters([
      'BookList',
      'BookInfo'
    ])
  },
  watch: {
    BookInfo (val) {
      if (val !== undefined) {
        this.Article = this.BookInfo[0]
      }
    }
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
        clearInterval(vm.Interval)
        vm.GetBookInfo(vm.$route.params.id)
      })
    } else {
      vm.GetBookInfo(vm.$route.params.id)
    }
  },
  mounted () {

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

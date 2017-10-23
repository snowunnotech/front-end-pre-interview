<template>
<div>
    <header>
      <div class="container clearfix">
          <div class="float-right">
            <router-link :to="{path: '/create'}">New</router-link>
          </div>
      </div>
    </header>
    <div class="container">
        <div class="books row">
            <div v-for ="(book,index) in books_list" class="book col-6 col-md-4 col-lg-3">
                <div class="book_inner">
                    <div class="delete">
                      <a href="#" @click.prevent="delBook(index)">x</a>
                    </div>
                    <div class="title">
                      <!-- 在清單頁顯示書籍描述內容比較難吸引人，字數又多，因此調整為顯示書籍標題 -->
                        {{ book.title }}
                    </div>
                    <div class="other">
                      <div class="info clearfix">
                        <div class="author float-left">by {{book.author}}</div>
                        <div class="date float-right">{{book.publicationDate}}</div>
                      </div>
                      <div class="read">
                        <router-link :to="{path: '/book/'+book.id}">
                          Read
                        </router-link>
                      </div>
                    </div>
              </div>
            </div>
        </div>
        <div v-show="showButton" @click.prevent="pushBook(pagination.pos + 1)" class="more">
            <a class="btn btn-default" href="#" role="button">Load More</a>
        </div>
  </div>
</div>
  
</template>

<script>
// 引用 vuex
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Books',
  data () {
    return {
      msg: 'Books Page',
      limit: 8,
      books_list:[],
      pagination: {
        total:0,
        size: 6,
        pages:0,
        pos:0
      },
      showButton: true,
    }
  },
  created(){
    this.$store.dispatch('actionGetBooks');
  },
  computed: {
    ...mapGetters({
      books: 'getBooks',
    }),
  },
  methods: {
    ...mapActions([
      'deleteBook',
    ]),
    delBook(index) {
      this.deleteBook(this.books[index].id);
      this.books_list.splice(index,1);
    },
    pushBook(pos) {
      if (pos >= this.pagination.pages -1){
        this.showButton = false;
        return;
      }
      this.pagination.pos = pos;

      let start = pos * this.pagination.size;
      let end = start + this.pagination.size;
      for(let i = start ; i < end; i++) {
          this.books_list.push(this.books[i]);
      }

    }
  },
  watch: {
    'books':function(val) {
      this.pagination.total = val.length; 
      this.pagination.pages = Math.floor(this.pagination.total / this.pagination.size); 
      this.pushBook(0);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.book {
  margin-bottom: 15px;
}
.book_inner {
  background: #fff;
  border-radius: 5px;
  color: #999;
  display: block;
  height: 100%;
  padding: 10px 10px 110px;
  position: relative;
}
.delete {
  font-size: 1.5rem;
  text-align: center;
}
.delete a {
  color: #444;
}
.delete a:hover {
  color: #fec267;
}
.other {
  bottom: 0;
  box-sizing: border-box;
  left: 0;
  padding: 15px 10px;
  position: absolute;
  width: 100%;
}
.info {
  font-size: 0.8rem;
  font-style: italic;
  padding-bottom: 10px;
}
.read a {
  background: #fec267;
  border-radius: 3px;
  color: #fff;
  display: block;
  padding: 3px 0;
  text-align: center;
}
.more {
    margin: 20px auto;
}
.more a {
    background: #fec267;
    border: 0;
    color: #fff;
    font-size: 1.1rem;
    padding: 15px 0;
    width: 100%;
}
</style>

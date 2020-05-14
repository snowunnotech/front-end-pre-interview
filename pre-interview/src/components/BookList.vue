<template>
  <section class="book-list">
    <header class="header">
      <router-link class="btn-new" to="/create">NEW</router-link>
    </header>
    <ul>
      <li v-for="(book, index) in BookList" :key="book.title + '_' + index">
        <router-link :to="book['@id']">
          <h3>{{book.title}}</h3>
          <p>{{book.description}}</p>
          <div class="detail">
            <span>by {{book.author}}</span> <span>{{book.publicationDate}}</span>
          </div>
        </router-link>
      </li>
    </ul>
    <div class="btn-loadmore">LoadMore</div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'BookList',
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'BookList'
    ])
  },
  methods: {
    ...mapActions([
      'GetBookListApi'
    ])
  },
  created () {
    this.GetBookListApi()
  },
  updated () {
    console.log(this.BookList)
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
}
.btn-new{
  position: absolute;
  top: 0;
  right: 15px;
  cursor: pointer;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #fff;
  text-decoration: none;
}
.book-list{
  position: relative;
  width: 100%;
  min-height: 100%;
  background-color: #F5F5F5;
  ul{
    width: 100%;
    padding-left: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    li{
      list-style: none;
      width: calc(50% - 8px);
      margin-bottom: 16px;
      background-color: #fff;
      padding: 8px;
      a{
        color: inherit;
        text-decoration: none;
      }
      h3{
        color: #535353;
        margin-top: 8px;
        margin-bottom: 8px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      p{
        color: #B3B3B3;
        font-size: 15px;;
        text-align: left;
        margin-bottom: 8px;
        max-height: 52px;
        overflow: hidden;
      }
      &::before{
        content: '';
        padding-top: 100%;
        float: left;
      }
      &::after{
        content: '';
        display: block;
        clear: both;
      }
    }
  }
}
.detail{
  width: 100%;
  font-style: italic;
  margin-left: -13px;
  color: #B3B3B3;
  span{
    font-size: 13px;
  }
}
.btn-loadmore{
  width: 100%;
  height: 55px;
  border-radius: 6px;
  color: #fff;
  background-color: #FFC35F;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

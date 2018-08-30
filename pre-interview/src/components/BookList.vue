<template>
  <section class="book-list">
    <ul>
      <li v-for="(book, index) in TheList" :key="book.title + '_' + index">
        <router-link to="/info/1">
          <h3>{{book.title}}</h3>
          <p>{{book.description}}</p>
          <div class="detail">
            <span>by {{book.author}}</span><span>{{book.publicationDate}}</span>
          </div>
        </router-link>
      </li>
    </ul>
    <div class="btn-loadmore">LoadMore</div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'BookList',
  data () {
    return {
      TheList: [
        // {
        //   "isbn": "string",
        //   "title": "string",
        //   "description": "string",
        //   "author": "string",
        //   "publicationDate": "2018-08-30T08:57:55.905Z",
        //   "reviews": [
        //     {
        //       "body": "string"
        //     }
        //   ]
        // }
        {
          "isbn": "string",
          "title": "X",
          "description": "A long but vert interesting stroy about REST and asyncio.",
          "author": "The life!",
          "publicationDate": "2018-08-30T08:57:55.905Z",
          "reviews": [
            {
              "body": "string"
            }
          ]
        },
        {
          "isbn": "string",
          "title": "X",
          "description": "A long but vert interesting stroy about REST and asyncio.",
          "author": "The life!",
          "publicationDate": "2018-08-30T08:57:55.905Z",
          "reviews": [
            {
              "body": "string"
            }
          ]
        },
        {
          "isbn": "string",
          "title": "X",
          "description": "A long but vert interesting stroy about REST and asyncio.",
          "author": "The life!",
          "publicationDate": "2018-08-30T08:57:55.905Z",
          "reviews": [
            {
              "body": "string"
            }
          ]
        },
        {
          "isbn": "string",
          "title": "X",
          "description": "A long but vert interesting stroy about REST and asyncio.",
          "author": "The life!",
          "publicationDate": "2018-08-30T08:57:55.905Z",
          "reviews": [
            {
              "body": "string"
            }
          ]
        },
        {
          "isbn": "string",
          "title": "X",
          "description": "A long but vert interesting stroy about REST and asyncio.",
          "author": "The life!",
          "publicationDate": "2018-08-30T08:57:55.905Z",
          "reviews": [
            {
              "body": "string"
            }
          ]
        },
        {
          "isbn": "string",
          "title": "X",
          "description": "A long but vert interesting stroy about REST and asyncio.",
          "author": "The life!",
          "publicationDate": "2018-08-30T08:57:55.905Z",
          "reviews": [
            {
              "body": "string"
            }
          ]
        }
      ]
    }
  },
  created () {
    // const bookUrl = 'https://demo.api-platform.com/books'
    // axios.get(bookUrl)
    //   .then((res) => {
    //     console.log(res)
    //   })
  }
}
</script>

<style lang="scss" scoped>
.book-list{
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: #F5F5F5;
  ul{
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
      h3{
        margin-top: 8px;
        margin-bottom: 8px;
      }
      p{
        font-size: 13px;;
        text-align: left;
        margin-bottom: 8px;
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

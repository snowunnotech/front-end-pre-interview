<template>
  <div>
    <section>
      <div id="bookAreaHeight" class="bookArea" :getBookList="getBookList" :getGroupList="getGroupList">
          <div class="bookBox" v-for="book in getGroupList[this.count]" :key="book.key" @click="goBookInfo(book.title,book['@id'])">
            <div class="innerBookBox">
              <h3 class="mb-20">{{book.title}}</h3>
              <p class="mb-20">{{book.description}}</p>
              <div class="flex-row">
                <div>by {{book.author}}</div>
                <div>{{book.publicationDate}}</div>
              </div>
            </div>
          </div>
      </div>
      <button @click="increaseHeight()">Load more</button>
    </section>
  </div>
</template>
<script>
// import Vue from 'vue'
import axios from 'axios'
import store from '../store.js'
import { stringify } from 'querystring';
export default {
  components: {
  },
  data() {
    return {
      store,
      count:0,
      height:0,
      bookList :[],
    };
  },

  created() {
    this.callGetBookListApi()
    //this.test()

  },
  mounted(){
    //this.callGetBookListApi()
    
  },
  methods: {
    test(){

      axios.get('https://demo.api-platform.com/books')
        .then(response => {
          console.log('esponse ',response )
          // part= response.data['hydra:member']
          // if(part.length > 1){
          //   part.forEach((item,pos,self)=>{
          //     bookList.push(item)
          //   }) 
          //   this.$store.commit('saveBookList',bookList)   
          // }
      }
      , error => {
        console.log('error msg', error)
      })
     
    },
    callGetBookListApi(){
      let part = []
      let bookList=[]
      for(let i=1 ; i<=10 ; i++){
        let num = JSON.stringify(i)
        let params={ page : num }

        axios.get('https://demo.api-platform.com/books?order[id]=DESC',{params})
          .then(response => {
            
            part= response.data['hydra:member']
            if(part.length > 1){
              part.forEach((item,pos,self)=>{
                bookList.push(item)
              }) 
              this.$store.commit('saveBookList',bookList)   
            }
        }
        , error => {
          console.log('error msg', error)
        })
      }
      if(this.getBookList.length > 1){
        this.makeGroupList(this.getBookList)
      }
    },
    makeGroupList(bookList){
      //轉時間格式，變成yyyy-mm-dd
      let newBookList = bookList.map( (x) => {
        this.$set(x, 'publicationDate',this.$moment(x.publicationDate).format('YYYY-MM-DD') )
        return x
        }
      )
      //六個分一組
      let count = parseInt( newBookList.length/6 )
      let groupBookList =[]
      for (let i=1 ; i <= count ; i++ ) {
        let group = []
        let large = 6 * i -1
        newBookList.forEach((item , pos , self) => {
            if( pos <= (6 * i -1)){
              group.push(item)
            }
          });
          groupBookList.push(group)
      }
      this.$store.commit('saveGroupList',groupBookList)
    },
    increaseHeight(){
      if(this.count < this.getGroupList.length -1){
        this.count = this.count +1
      }else{
        alert("沒東西了")
      }
      //document.getElementById('bookAreaHeight').style.height = "auto "
    },
    goBookInfo(title,id){
      this.$router.push({path: '/bookInfo/:id', query: {id:id}}); 
      this.$store.commit('saveBookId',id) 

    }
  },
  computed:{
    getRunState(){
      return this.$store.state.runState
    },
    getBookList(){
      return this.$store.state.bookList
    },
    getGroupList(){
      return this.$store.state.groupList
    },
         

  }
  
}
</script>
<style lang="scss" scope>
@import '../assets/style/share.scss';
section{
  padding:50px;
  button{
    width:20vw;
    height:6vh;
    background-color:#ffc048;
    color: #ffffff; 
    font-size:20px;
  
  }
  button:hover{
    cursor: pointer;
    box-shadow: 2px 2px 5px #b2bec3;
  }
}
.bookArea{
  @extend .flex-row;
  justify-content: space-between;
  padding: 50px;
  flex-wrap:wrap;
  overflow:hidden;
  margin-bottom: 10px;

}
.bookBox{
  @extend .flex-col;
  justify-content: center;
  align-items: center;
  width:calc((100vw - 260px) /3);
  height:50vh;
  color: #636e72;
  background-color: #ffffff;
  margin-right:30px;
  margin-bottom: 30px;
  padding: 10px;
}
.bookBox:nth-child(3n){
  margin-right:0px;
}
.bookBox:hover{
  box-shadow: 2px 2px 20px #b2bec3;
  cursor: pointer;
}
.innerBookBox{
  @extend .flex-col;
  height:30vh;
  width:25vw;
  text-align: left;
}
</style>

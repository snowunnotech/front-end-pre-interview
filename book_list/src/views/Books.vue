<template>
  <div class="Books">
    <el-row :gutter="20" type="flex">
      <el-col :span="8" v-for="(bookInfo,index) in books" :key="index" @click.native="bookDetail(index)">
        <BookItem  :bookInfo="bookInfo" />
      </el-col>
    </el-row>

  </div>
</template>

<script>
import BookItem from '@/components/BookItem.vue'

export default {
  name: 'Books',
  components: {
    BookItem
  },
  computed:{
    books: function(){
      return this.$store.getters.books
    }
  },
  methods:{
    bookDetail: function(index){
      console.log(index)
      this.$router.push(`books/${index}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.Books{
  width: 100%;
  margin-bottom: 20px;
}
.el-row{
  flex-wrap: wrap;
}
</style>

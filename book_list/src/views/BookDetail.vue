<template>
<div class="BookDetail">
  <el-row :gutter="20" type="flex">
    <el-col :span="4">
      <div>
        Title:
      </div>
    </el-col>
    <el-col >
      <div>
        {{bookDetail.title}}
      </div>
    </el-col>
  </el-row>
  <el-row :gutter="20" type="flex">
    <el-col :span="4">
      <div>
        ISBN:
      </div>
    </el-col>
    <el-col >
      <div>
        {{bookDetail.isbn}}
      </div>
    </el-col>
  </el-row>
  <el-row :gutter="20" type="flex">
    <el-col :span="4">
      <div>
        Description:
      </div>
    </el-col>
    <el-col >
      <div>
        {{bookDetail.description}}
      </div>
    </el-col>
  </el-row>
  <el-row :gutter="20" type="flex">
    <el-col :span="4">
      <div>
        Author:
      </div>
    </el-col>
    <el-col >
      <div>
        {{bookDetail.author}}
      </div>
    </el-col>
  </el-row>
  <el-row :gutter="20" type="flex">
    <el-col :span="4">
      <div>
        Publication Date:
      </div>
    </el-col>
    <el-col >
      <div>
        {{bookDetail.publicationDate}}
      </div>
    </el-col>
  </el-row>
<div v-if="bookDetail.reviews.length > 0">
  <div>
    Review:
  </div>
  <div v-for="review in bookDetail.reviews">
    {{review.body}}
    <el-divider></el-divider>
  </div>
</div>
</div>
</template>

<script>
export default {
  computed: {
    bookDetail: function() {
      let index = this.$route.params.id
      return this.$store.getters.detail(index)
    }
  }
}
</script>

<style lang="scss" scoped>
.BookDetail {
    margin-top: 20px;
}
div {
    line-height: 24px;
    font-size: 18px;
}
</style>

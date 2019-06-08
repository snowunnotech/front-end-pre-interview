<template>
<div class="BookItem">
  <el-card shadow="hover">
    <div slot="header">
      <div class="title">{{bookInfo.title}}</div>
    </div>
    <div class="desctiption">
      {{bookInfo.description}}
    </div>
    <div class="author">
      {{bookInfo.author}}
    </div>
    <div class="publicationDate">
      {{bookInfo.publicationDate}}
    </div>
  </el-card>
</div>
</template>

<script>
export default {
  props: ["bookInfo"],
}
</script>

<style lang="scss" scoped>
.BookItem {
    margin-top: 20px;
    cursor: pointer;
}
.title {
    font-size: 18px;
}
.desctiption {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    font-size: 18px;
    margin-bottom: 20px;
    min-height: 55px;
}

</style>

<template>
<div class="CreateBook">
  <el-form :model="bookInfo" label-width="120px" label-position="left" :rules="rules" ref="bookInfo">
    <el-form-item label="Title" prop="title">
      <el-input v-model="bookInfo.title"></el-input>
    </el-form-item>
    <el-form-item label="Description" prop="description">
      <el-input type="textarea" v-model="bookInfo.description"></el-input>
    </el-form-item>
    <el-form-item label="Author" prop="author">
      <el-input v-model="bookInfo.author"></el-input>
    </el-form-item>
    <el-form-item label="Publication Date" prop="publicationDate">
      <el-date-picker type="date" placeholder="选择日期" v-model="bookInfo.publicationDate" style="width: 100%;"></el-date-picker>
      </el-col>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="inputBook">新增</el-button>
      <el-button @click="resetForm">重置</el-button>
      <el-button @click="cancel">取消</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
import API from '@/js/API.js'

export default {
  data() {
    return {
      bookInfo: {
        title: "",
        description: "",
        author: "",
        publicationDate: ""
      },
      rules: {
        title: [{
          required: true,
          message: '請輸入書名',
          trigger: 'blur'
        }],
        description: [{
          required: true,
          message: '請輸入描述',
          trigger: 'blur'
        }],
        author: [{
          required: true,
          message: '請輸入作者',
          trigger: 'blur'
        }],
        publicationDate: [{
          type: 'date',
          required: true,
          message: '請選擇日期',
          trigger: 'change'
        }]
      }
    }
  },
  methods: {
    inputBook: function() {
      let book = Object.assign({}, this.bookInfo)
      API("POST", "books", book)
        .then(response => {
          console.log(response)
          this.$store.dispatch("getBooks")
          this.continueAddPopup()
        })
        .catch(err => {
          console.log(err)
        })
    },
    cancel: function() {
      this.resetForm()
      this.$router.back()
    },
    resetForm:function() {
      this.$refs["bookInfo"].resetFields();
    },
    continueAddPopup: function() {
      this.$confirm('新增成功，是否繼續新增', '提示', {
        confirmButtonText: '繼續新增',
        cancelButtonText: '取消新增',
        type: 'info'
      }).then(() => {
        this.$refs["bookInfo"].resetFields();
      }).catch(() => {
        this.$router.back()
      });
    },
  }
}
</script>

<style lang="scss" scoped>
.CreateBook {
    margin-top: 20px;
}
</style>

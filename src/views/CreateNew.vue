<template>
  <div>
      <div class="nav d-flex justify-content-between align-items-center">
        <button type="button" class="btn text-white" @click="back">Back</button>
        <button type="button" class="btn text-white" @click="createDetailsBook(temp)">Save</button>
      </div>
      <div class="row container mx-auto">
      <div class="w-75 mx-auto my-4" >
        <form class="form">
            <div>
                <input class="form-control" type="text" name="title" placeholder="title" v-model="temp.title" v-validate="'required'">
                <span class="text-danger" v-if="errors.has('title')">標題必須輸入</span>
            </div>
            <div>
                <input class="form-control" type="text" name="author" placeholder="author" v-model="temp.author" v-validate="'required'">
                <span class="text-danger" v-if="errors.has('author')">作者必須輸入</span>
            </div>
            <div>
                <input class="form-control" type="date" name="publicationDate" placeholder="publicationDate" v-model="temp.publicationDate" v-validate="'required'">
                <span class="text-danger" v-if="errors.has('publicationDate')">日期必須輸入</span>
            </div>
            <div>
                <textarea class="form-control" type="text" name="description" cols="8" placeholder="description" v-model="temp.description" v-validate="'required'"></textarea>
                <span class="text-danger" v-if="errors.has('publicationDate')">敘述必須輸入</span>
            </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      temp: {
        title: '',
        author: '',
        description: '',
        publicationDate: ''
      }
    }
  },
  methods: {
    ...mapActions(['back']),
    createDetailsBook (temp) {
      this.$validator.validate().then((valid) => {
        if (valid) {
          this.$store.dispatch('createDetailsBook', temp)
        }
      })
    }
  }
}
</script>

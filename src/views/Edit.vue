<template>
  <div>
    <div class="nav d-flex justify-content-between align-items-center">
      <button type="button" class="btn text-white" @click="back">Back</button>
      <span class="text-center text-white content d-block w-50">{{tempInfo.title}}</span>
      <button type="button" class="btn text-white" @click="editDetailsBook(tempInfo)">Save</button>
    </div>
    <div class="row container mx-auto">
      <div class="w-75 mx-auto my-4" >
        <form class="form">
          <div>
            <input class="form-control" type="text" name="title" placeholder="title" v-model="tempInfo.title" v-validate="'required'">
            <span class="text-danger" v-if="errors.has('title')">標題必須輸入</span>
          </div>
          <div>
            <input class="form-control" type="text" name="author" placeholder="author" v-model="tempInfo.author" v-validate="'required'">
            <span class="text-danger" v-if="errors.has('author')">作者必須輸入</span>
          </div>
          <div>
            <input class="form-control" type="date" name="publicationDate" placeholder="publicationDate" v-model="str" v-validate="'required'">
            <span class="text-danger" v-if="errors.has('publicationDate')">日期必須輸入</span>
          </div>
          <div>
            <textarea class="form-control" type="text" name="description" cols="8" placeholder="description" v-model="tempInfo.description" v-validate="'required'"></textarea>
            <span class="text-danger" v-if="errors.has('publicationDate')">敘述必須輸入</span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      cId: '',
      str: '',
      tempInfo: []
    }
  },
  methods: {
    ...mapActions(['back']),
    getDetailsBook (id) {
      this.$store.dispatch('getDetailsBook', id)
    },
    editDetailsBook (tempInfo) {
      console.log('BOOKS', tempInfo)
      this.tempInfo.publicationDate = this.convertDate(this.str)
      this.$validator.validate().then((valid) => {
        if (valid) {
          this.$store.dispatch('editDetailsBook', tempInfo)
        }
      })
    },
    convertDate (date) {
      const d = new Date()
      const y = date.substring(0, 4)
      const m = date.substring(5, 7)
      const dt = date.substring(8, 19)
      const hour = (d.getHours() < 10 ? '0' : '') + d.getHours()
      const min = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes()
      const sec = (d.getSeconds() < 10 ? '0' : '') + d.getSeconds()
      const minis = d.getMilliseconds()
      const str = `${y}-${m}-${dt}T${hour}:${min}:${sec}.${minis}Z`
      return str
    }
  },
  computed: {
    ...mapGetters(['detailsBook'])
  },
  created () {
    this.tempInfo = Object.assign({}, this.$store.state.detailsBook)
    this.str = this.tempInfo.publicationDate.substring(0, 10)
    this.cId = this.$route.params.id
    this.getDetailsBook(this.$route.params.id)
  }
}
</script>

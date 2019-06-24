<template>
  <div>
    <div class="nav d-flex justify-content-between align-items-center">
      <button type="button" class="btn text-white" @click="back">Back</button>
      <span class="text-center text-white content d-block w-50">{{detailsBook.title}}</span>
      <button type="button" class="btn text-white" @click="goEdit(detailsBook['@id'])">Edit</button>
    </div>
    <div v-if="detailsBook">
      <div class="container my-4">
      <div class="d-flex justify-content-between align-items-center">
        <span>Author: {{detailsBook.author}}</span>
        <span>{{detailsBook.publicationDate | date}}</span>
      </div >
      <div class="my-2">{{detailsBook.description}}</div>
      </div>
    </div>
    <div v-else>Resource not found</div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
    }
  },
  methods: {
    ...mapActions(['back']),
    getDetailsBook (id) {
      this.$store.dispatch('getDetailsBook', id)
    },
    goEdit (id) {
      this.$router.push(`/edit${id}`)
    },
    back () {
      this.$router.push('/')
    }
  },
  computed: {
    ...mapGetters(['detailsBook'])
  },
  created () {
    this.getDetailsBook(this.$route.params.id)
  }
}
</script>

<style scope>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>

<template>
  <div >
    <loading :active.sync="isLoading" color="#ffc35f"></loading>
    <nav class="nav justify-content-between p-2 mb-5">
      <div class="back-btn nav-link" @click="back()">Back</div>
      <div class="txt nav-link">{{book.title}}</div>
      <router-link class="add-btn nav-link" :to="{path: '/edit', query:{id: book._id}}">Edit</router-link>      
    </nav>

    <div class="container">
      <div class="col-md-8 m-auto">
        <div class="header d-flex justify-content-between">
          <div> Author: {{book.author}}</div>
          <div>{{book.date}}</div>
        </div>
        <div class="body mt-3">
          {{book.content}}
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  created() {
    const id = this.$route.params.id
    this.$store.dispatch('getBook', id)
  },
  // updated() {
  //   const id = this.$route.params.id
  //   this.$store.dispatch('getBook', id)
  // },
  computed: {
    book() {
      return this.$store.state.book
    },
    isLoading() {
      return this.$store.state.isLoading
    }
  },
  methods: {
    back() {
      this.$router.push('/')
    },
  }
}
</script>

<style lang="scss" scope>
  .header {
    color: #8e8e8e;
  }
</style>


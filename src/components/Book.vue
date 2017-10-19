<template>
<div>
  <header>
      <div class="container">
        <div class="row">
          <div class="col-3 col-sm-2 text-left">
            <a href="/">Back</a>
          </div>
          <div class="col-6 col-sm-8 text-center title">
            Debitis et saepe eum sint dolorem delectus.
          </div>
          <div class="col-3 col-sm-2 text-right">
            <a :href="url">Edit</a>
          </div>
        </div>
      </div>
    </header>
    <div class="book container">
      
    <div class="info clearfix">
      <div class="author float-left">Author: Lazaro Yundt</div>
      <div class="date float-right">1986-01-28</div>
    </div>
    <div class="description">
      Inventore sed libero et velit. Suscipit a deserunt laudantium quibusdam enim nostrum. Qui ipsam non ipsum velit reiciendis aperiam.
    </div>
  </div>
    
</div>
  
</template>

<script>
export default {
  name: 'Book',
  data () {
    return {
      msg: 'Book Page',
      url: 'edit/'+this.$route.params.id,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

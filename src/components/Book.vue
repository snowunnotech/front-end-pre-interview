<template>
<div>
  <header>
      <div class="container">
        <div class="row">
          <div class="col-3 col-sm-2 text-left">
            <router-link :to="{path: '/'}">
              Back
            </router-link>
          </div>
          <div class="col-6 col-sm-8 text-center title">
            {{info.title}}
          </div>
          <div class="col-3 col-sm-2 text-right">
            <router-link :to="{path: '/edit/' + info.id}">
              Edit
            </router-link>
          </div>
        </div>
      </div>
  </header>
  <div class="book container">      
    <div class="info clearfix">
      <div class="author float-left">Author: {{info.author}}</div>
      <div class="date float-right">{{pub_date}}</div>
    </div>
    <div class="description">
      {{info.description}}
    </div>
  </div>
</div>
  
</template>

<script>
// 引用 vuex
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Book',
  data () {
    return {
      msg: 'Book Page',
      pub_date: '',
    }
  },
  created(){
    this.$store.dispatch('actionGetBook', this.$route.params.id);
  },
  computed: {
    ...mapGetters({
      info: 'getBook',
    })
  },
  watch: {
    'info':function(val) {
      //this.pub_date = this.$moment(val.publicationDate).format('YYYY/MM/DD');
      this.pub_date = val.publicationDate;
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

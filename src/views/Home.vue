<template>
<div>
  <div class="nav text-white justify-content-end">
    <button type="button" class="btn text-white" @click="goCreate">Create</button>
  </div>
  <div class="container-fluid mx-auto row pt-4">
    <div class="col-md-4 col-sm-6 mb-4" v-for="(item) in filterBooks" :key="item.id">
      <div class="card border-0 box-shadow h-100" @click.prevent="goDetail(item['@id'])">
        <div class="card-body">
          <h5 class="card-title content text-center ">{{ item.title }}</h5>
          <p class="card-text text-left content">{{ item.description }}</p>
          <div class="d-flex justify-content-between mt-4">
            <span class="text content">by {{item.author}}</span>
            <span class="text text-right">{{item.publicationDate | date}}</span>
        </div>
        </div>
      </div>
    </div>
  </div>
  <button type="button" class="btn btn-block w-25 btn-primary text-white my-2 mx-auto" @click="loadBook" v-if="showButton==true">Load More</button>
  <div class="row justify-content-center align-items-center mt-4">
    <Pagination :pages="pagination" @emitPages="getBooks"></Pagination>
  </div>
 
</div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from 'vuex'
import Pagination from '../components/Pagination'
export default {
  data () {
    return {
      listNum: 6,
      showButton: true
    }
  },
  components: {
    Pagination
  },
  methods: {
    ...mapActions(['getBooks', 'goCreate']),
    goDetail (id) {
      this.$router.push(`${id}`)
    },
    loadBook () {
      this.listNum += 6
    }
  },
  computed: {
    ...mapGetters(['pagination']),
    filterBooks () {
      return Array.from(this.$store.state.books).filter((book, index, array) => {
        return index < this.listNum
      })
    }
  },
  watch: {
    listNum : function () {
      if (this.listNum >= this.$store.state.books.length || this.listNum <6) {
        this.showButton = false
      }
    }
  },
  created () {
    this.$store.dispatch('getBooks')
  }
}
</script>

<style scoped>
.nav {
  height: 50px;
  background-color: #eeb313;
}
.text{
  width: 50%;
  font-size: 12px;
  font-style: italic;
}
.card-body{
  padding: 0.5rem;
}

@media (max-width: 576px){
  .col-sm-6{
    padding: 0 10px;
    width: 50%;
  }
}
</style>

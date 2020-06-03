<template>
    <div>
        <div class="container">
            <div class="row mt-4">
                <div class="col-md-6 col-lg-4 mb-4" v-for="(item, index) in showBookList" :key="index">
                    <div class="card cur-poi" @click="getDetail(item['@id'])">
                       <div class="card-image">
                           <i class="fas fa-times fa-3x"></i>
                       </div>
                       <div class="card-body">
                           <p class="card-text">{{ item.description }}</p>
                       </div>
                       <div class="card-foot d-flex justify-content-between">
                           <span class="card-text">by {{item.author}}</span>
                           <span class="card-text">{{ item.publicationDate }}</span>
                       </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col col-sm-8">
                    <div class="d-flex justify-content-center bg-orange mb-5 py-4 books-text cur-poi" @click="LOAD_MORE">
                        Load More
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['showBookList'])
  },
  methods: {
    ...mapActions(['getBooks']),
    ...mapMutations(['LOAD_MORE', 'GET_ID', 'RESET_ID']),
    getDetail (id) {
      this.$router.push(`bookDetail/${id}`)
      this.GET_ID(id)
    }
  },
  created () {
    this.getBooks()
    this.RESET_ID()
  }
}
</script>

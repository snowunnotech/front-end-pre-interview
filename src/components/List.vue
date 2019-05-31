<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container-fluid bg-primary mb-3">
      <ul class="nav d-flex justify-content-end">
        <li class="nav-item">
          <a class="nav-link text-white" @click.prevent="toCreate" href="#">New</a>
        </li>
      </ul>
    </div>
    <div class="container-fluid bg-secondary">
      <div class="row no-gutters">
        <div class="card col-6 col-sm-4 border-0 mb-3 px-0 py-0" v-for="(item, index) in books" :key="index">
          <div class="card-body mx-3" @click="toDetailBook(item)">
            <img src="https://ksassets.timeincuk.net/wp/uploads/sites/55/2019/01/homer-920x584.png" class="card-img-top">
            <h5 class="card-title pt-2">{{ item.title }}</h5>
            <p class="card-text text-left">{{ item.description }}</p>
            <small class="card-text text-muted">{{ new Date(item.publicationDate).toISOString().substring(0, 10) }}</small>
          </div>
        </div>
        <button type="button" class="btn btn-primary btn-lg btn-block py-3 text-white" @click="loadBook" v-if="showButton==true">Load More</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex';

export default {
  name: 'List',
  data() {
    return {
      listNum: 6,
      showButton: true
    }
  },
  created() {
    this.$store.dispatch('getList')
  },
  methods: {
    ...mapActions(['toCreate','toDetailBook']), // 首頁只有 1.新增 與 2.進入原有項目
    loadBook () {
      this.listNum += 6
    }
  },
  computed: {
    ...mapGetters(['isLoading']),
    books() { // 只顯示六個
      return Array.from(this.$store.state.bookList).filter((book, index, array) => {
        return index < this.listNum
      })
    },
  },
  watch: { // 可顯示的數目大於陣列長度
    listNum : function () {
      if (this.listNum>this.$store.state.bookList.length) {
        this.showButton = false
      }
    }
  },
}
</script>

<style lang="css" scoped>
.card-body:hover {
    cursor: pointer;
}
</style>

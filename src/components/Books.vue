<template>
  <div>
    <md-toolbar class="md-warn">
      <h2 class="md-title nav-text" style="flex: 1"></h2>
      <md-button class="nav-text" @click="newhandler">New</md-button>
    </md-toolbar>
    <div id="books">
      <md-layout 
        md-align="center" 
        md-gutter="16">
        <Book
          v-for="(item, index) in showData"
          v-bind:key="index"
          v-bind:id="item.id"
          v-bind:title="item.title"
          v-bind:author="item.author"
          v-bind:publicationDate="item.publicationDate.substr(0,10)"
          v-bind:description="item.description"
          v-on:click.native="detailBook(item.id)"
        ></Book>
      </md-layout>
      <div v-if="!loading">
        <md-button class="md-raised md-warn" @click="loadmorehandler" v-if="nomoredata === -1" ><span id="Bload">Load More</span></md-button>
        <md-button class="md-raised md-warn" v-else disabled><span id="Bload">No More Data</span></md-button>
      </div>
      <div v-else class="spin">
      <md-spinner md-indeterminate class="md-warn"></md-spinner>
    </div>
    </div>
  </div>
</template>

<script>
import Book from './Book'
import axios from 'axios'

export default {
  name: 'Books',
  data () {
    return {
      booksData: [],
      showData: [],
      showLength: 6,
      dataLength: -1,
      nomoredata: -1,
      loading: 1
    }
  },
  components: {
    Book
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      axios.get('https://demo.api-platform.com/books')
      .then(response => {
        this.booksData = response.data['hydra:member']
        this.dataLength = response.data['hydra:member'].length
        this.showData = response.data['hydra:member'].splice(0, this.showLength)
      })
      .catch(e => {
        this.errors.push(e)
      })
      .then(() => { this.loading = 0 })
    },
    detailBook (id) {
      this.$router.push({ name: 'BookDetail', params: { id: id } })
    },
    loadmorehandler () {
      let tmp = 6
      if (this.showLength + 6 >= this.dataLength) {
        tmp = this.dataLength - this.showLength
        this.showLength = this.dataLength
        this.nomoredata = 1
      } else {
        this.showLength += 6
      }
      this.showData = [...this.showData, ...this.booksData.splice(0, tmp)]
    },
    newhandler () {
      this.$router.push({ name: 'AddNewBook' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#books {
  margin: 15px;
}

#Bload {
  color: white;
}

.nav-text {
  color: white; 
}

.spin {
  margin-top: 20px;
}
</style>
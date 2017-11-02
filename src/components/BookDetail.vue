<template>
  <div>
    <md-toolbar class="md-warn">
      <md-button class="nav-text" @click="backhandler">Back</md-button>
      <h2 class="md-title nav-text" style="flex: 1">{{ book.title }}</h2>
      <md-button class="nav-text" @click="edithandler">Edit</md-button>
    </md-toolbar>
    <div class="bookdetail" v-if="ok === 1">
      <md-layout md-align="center" md-gutter="16">
        <md-layout md-flex="70">
          <md-layout md-column md-gutter>
            <md-layout md-flex="10">
              <md-layout md-row>
                <md-layout md-flex="70" md-align="start">
                  <i>{{ 'Author: ' + book.author }}</i> 
                </md-layout>
                <md-layout md-flex="30" md-align="end">
                  <i>{{ book.publicationDate }}</i>
                </md-layout>
              </md-layout>
            </md-layout>
            <md-layout>
              <p><b>{{ book.description }}</b></p>   
            </md-layout>
          </md-layout>
        </md-layout>
      </md-layout>
    </div>
    <div v-else class="spin">
      <md-spinner md-indeterminate class="md-warn"></md-spinner>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'BookDetail',
  data () {
    return {
      book: {},
      ok: -1
    }
  },
  created () {
    this.fetchData(this.$route.params.id)
  },
  methods: {
    fetchData (id) {
      axios.get('https://demo.api-platform.com/books/' + id)
      .then(response => {
        this.book = response.data
        this.book.publicationDate = this.book.publicationDate.substring(0, 10)
        this.ok = 1
      })
      .catch(e => this.errors.push(e))
    },
    backhandler () {
      this.$router.go(-1)
    },
    edithandler () {
      this.$router.push({ name: 'EditBook', params: { id: this.$route.params.id } })
    }
  }
}
</script>
<style scoped>
.bookdetail {
  margin: 20px;
}

.spin {
  margin-top: 20px;
}

.nav-text {
  color: white; 
}
</style>

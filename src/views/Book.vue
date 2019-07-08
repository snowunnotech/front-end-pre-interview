<template>
  <div>
    <my-header title="Book">
      <b-link slot="left" to="/" class="text-white">Back</b-link>
      <b-link slot="right" :to="`/edit?id=${book['@id']}`" class="text-white">Edit</b-link>
    </my-header>
    <div
      v-if="!loaded"
      class="text-center pt-5"
    >
      <b-spinner />
    </div>
    <b-container
      v-else
      class="pt-5 sm-container"
    >
      <h3>{{book.title}}</h3>
      <div class="metadata">
        <div class="author">by {{book.author}}</div>
        <div class="date">{{book.publicationDate}}</div>
      </div>
      <div class="pt-3">{{book.description}}</div>
    </b-container>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue'
import { mapState } from 'vuex'

export default {
  name: 'Book',
  components: {
    MyHeader
  },
  data () {
    return {
      loaded: false,
      book: {}
    }
  },
  computed: {
    ...mapState(['API', 'lists'])
  },
  created () {
    const { id } = this.$route.query
    if (!id) {
      this.alert({
        message: 'No book ID',
        redirect: '/'
      })
      return
    }
    const book = this.lists.find(book => book['@id'] === id)
    if (book) {
      this.book = book
      this.loaded = true
      return
    }
    fetch(`${this.API}/${id}`)
      .then(res => {
        if (res.ok) return res.json()
        else return Promise.reject(new Error(res.statusText))
      })
      .then(res => {
        res.publicationDate = new Date(res.publicationDate).toLocaleDateString()
        this.book = res
        this.loaded = true
      })
      .catch(e => {
        this.alert({
          message: 'Book not found',
          redirect: '/'
        })
      })
  },
  methods: {
    alert (payload) {
      this.$store.commit('alert', payload)
    }
  }
}
</script>

<style lang="scss" scoped>
.metadata {
  display: flex;
  flex-wrap: wrap;
  .author {
    flex: 1 1 0;
    white-space: nowrap;
  }
}
.author, .date {
  font-style: italic;
  color: gray;
}
</style>

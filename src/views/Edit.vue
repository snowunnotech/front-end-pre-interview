<template>
  <div>
    <my-header
      title="Edit book"
    >
      <b-link slot="left" to="/" class="text-white">Back</b-link>
      <b-link slot="right" class="text-white" @click="save">Save</b-link>
    </my-header>
    <b-container class="sm-container pt-5">
      <book-input ref="input" v-model="book"/>
    </b-container>
    <full-loader :loaded="loaded"></full-loader>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import MyHeader from '@/components/MyHeader.vue'
import FullLoader from '@/components/FullLoader.vue'
import BookInput from '@/components/BookInput.vue'
export default {
  name: 'Add',
  components: {
    MyHeader,
    FullLoader,
    BookInput
  },
  data () {
    return {
      loaded: false,
      book: {
        title: '',
        author: '',
        description: '',
        date: ''
      }
    }
  },
  computed: {
    ...mapState(['lists', 'API'])
  },
  created () {
    const { id } = this.$route.query
    if (!id) {
      this.alert({
        message: 'No Book Id',
        redirect: '/'
      })
      return
    }
    const book = this.lists.find(book => book[''])

    if (book) {
      this.loaded = true
      this.book = book
      return
    }

    fetch(`${this.API}/${id}`)
      .then(res => {
        if (res.ok) return res.json()
        else return Promise.reject(new Error(res.statusText))
      })
      .then(res => {
        res.publicationDate = new Date(res.publicationDate)
          .toLocaleDateString()
          .split('/')
          .map(d => (d.length === 1)
            ? '0' + d
            : d
          )
          .join('-')
        this.book = res
      })
      .catch(e => {
        this.alert({
          message: e.message,
          redirect: '/'
        })
      })
      .finally(() => {
        this.loaded = true
      })
  },
  methods: {
    alert (payload) {
      this.$store.commit('alert', payload)
    },
    save () {
      if (!this.$refs.input.allValid) {
        this.$store.commit('alert', {
          message: 'invalid Input'
        })
        return
      }
      this.loaded = false

      const { title, author, description, publicationDate } = this.book
      const id = this.book['@id']

      fetch(`${this.$store.state.API}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/ld+json'
        },
        body: JSON.stringify({
          title,
          author,
          publicationDate: new Date(publicationDate),
          description
        })
      })
        .then(res => {
          if (res.ok) return res.json()
          else return Promise.reject(new Error(res.statusText))
        })
        .then(res => {
          const bookIdx = this.lists.findIndex(book => book['@id'] === id)
          if (bookIdx !== -1) {
            this.$store.commit('updateLists', {
              idx: bookIdx,
              value: res
            })
          }
          this.alert({
            message: 'Successfully change book detail',
            redirect: `/book/?id=${res['@id']}`
          })
        })
        .catch(e => {
          this.alert({
            message: e.message
          })
        })
        .finally(() => {
          this.loaded = true
        })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

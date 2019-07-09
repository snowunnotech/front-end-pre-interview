<template>
  <div>
    <my-header
      title="Add new book"
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
      loaded: true,
      book: {
        title: '',
        author: '',
        description: '',
        publicationDate: ''
      }
    }
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

      fetch(`${this.$store.state.API}/books`, {
        method: 'POST',
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
          this.alert({
            message: 'Successfully create book',
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

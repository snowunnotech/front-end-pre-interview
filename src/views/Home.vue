<template>
  <div>
    <my-header
      title="Book lists"
    >
      <b-link slot="right" to="/add" class="text-white">New</b-link>
    </my-header>
    <b-container class="pt-5">
      <b-row>
        <b-col
          v-for="(li, idx) in lists"
          :key="li['@id']"
          class="mb-2"
          md="6"
          @click="goDetail(li)"
        >
          <b-card
            :title="`#${idx+1} ${li.title}`"
            class="c-card"
            tag="article"
          >
            <b-card-text class="author">
              by {{ li.author }} - {{ li.publicationDate }}
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
      <div
        v-if="loading"
        class="text-center p-3"
      >
        <b-spinner />
      </div>
      <b-button
        v-if="!listEnded"
        variant="info"
        block
        :disabled="loading"
        @click="loadMore"
      >
        Load more
      </b-button>
    </b-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import MyHeader from '@/components/MyHeader.vue'
// @ is an alias to /src
export default {
  name: 'home',
  components: {
    MyHeader
  },
  data () {
    return {
      loading: false
    }
  },
  computed: {
    ...mapState(['lists', 'listEnded'])
  },
  created () {
    if (this.lists.length === 0) {
      this.loadMore()
    }
  },
  methods: {
    loadMore () {
      this.loading = true
      this.$store.dispatch('loadMore')
        .then(() => {
          this.loading = false
        })
        .catch(e => {
          this.$store.commit('alert', { message: e.message })
        })
    },
    goDetail (book) {
      this.$router.push({
        path: '/book',
        query: {
          id: book['@id']
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.c-card {
  height: 100%;
  cursor: pointer;
  &:hover {
    border-color: gray;
  }
  .author {
    font-style: italic;
    color: gray;
  }
}
</style>

<template>
    <div>
        <Alert/>
        <nav class="navbar bg-orange" v-if="$route.name ==='books'">
            <router-link to="/index/addBook" class="ml-auto books-text" @click.native="RESET_ID">New</router-link>
        </nav>
        <nav class="navbar bg-orange" v-if="$route.name === 'bookDetail'">
            <router-link to="/index/books" class="mr-auto books-text" >Back</router-link>
            <div class="books-text">{{ bookDetail.title }}</div>
            <router-link to="/index/addBook" class="ml-auto books-text">Edit</router-link>
        </nav>
        <nav class="navbar bg-orange" v-if="$route.name === 'addBook'">
            <a href="#" class="mr-auto books-text" @click.prevent="$router.go(-1)">Back</a>
            <div class="books-text" v-if="bookDetail">{{ bookDetail.title }}</div>
            <div class="books-text" v-else>Add new book</div>
            <a href="#" class="ml-auto books-text" @click.prevent="addBook()">Save</a>
        </nav>
       <router-view></router-view>
    </div>
</template>

<script>
import { eventBus } from '@/main'
import { mapGetters, mapMutations } from 'vuex'
import Alert from '../components/AlertMessage'

export default {
  components: {
    Alert
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['bookDetail'])
  },
  methods: {
    ...mapMutations(['RESET_ID']),
    addBook () {
      eventBus.$emit('addBook')
    }
  },
  created () {
    eventBus.$emit('message:push', 'test', 'success')
  }
}
</script>

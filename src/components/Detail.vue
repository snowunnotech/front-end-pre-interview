<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container-fluid bg-primary">
      <ul class="nav d-flex justify-content-between">
        <li class="nav-item">
          <a class="nav-link text-white" @click.prevent="backPage" href="#">Back</a>
        </li>
        <li class="nav-item align-self-center text-white">
          {{ book.title }}
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" @click.prevent="getSingleBook" href="#">Edit</a>
        </li>
      </ul>
    </div>
    <div class="container-fluid">
      <div class="d-flex justify-content-between text-muted pt-2">
        <span>{{book.author}}</span>
        <span>{{book.publicationDate}}</span>
      </div>
      <p class="pt-1">
        {{book.description}}
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex'

export default {
  name: 'Detail',
  methods: {
    ...mapActions(['backPage','getSingleBook'])
  },
  computed: {
    ...mapGetters(['book','isLoading']),
  }
}
</script>
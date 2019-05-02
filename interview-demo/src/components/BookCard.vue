<template>
  <div class="row">
    <div class="col-md-4 col-6 mb-4" v-for="book in books" :key="book._id">
      <div class="card p-3">
        <div class="delete mb-3" @click="deleteBook(book._id)">X</div>
          <router-link :to="{name: 'book', params: {id: book._id}}">
              <div class="title">{{book.title}}</div>
              <div class="content">{{book.content}}</div>
              <div class="footer mt-3">
                <span>by {{book.author}}</span>
                <span class="ml-2">
                  <!-- {{book.date}} -->
                  {{book.date.getFullYear()}}-{{book.date.getMonth()+1}}-{{book.date.getDate()}}
                </span>
              </div>
          </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['books'],
  methods: {
    deleteBook(id) {
      this.$store.dispatch('deleteBook', id)
    }
  }
}
</script>

<style lang="scss" scope>
  .card {
    &:hover {
      opacity: .8;
    }
    a {
      color: #8e8e8e;
    }
    .delete {
      font-weight: bold;
      color: #000;
      font-size: 1.5rem;
      text-align: center;
      cursor: pointer;
      transition: transform .5s;
      &:hover {
        transform: scale(1.5);
      }
    }
    .content {
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      max-height: 150px;
    }
    .footer {
      font-style: italic;
    }
  }
</style>


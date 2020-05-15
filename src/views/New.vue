<template>
  <div class="new">
    <nav class="bg d-flex flex-row-reverse justify-content-between">
      <p class="text-white">Save</p>
      <p class="text-white">Add new book</p>
      <router-link class="text-decoration-none text-white" to="/">Back</router-link>
    </nav>
    <form class="d-flex flex-column" method="post" v-on:submit.prevent="onSubmit">
      <input v-model="title" placeholder="Title" required>
      <input v-model="author" placeholder="Author" required>
      <input v-model="description" placeholder="Description" required>
      <input v-model="publicationDate" type="date" required>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<style scoped>
form {
  padding: 50px;
}
</style>>

<script>
import { mapActions } from 'vuex';

const { postData } = mapActions(['postData']);

export default {
  name: 'new',
  data() {
    return {
      isbn: '',
      title: '',
      author: '',
      description: '',
      publicationDate: '',
    };
  },
  computed: {
    body() {
      return {
        isbn: this.isbn,
        title: this.title,
        author: this.author,
        description: this.description,
        publicationDate: this.publicationDate,
      };
    },
  },
  methods: {
    postData,
    onSubmit() {
      this.postData(this.body);
      this.title = '';
      this.author = '';
      this.description = '';
      this.publicationDate = '';
      console.log('submit');
    },
  },
};
</script>

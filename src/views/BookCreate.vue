<template>
  <div>
    <ValidationObserver
      ref="observer"
      tag="form"
      v-slot="{ invalid }"
      @submit.prevent="postBook()"
    >
      <h1>Create an Book</h1>

      <h3>Name & describe your book</h3>

      <validation-provider
        name="title"
        rules="required"
        :bails="false"
        v-slot="{ errors }"
      >
        <div class="field">
          <label for="title">Title</label>
          <input
            name="title"
            v-model="book.title"
            type="text"
            placeholder="Add an book title"
          />
          <span class="text-danger">{{ errors[0] }}</span>
        </div>
      </validation-provider>
      <validation-provider
        name="author"
        rules="required"
        :bails="false"
        v-slot="{ errors }"
      >
        <div class="field">
          <label for="title">author</label>
          <input
            name="author"
            v-model="book.author"
            type="text"
            placeholder="Add book author"
          />
          <span class="text-danger">{{ errors[0] }}</span>
        </div>
      </validation-provider>
      <validation-provider
        name="description"
        rules="required"
        :bails="false"
        v-slot="{ errors }"
      >
        <div class="field">
          <label>Description</label>
          <textarea
            name="description"
            v-model="book.description"
            type="text"
            placeholder="Add a description"
          />
          <span class="text-danger">{{ errors[0] }}</span>
        </div>
      </validation-provider>
      <validation-provider
        name="isbn"
        rules="required"
        :bails="false"
        v-slot="{ errors }"
      >
        <div class="field">
          <label for="title">isbn</label>
          <input
            name="isbn"
            v-model="book.isbn"
            type="string"
            placeholder="Add book isbn"
          />
          <span class="text-danger">{{ errors[0] }}</span>
        </div>
      </validation-provider>
      <h3>When is your book been written?</h3>
      <validation-provider
        name="date"
        rules="required"
        :bails="false"
        v-slot="{ errors }"
      >
        <div class="field">
          <label>Date</label>
          <input
            name="date"
            v-model="book.publicationDate"
            type="string"
            placeholder="Add book publicationDate"
          />
          <span class="text-danger">{{ errors[0] }}</span>
        </div>
      </validation-provider>
      <h3>Review</h3>
      <validation-provider
        name="reviews"
        rules="required"
        :bails="false"
        v-slot="{ errors }"
      >
        <div class="field">
          <label>reviews</label>
          <textarea
            name="reviews"
            v-model="book.reviews.body"
            type="text"
            placeholder="Add reviews"
          />
          <span class="text-danger">{{ errors[0] }}</span>
        </div>
      </validation-provider>
      <button
        class="w-100 bg-secondary text-white py-2 border-none login-submit "
        type="submit"
        name="button"
        :class="invalid ? 'bg-secondary' : 'bg-dark'"
      >
        Submit
      </button>
    </ValidationObserver>
  </div>
</template>

<script>
import BooksService from "@/services/BooksService.js";
export default {
  data() {
    return {
      book: {
        isbn: null,
        title: null,
        description: null,
        author: null,
        publicationDate: null,
        reviews: [
          {
            body: null,
            rating: null,
            author: null,
            publicationDate: null
          }
        ]
      }
    };
  },
  methods: {
    async postBook() {
      const isValid = await this.$refs.observer.validate();
      if (!isValid) {
        return;
      }
      const response = await BooksService.post(this.book);
      console.log(response);
    }
  }
};
</script>

<style lang="scss" scoped>
.field {
  display: flex;
  flex-direction: column;
  margin: 20px auto 20px;
  width: 50%;
}
</style>

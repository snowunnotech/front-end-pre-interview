<template>
  <div class="d-flex flex-column">
    <button
      class="btn btn-dark rounded-0 w-25 align-self-end edit-button"
      @click.prevent="toggleBookEdit"
      v-if="!BookIsBeingEdited"
    >
      <span>
        Edit
      </span>
    </button>
    <div class="align-self-end w-25 d-flex flex-row align-items-end" v-else>
      <button
        class="btn btn-dark rounded-0 flex-fill ml-3 edit-button"
        @click.prevent="toggleBookEdit"
      >
        <span>
          Close
        </span>
      </button>
    </div>
    <div class="py-5 px-3" v-if="!BookIsBeingEdited">
      <div class="event-header">
        <span class="eyebrow">Author: {{ Books.author }}</span>
        <h3 class="title my-3">Name: {{ Books.title }}</h3>

        <h5 class="mt-3">Book's ISBN</h5>
        <p>{{ Books.isbn }}</p>
        <h5>Publish Date: {{ ParseUTC(this.Books.publicationDate) }}</h5>
      </div>

      <h5 class="mt-3">Brief Description</h5>
      <p>{{ Books.description }}</p>
    </div>
    <div v-else>
      <ValidationObserver
        ref="observer"
        tag="form"
        v-slot="{ invalid }"
        @submit.prevent="updateBook()"
      >
        <h1>Update This Book</h1>
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
              v-model="EditDefaultData.author"
              type="text"
              placeholder="Add book author"
            />
            <span class="text-danger">{{ errors[0] }}</span>
          </div>
        </validation-provider>
        <validation-provider
          name="title"
          rules="required"
          :bails="false"
          v-slot="{ errors }"
        >
          <div class="field">
            <label for="title">Name</label>
            <input
              name="title"
              v-model="EditDefaultData.title"
              type="text"
              placeholder="Add an book title"
            />
            <span class="text-danger">{{ errors[0] }}</span>
          </div>
        </validation-provider>

        <validation-provider
          name="isbn"
          rules="isbn"
          :bails="false"
          v-slot="{ errors }"
        >
          <div class="field">
            <label for="title">ISBN</label>
            <input
              name="isbn"
              v-model.lazy="EditDefaultData.isbn"
              type="text"
              placeholder="Add book isbn"
            />
            <span class="text-danger">{{ errors[0] }}</span>
          </div>
        </validation-provider>
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
              v-model="EditDefaultData.publicationDate"
              type="date"
              placeholder="Add book publicationDate"
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
              v-model="EditDefaultData.description"
              type="text"
              placeholder="Add a description"
            />
            <span class="text-danger">{{ errors[0] }}</span>
          </div>
        </validation-provider>
        <button
          class="mt-5 px-4 bg-secondary text-white py-2 border-none login-submit "
          type="submit"
          name="button"
          :class="invalid ? 'bg-secondary' : 'bg-dark'"
        >
          Submit
        </button>
      </ValidationObserver>
    </div>
    <div class="py-5 px-3" v-show="false">
      <div class="event-header">
        <span class="eyebrow"
          ><label for="author">Author:</label>
          <br />
          <input
            class="w-50"
            v-model.lazy="EditDefaultData.author"
            type="text"
            name="author"
            placeholder="Bryan"
            value
        /></span>
        <h3 class="title my-3">
          <label for="title">Name:</label>
        </h3>
        <input
          class="w-50"
          v-model.lazy="EditDefaultData.title"
          type="text"
          name="title"
          placeholder="secret"
          value
        />
        <h5 class="title my-3">
          <label for="date">Publish Date:</label>
        </h5>
        <input
          class="w-50"
          v-model.lazy="EditDefaultData.publicationDate"
          type="date"
          name="date"
          placeholder="12/13/2001"
          value
        />
      </div>

      <h5 class="mt-3"><label for="Description">Brief Description:</label></h5>
      <textarea
        class="w-50"
        v-model.lazy="EditDefaultData.description"
        type="text"
        name="Description"
        placeholder="Book Description"
        value
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BooksService from "@/services/BooksService.js";
export default {
  data() {
    return {
      Books: null,
      EditDefaultData: {},
      BookIsBeingEdited: false
    };
  },
  props: {
    BookId: String
  },
  methods: {
    ParseUTC(unparseDate) {
      let splitedUTC = String(unparseDate).split("-");
      return `${splitedUTC[0]}-${splitedUTC[1]}-${splitedUTC[2].split("T")[0]}`;
    },
    EditDefault() {
      this.EditDefaultData = JSON.parse(JSON.stringify(this.Books));
      this.EditDefaultData.publicationDate = this.ParseUTC(
        this.EditDefaultData.publicationDate
      );
    },
    toggleBookEdit() {
      this.BookIsBeingEdited = !this.BookIsBeingEdited;
      this.EditDefault();
    },
    async updateBook() {
      const isValid = await this.$refs.observer.validate();
      if (!isValid) {
        return;
      }
      const UpdateBook = JSON.parse(JSON.stringify(this.EditDefaultData));
      UpdateBook.publicationDate = `${UpdateBook.publicationDate}T00:00:00.000Z`;
      const Id = UpdateBook["@id"].split("/")[2];
      const { reviews, ...UpdateBooNoReviews } = UpdateBook;
      console.log(reviews);
      const response = await BooksService.update(Id, UpdateBooNoReviews);
      if (response.status == 200) {
        const search = await BooksService.index(Id);
        console.log(search);
        if (search.status == 200) {
          this.$store.dispatch("books/setBooks", [search.data]);
          const getIdBook = this.getBooksByID(search.data["@id"]);
          this.Books = getIdBook;
          this.toggleBookEdit();
        }
      }
    }
  },
  computed: {
    ...mapGetters("books", ["getBooksByISBN", "getBooksByID"])
  },
  created() {
    this.Books = this.getBooksByID(this.BookId);
  }
};
</script>

<style lang="scss" scoped>
.location {
  margin-bottom: 0;
}
.location > .icon {
  margin-left: 10px;
}
.event-header > .title {
  margin: 0;
}
.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list-group > .list-item {
  padding: 1em 0;
  border-bottom: solid 1px #e5e5e5;
}
.edit-button {
  position: sticky;
}
.field {
  margin: 25px 0;
}
</style>

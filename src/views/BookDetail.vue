<template>
  <div class="d-flex flex-column theme-background">
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
        <h4 class="title my-3">Book Name: {{ Books.title }}</h4>

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
              v-model="EditForm.author"
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
              v-model="EditForm.title"
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
              v-model.lazy="EditForm.isbn"
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
              v-model="EditForm.publicationDate"
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
              v-model="EditForm.description"
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
            v-model.lazy="EditForm.author"
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
          v-model.lazy="EditForm.title"
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
          v-model.lazy="EditForm.publicationDate"
          type="date"
          name="date"
          placeholder="12/13/2001"
          value
        />
      </div>

      <h5 class="mt-3"><label for="Description">Brief Description:</label></h5>
      <textarea
        class="w-50"
        v-model.lazy="EditForm.description"
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
export default {
  data() {
    return {
      Books: null,
      EditForm: {},
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
      this.EditForm = JSON.parse(JSON.stringify(this.Books));
      this.EditForm.publicationDate = this.ParseUTC(
        this.EditForm.publicationDate
      );
    },
    toggleBookEdit() {
      this.BookIsBeingEdited = !this.BookIsBeingEdited;
      if (this.BookIsBeingEdited) {
        this.EditDefault();
      }
    },
    async updateBook() {
      const isValid = await this.$refs.observer.validate();
      if (!isValid) {
        return;
      }
      await this.$store.dispatch("books/PatchBooksApi", this.EditForm);
      this.toggleBookEdit();
    }
  },
  computed: {
    ...mapGetters("books", ["getBooksByISBN", "getBooksByID"]),
    getBook() {
      return this.getBooksByID(this.BookId);
    }
  },
  created() {
    this.Books = this.getBook;
  },
  watch: {
    getBook() {
      this.Books = this.getBook;
    }
  }
};
</script>

<style lang="scss">
.theme-background {
  background-color: #e3aaaa55;
}
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

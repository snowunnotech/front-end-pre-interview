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
    <div class="align-self-end w-50 d-flex flex-row align-items-end" v-else>
      <button
        class="btn btn-dark rounded-0 flex-fill edit-button"
        @click.prevent="toggleBookEdit"
      >
        <span>
          Submit Edit
        </span>
      </button>
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
        <h5>Publish Date: {{ ParseUTC() }}</h5>
      </div>

      <h5 class="mt-3">Brief Description</h5>
      <p>{{ Books.description }}</p>

      <ul class="list-group mt-5">
        <h3>Readers Review</h3>
        <li
          v-for="(review, index) in Books.reviews"
          :key="index"
          class="list-item"
        >
          <b>{{ review.body }}</b>
        </li>
      </ul>
    </div>
    <div class="py-5 px-3" v-else>
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
          type="string"
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

      <ul class="list-group mt-5">
        <h3>Readers Review</h3>
        <li
          v-for="(review, index) in EditDefaultData.reviews"
          :key="index"
          class="list-item"
        >
          <textarea
            name="reviews"
            v-model="review.body"
            :id="index"
            cols="80"
            rows="3"
          >
          </textarea>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
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
    ParseUTC() {
      let prasedUTC = new Date(this.Books.publicationDate);
      let splitedUTC = String(prasedUTC).split(" ");
      return `${splitedUTC[3]} ${splitedUTC[1]} ${splitedUTC[2]}`;
    },
    EditDefault() {
      this.EditDefaultData = JSON.parse(JSON.stringify(this.Books));
    },
    toggleBookEdit() {
      this.BookIsBeingEdited = !this.BookIsBeingEdited;
      this.EditDefault();
    }
  },
  computed: {
    ...mapGetters("books", ["getBooksByISBN"])
  },
  created() {
    this.Books = this.getBooksByISBN(this.BookId);
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
</style>

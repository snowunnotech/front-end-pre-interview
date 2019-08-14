<template>
  <div v-if="bookInfos" class="book-card">
    <div class="book-card__header">
      <h3 class="book-card__heading">{{ bookInfos.title }}</h3>
    </div>
    <div class="book-card__body">
      <p>
        <span class="book-card__body__highlight">ISBN:</span>
        {{ bookInfos.isbn || '-' }}
      </p>
      <p>
        <span class="book-card__body__highlight">Author:</span>
        {{ bookInfos.author }}
      </p>
      <p>
        <span class="book-card__body__highlight">Description:</span>
        {{ bookInfos.description }}
      </p>
      <p>
        <span class="book-card__body__highlight">Publication Date:</span>
        {{ bookInfos.publicationDate | dateFormat }}
      </p>
    </div>
    <div class="book-card__footer">
      <button
        class="book-card__button"
        @click="() => handleClick('books-detail')"
      >detail
      </button>
      <button
        class="book-card__button"
        @click="() => handleClick('books-edit')"
      >edit
      </button>
    </div>
  </div>
</template>

<script>
import dateFormat from '@/vue-utils/filters/dateFormat';

export default {
  filters: { dateFormat },
  props: {
    bookInfos: {
      type: Object,
      default: null
    }
  },
  methods: {
    handleClick(routeName) {
      const { $router, bookInfos } = this;
      $router.push({
        name: routeName,
        params: {
          id: bookInfos['@id'].replace('/books/', ''),
          bookInfosByRoute: bookInfos
        }
      });
    }
  }
};
</script>

<style lang="scss">
.book-card {
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, .1);
  &__header {
    border-bottom: 1px solid #ccc;
    font-size: 20px;
    font-weight: bold;
  }
  &__heading {
    max-width: 300px;
    padding: 10px;
    overflow:hidden;
    text-overflow: ellipsis;
  }
  &__body {
    padding: 20px;
    flex: auto;
    &__highlight {
      color: seagreen;
      font-size: 18px;
      font-weight: bold;
    }
    > * {
      margin-bottom: 10px;
      letter-spacing: .3px;
      line-height: 1.2;
    }
  }
  &__header,
  &__footer {
    text-align: center;
  }
  &__footer {
    padding: 10px 0;
  }
  &__button {
    padding: 5px;
    & + & {
      margin-left: 10px;
    }
  }
}
</style>

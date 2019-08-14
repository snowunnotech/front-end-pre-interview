<template>
  <ul class="pagination">
    <li
      v-for="pageNum of totalPage"
      :key="pageNum"
      :class="{
        pagination__item: true,
        'pagination__item--active': value === pageNum
      }"
      @click="() => $emit('input', pageNum)"
    >
      {{ pageNum }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    perPage: {
      type: Number,
      default: 30
    },
    total: {
      type: Number,
      default: 0
    },
    value: {
      type: Number,
      default: 1
    }
  },
  computed: {
    totalPage() {
      return Math.ceil(this.total / this.perPage);
    }
  }
};
</script>

<style lang="scss">
  .pagination {
    display: flex;
    margin: 0;
    padding: 0;
    overflow: hidden;
    &__item {
      cursor: pointer;
      padding: 10px 20px;
      border: 1px solid #ccc;
      &--active {
        border-color: seagreen;
        background: seagreen;
        color: white;
      }
      &:first-child {
        border-radius: 4px 0 0 4px;
      }
      &:last-child {
        border-radius: 0 4px 4px 0;
      }
      &:not(:last-child) {
        border-right: none;
      }
    }
  }
</style>

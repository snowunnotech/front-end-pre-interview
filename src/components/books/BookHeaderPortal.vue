<template>
  <portal to="header">
    <router-link class="header__portal__left" to="/">back</router-link>
    <router-link class="header__portal__center" to="/new">{{ bookTitle }}</router-link>
  </portal>
</template>

<script>
export default {
  props: {
    bookTitle: {
      type: String,
      default: ''
    }
  }
};
</script>

<template>
  <b-navbar class="c-navbar" variant="primary">
    <div class="c-navbar-title" v-if="navbarTitle">
      <span class="u-textHideExtra">{{ navbarTitle }}</span>
    </div>

    <b-navbar-nav class="c-navbar-list">
      <b-nav-item
        class="mr-auto"
        href="#"
        key="back"
        @click.prevent="goBack"
        v-if="navbarFeatures.back"
      >Back</b-nav-item>

      <b-nav-item class="ml-auto" to="/edit/new" key="add" v-if="navbarFeatures.add">New</b-nav-item>
      <b-nav-item
        class="ml-auto"
        :to="`/edit/${this.$route.params.id}`"
        key="edit"
        v-if="navbarFeatures.edit"
      >Edit</b-nav-item>
      <b-nav-item
        class="ml-auto"
        href="#"
        key="save"
        @click.prevent="saveBook"
        v-if="navbarFeatures.save"
      >Save</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  computed: {
    navbarFeatures() {
      return this.$store.state.navbar.features;
    },
    navbarTitle() {
      return this.$store.state.navbar.title;
    }
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    saveBook() {
      this.$store.commit("books/ISSENDBOOK", true);
    }
  }
};
</script>

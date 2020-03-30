<template>
  <div>
    <Navbar />
    <div class="my-3">
      <nuxt />
    </div>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";

export default {
  middleware: ["setNavbar"],
  components: {
    Navbar
  }
};
</script>

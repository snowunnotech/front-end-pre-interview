<template>
  <div id="app" class="mx-auto">
    <router-view/>
  </div>
</template>

<style>
#app {
  width: 900px;
}

nav {
  height: 50px;
  padding: 10px;
}

.bg {
  background-color: #f39c12;
}
</style>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'app',
  created() {
    this.getData();
  },
  methods: {
    ...mapActions([
      'getData',
    ]),
  },
};
</script>

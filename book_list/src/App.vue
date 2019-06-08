<template>
<div class="">
  <header>
    <nav>
      Books List
    </nav>
  </header>
  <div id="app">
    <router-view/>
    <button @click="toAddPage" class="newBookButton"> + </button>
  </div>
</div>
</template>
<script>
import reset from '@/css/reset.scss'
import API from '@/js/API.js'
export default {
  methods: {
    toAddPage: function() {
      this.$router.push("/CreateBook")
    }
  },
  mounted() {
    this.$store.dispatch("getBooks")
  }
}
</script>
<style lang="scss">
header {
    height: 60px;
    background-color: #03a9f4;
}
#app,
nav {
    width: 996px;
    margin: 0 auto;

}
nav {
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 36px;
    color: #fff;
}
.newBookButton {
    height: 40px;
    width: 40px;
    line-height: 40px;
    border-radius: 50%;
    border: 0;
    color: #fff;
    font-size: 36px;
    background-color: #03a9f4;
    position: fixed;
    top: 90vh;
    right: calc((100% - 996px) / 2);
    cursor: pointer;
}
</style>

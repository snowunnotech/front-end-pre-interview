<template>
  <div id="nav" class="nav">
    <div><router-link :to="{ name: 'BookList' }">BookList</router-link></div>
    <div>
      <router-link :to="{ name: 'BookCreate' }">Create Book</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  background-color: #ccc;
}

.nav .nav-item.router-link-exact-active {
  color: #39b982;
  border-bottom: solid 2px #39b982;
}
</style>

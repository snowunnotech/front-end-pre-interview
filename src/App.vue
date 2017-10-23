<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  background: #f5f5f5;
}
a:hover,
a:focus {
  text-decoration: none;
}
header {
  background: #fec267;
  color: #fff;
  font-size: 1.5em;
  margin-bottom: 15px;
  padding: 15px;
}
header a {
  color: #fff;
}
header a:hover,
header a:focus {
  color: #fff;
  text-shadow: 2px 2px 2px rgba(0,0,0,0.1);
}
header .title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow : ellipsis;
}
.is-danger {
  border-color: #f00;
  color: #f00;
}
</style>

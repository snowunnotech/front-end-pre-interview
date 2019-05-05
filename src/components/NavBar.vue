<template>
  <nav>
    <slot></slot>
  </nav>
</template>

<script>
export default {
  name: 'navBar'
}
</script>

<style>
nav {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 50px;
  padding: 0px 20px;
  color: #fff;
  background-color: rgb(247,196,112);
}

button {
  color: #fff;
  font-size: 1.2em;
  background-color: rgb(247,196,112);
  border: 0px;
}
</style>

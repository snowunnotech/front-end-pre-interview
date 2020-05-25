<template>
  <nav class="navbar navbar-expand-lg bg-main">
    <slot></slot>
  </nav>
</template>


<style lang="scss" scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    height: 56px;
  }
</style>

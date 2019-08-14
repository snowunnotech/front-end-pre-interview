<template>
  <div class="loading">🐛</div>
</template>

<style lang="scss">
  @keyframes spin {
    100% { transform:rotate(360deg); }
  }
  .loading {
    width: 100%;
    text-align: center;
    font-size: 80px;
    animation: spin 1.5s linear infinite;
  }
</style>

<template>
  <div id="app">
    <header class="header">
      <portal-target class="header__portal" name="header" />
    </header>
    <main class="main-content">
      <router-view v-if="!$store.state.books.loading" />
      <div v-else>loading...</div>
    </main>
  </div>
</template>

<style lang="scss">
  .mb-s {
    margin-bottom: 20px;
  }
  .main-title {
    color: #222;
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
  }
  .header {
    position: fixed;
    width: 100%;
    background: seagreen;
    color: white;
    &__portal {
      display: flex;
      padding: 0 40px;
      align-items: center;
      height: 60px;
      * {
        color: inherit;
        font-size: 20px;
        font-weight: bold;
        text-decoration: none;
      }
      &__center {
        margin: auto;
        transform: translateX(-50%);
      }
      &__right {
        margin-left: auto;
      }
    }
  }
  .main-content {
    padding: 90px 20px 40px;
    max-width: 950px;
    margin: 0 auto;
  }
</style>

<template>
  <div class="nav">
    <span 
      v-show="showNavTitle"
      class="nav-item nav-text" >
      {{ navbarText }}
      </span>
    <span class="nav-item nav-text" >{{ navbarText }}</span>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      showNavTitle: this.$route.meta.navBarTitle,
      navbarText: this.$route.meta.navbarText,
      navbarTitle: this.$route.meta.title
    }
  },
watch: {
    '$route.meta': {
        handler(newValue) {
          this.showNavTitle = newValue.navBarTitle
          this.navbarText = newValue.navbarText
          this.navbarTitle = newValue.title
        },
        immediate: true,
        deep: true
    }
}
}
</script>

<style lang="less" scoped>
.nav {
  background-color: #FFC35F;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .nav-item {
    margin: 0 8vw;
  }

  .nav-text {
    color: #FFF;
    text-decoration: none;
  }
}
</style>>
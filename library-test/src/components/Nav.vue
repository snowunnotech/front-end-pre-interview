<template>
  <div class="nav">
    <span class="nav-item nav-text" 
    @click="goPage('Back')">Back</span>
    <span 
      v-show="showNavTitle"
      class="nav-item nav-text" >
      {{ navbarTitle }}
      </span>
    <span class="nav-item nav-text" 
    @click="goPage(navbarText)">{{ navbarText }}</span>
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
  methods: {
    goPage (target) {
      switch(target) {
        case 'Edit':
          const id = this.$route.params.id
          this.$router.push({ name: 'bookEdit', params: { id } })
          break;
        case 'New':
          this.$router.push({ name: 'bookCreate'})
          break;
        case 'Back':
          history.back()
          break;
      }

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
    },
    '$route.meta.title': {
      handler(newValue) {
          this.navbarTitle = newValue
        },
        immediate: true,
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
    cursor: pointer;
    color: #FFF;
    text-decoration: none;
  }
}
</style>>
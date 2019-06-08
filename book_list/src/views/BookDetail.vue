<template>
<div class="BookDetail">
  {{details}}
</div>
</template>

<script>
export default {
  computed: {
    details: function() {
      let index = this.$route.params.id
      return this.$store.getters.detail(index)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

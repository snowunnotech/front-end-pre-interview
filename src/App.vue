<template>
  <div id="app">
    <router-view/>
    <footer/>
    <b-modal v-model="$store.state.modal.open" ok-only>
      {{ $store.state.modal.message }}
    </b-modal>
  </div>
</template>

<script>
export default {
  computed: {
  },
  mounted () {
    this.$root.$on('bv::modal::hide', () => {
      const { redirect } = this.$store.state.modal
      if (redirect) {
        this.$router.push(redirect)
      }
    })
  }
}
</script>

<style lang="scss">
footer {
  height: 3rem;
}
</style>

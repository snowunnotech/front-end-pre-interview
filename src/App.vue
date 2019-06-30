<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters} from 'vuex'
export default {
  name: 'App',
  methods:{
        ...mapActions(['LoadBook']),
    },
  created(){
    this.$store.dispatch('LoadBook')
}}
</script>

<style lang='sass'>

#app 
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  


</style>

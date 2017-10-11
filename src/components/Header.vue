<template>
    <header>
        <router-link :to="leftTo">
          <p>{{changeHeader.left}}</p>
        </router-link>

        <h1>{{changeHeader.title}}</h1>

        <router-link :to="rightTo">
          <p>{{changeHeader.right}}</p>
        </router-link>
    </header>
</template>
<style lang="sass" scoped>
$margin: 10px
header
  height: 60px
  background-color: #FFC35F
  display: flex
  flex-flow: row no-wrap
  justify-content: space-between
  align-items: center
  h1
    width: 50%
    font-size: 2em
    text-overflow: ellipsis
    overflow: hidden
    white-space: nowrap
  p
    font-size: 1.2em

a
  text-decoration: none
  color: black
</style>
<script>
	export default{
		computed:{
			changeHeader(){
				return this.$store.state.headerNav
			},
      leftTo(){
        if(this.$store.state.headerNav.left == 'BACK'){
          return '/'
        }else{
          return " "
        }
      },
      rightTo(){
        switch(this.$store.state.headerNav.right){
          case 'ADD':
            return '/add';
          case 'EDIT':
            return '/add';
          case ' ':
            return ' '
        }
      },
		},
	}
</script>
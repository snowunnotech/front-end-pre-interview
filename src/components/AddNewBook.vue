<template>
    <div>
      <input type="text" placeholder="Title..." v-model="justInput.title">
	  <input type="text" placeholder="Author..." v-model="justInput.author">
	  <input type="text" placeholder="Number" v-model="justInput.number">
	  <input type="text" placeholder="Created at..." v-model="justInput.publicationDate">
	  <textarea name="descript" id="descript" placeholder="description" v-model="justInput.description"></textarea>
	  <button @click="putYour()">ADD</button>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				justInput:{
					title: "",
					number: "",
					author: "",
					publicationDate: "",
					description: "",
				}
			}
		},
		methods:{
			putYour(){
				let INPUTVALUE = this.justInput
				this.$store.dispatch('actionPutBooks',INPUTVALUE,INPUTVALUE.number)
			}
		},
		created(){
			this.$store.commit('ADDHEAD')
		}
	}
</script>
<style lang="sass" scoped>
input
  width: 100%
  height: 30px
  background-color: rgba(255,255,255,.5)
  border-radius: 5px
  margin: 10px
textarea
  width: 100%
  height: 60px
  margin: 10px
  border: none
  background-color: rgba(255,255,255,.5)

button
  margin: 10px
  padding: 10px
  border-radius: 5px
  width: 95%
  border: none
  background-color: #FFC35F
  transition: transform .5s
  &:hover
    transform: scale(1.01)
  &:active,:focus
    transform: scale(0.99)
</style>
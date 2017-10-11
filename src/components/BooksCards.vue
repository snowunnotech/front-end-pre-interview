<template>
<div>
    <div id="loading">
    <section class="cards" v-for="book in getBooks" @click="getDetail(book)">
        <router-link to="/detail"><h1>{{book["title"]}}</h1></router-link>
        <p>{{book["description"]}}</p>
        <span>by {{book["author"]}}, {{book["publicationDate"].slice(0,10)}}</span>
    </section>
    </div>
    <button v-show="this.$store.state.bookNum < 30" id="load_button" @click="loadMore()">LOAD MORE</button>
</div>
</template>
<script>
export default {
    methods: {
        getDetail(self) {
            this.$store.commit('GETDETAIL', self)
        },
        loadMore(){
          this.$store.commit('GETMORE')
        }
    },
    computed: {
        getBooks() {
            return this.$store.state.showingbooks
        },
    },
    created() {
        this.$store.dispatch('actionGetBooks')
        this.$store.commit('BACKHOMEHEAD')
    }
}
</script>
<style lang="sass" scoped>
$margin: 10px
a
  text-decoration: none
  color: darken(#FFC35F,10%)
.cards
  position: relative
  background-color: white
  width: calc(100%/2 - #{$margin}*2)
  margin: 10px $margin/2
  padding: $margin/2
  transition: all .3s
  h1
    font-weight: 700
    font-size: 1.5em
    padding: $margin 0
    &:hover
      color: #FFC35F
  p
    padding: $margin*2 0
  span
    position: absolute
    display: block
    font-style: italic
    bottom: 0
    right: 0

#loading
  &:empty
    display: block
    margin: 50px
    width: 70px
    height: 70px
    animation: gradient 1s linear infinite

#load_button
  margin: $margin*2 0
  padding: $margin
  border-radius: 5px
  width: 95%
  border: none
  background-color: #FFC35F
  transition: transform .5s
  &:hover
    transform: scale(1.05)
  &:active,:focus
    transform: scale(0.95)

@keyframes gradient
  0%
    background-image: linear-gradient(to top, #9890e3 0%, #b1f4cf 100%)
    transform: rotate(120deg)
  50%
    background-image: linear-gradient(240deg, #FFC35F 0%, #9890e3 100%)
    transform: rotate(240deg)
  100%
    background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%)
    transform: rotate(360deg)
</style>
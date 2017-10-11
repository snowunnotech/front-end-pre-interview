<template>
  <div id="app">
    <app-header></app-header>
    <div class="main">
     <transition name="slide" mode="out-in">
      <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import appHeader from "./components/Header.vue"

export default {
  name: 'app',
  components: {
    appHeader,
  },
}
</script>

<style lang="sass">
$margin: 10px

#app
  font-family: 'Microsoft JhengHei'
  text-align: center
  background-color: #F5F5F5
  width: 100%
  height: 100%
  min-height: 100%
  font-size: 16px
  .main
    div
      display: flex
      flex-flow: row wrap
      justify-content: center

.slide-enter-active
    animation: slide-in .2s ease-out forwards

.slide-leave-active
    animation: slide-out .3s ease-out forwards

@keyframes slide-in
  from
    transform: translateY(20px)
    opacity: 0
  to
    transform: translateY(0)
    opacity: 1

@keyframes slide-out
  from
    transform: translateY(0)
    opacity: 1
  to
    transform: translateY(20px)
    opacity: 0
</style>

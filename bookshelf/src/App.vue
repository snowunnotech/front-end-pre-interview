<template>
  <div id="app">
    <Bar/>
    <transition name="fade" mode="out-in">
      <router-view class="view" />
    </transition>
  </div>
</template>

<script>
import Bar from '@/components/Bar'

export default {
  name: 'App',
  components: {
    Bar
  }
}
</script>

<style lang="scss">
*, *:before, *:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  --primary: #FEC068;
  --light: #999;
}
body {
  background: #F5F5F5;
  line-height: 1;
}
button {
  outline: none;
}
.view {
  --view-w: 1200px;

  max-width: var(--view-w);
  margin: 15px auto 0;
  padding: 0 10px;
}

/**
 * Transitions
 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.list-enter-active,
.list-leave-active {
  --delay: 0s;
  transition: all .3s var(--delay);
}
.list-enter,
.list-leave-to {
  opacity: 0;
}
.list-enter {
  transform: translateY(20px);
}
</style>

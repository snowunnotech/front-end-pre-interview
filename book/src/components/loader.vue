<template>
  <transition name="fade">
    <div
      v-if="showLoader"
      class="loader"
    >
      <half-circle-spinner
        :animation-duration="1000"
        :size="60"
        :color="'#ffc360'"
        class="loader__effect"
      />
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex'

import { HalfCircleSpinner } from 'epic-spinners'

export default {
  name: 'Loader',
  components: {
    HalfCircleSpinner
  },
  computed: {
    ...mapState({
      showLoader: state => state.showLoader
    })
  }
}
</script>

<style lang="scss" scoped>
    .loader{
        position: fixed;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        background: rgba(255,255,255,.75);
        &__effect{
            @include translate-center;
        }
    }

    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
      opacity: 0;
    }
</style>

<template>
    <div>
        <div class="message-alert">
            <div class="alert alert-dismissible" :class="'alert-' + item.status" v-for="(item, index) in message" :key="index">
                {{ item.message }}
                <button type="button" class="close" @click="removeMessage(index)" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
    }
  },
  methods: {
    ...mapActions(['removeMessage'])
  },
  computed: {
    ...mapGetters(['message'])
  }
}
</script>

<style lang="sass" scoped>
.message-alert
    position: fixed
    bottom: 30px
    left: 20px
    max-width: 50%
    z-index: 999
</style>

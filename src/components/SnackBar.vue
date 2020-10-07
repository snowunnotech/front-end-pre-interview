<template>
    <v-snackbar
      v-model="snackbar"
      :bottom="bottom"
      :left="x === 'left'"
      :multi-line="mode === 'multi-line'"
      :right="x === 'right'"
      :timeout="timeout"
      :vertical="mode === 'vertical'"
    >
      {{ text }}
      <v-btn
        color="orange lighten-3"
        flat
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
</template>

<script>
import { bus } from '@/main'

export default {
    data () {
      return {
        snackbar: false,
        bottom: true,
        y: 'top',
        x: null,
        mode: '',
        timeout: 8000,
        text: ''
      }
    },
    created() {
        bus.$on('showSnackBar', (text) => {
            this.text = text
            this.snackbar = true
        })
    }
}
</script>

<style>

</style>



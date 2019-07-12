<template>
  <v-app>
    <SnackBar/>
    <Toolbar/>
    <v-content class="grey lighten-4">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import SnackBar from '@/components/SnackBar'
import Toolbar from '@/components/Toolbar'

export default {
  name: 'App',
  components: {
    SnackBar,
    Toolbar
  },
  data () {
    return {
      //
    }
  }
}
</script>

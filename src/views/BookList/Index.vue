<template>
  <div>
    <ListNavBar/>
    <BookLists/>
    <LoadButton/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ListNavBar from './components/ListNavBar.vue';
import BookLists from './components/BookLists.vue';
import LoadButton from './components/LoadButton.vue';

@Component({
  components: {
    ListNavBar,
    BookLists,
    LoadButton,
  },
})
export default class BookList extends Vue {
}
</script>

<style lang="scss" scoped>
</style>

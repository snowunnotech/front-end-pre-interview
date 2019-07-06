<template>
  <div>
    <BookDetail/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import BookDetail from '@/views/BookDetail/components/BookDetail.vue';

@Component({
  components: {
    BookDetail,
  },
})
export default class BookDetailView extends Vue {
}
</script>

<style lang="scss" scoped>

</style>

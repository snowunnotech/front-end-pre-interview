<template>
  <div class="wrapper">
    <nav-bar :leftButton="leftButton" :rightButton="rightButton" :title="bookInfo.title"/>
    <div class="content">
      <div class="info">
        <div>Author: {{bookInfo.author}}</div>
        <div>{{bookInfo.publicationDate}}</div>
      </div>
      <p>{{bookInfo.description}}</p>
    </div>
  </div>
</template>

<script>
import NavBar from './Nav.vue';
import { createNamespacedHelpers } from 'vuex';
const { mapActions, mapState } = createNamespacedHelpers('book');

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      rightButton: {
        text: 'Edit',
        click: () => {
          this.$router.push(`/edit/${this.$route.params.id}`);
        }
      },
      leftButton: {
        text: 'Back',
        click: () => {
          this.$router.back();
        }
      },
    };
  },
  computed: {
    ...mapState({
      bookInfo: state => state.bookInfo,
      currentBookId: state => state.currentBookId,
    }),
  },
  methods: {
    ...mapActions({
      getBookInfo(dispath) {
        dispath('getBookInfo', this.$route.params.id);
      }
    }),
  },
  mounted() {
    if (this.currentBookId !== this.$route.params.id)
      this.getBookInfo();
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100%;
}
.content {
  padding: 80px 20px 20px 20px;
  background-color: rgba($color: grey, $alpha: 0.2);
  height: 100%;
}
.info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
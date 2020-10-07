<template>
  <div class="wrapper">
    <nav-bar :leftButton="leftButton" :rightButton="rightButton" :title="'Edit book'"/>
    <div class="content">
      <input placeholder="Author" v-model="bookInfo.author"/>
      <input placeholder="Created at" v-model="bookInfo.publicationDate"/>
      <textarea v-model="bookInfo.description"/>
    </div>
  </div>
</template>

<script>
import NavBar from './Nav.vue';
import { createNamespacedHelpers } from 'vuex';
const { mapMutations, mapState } = createNamespacedHelpers('book');

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      rightButton: {
        text: 'Save',
        click: () => {
          this.patchBookInfo(this.bookInfo);
          this.$router.back();
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
      bookInfo: state => Object.assign({}, state.bookInfo),
    }),
  },
  methods: {
    ...mapMutations(['patchBookInfo']),
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
  display: flex;
  flex-flow: column;
  height: 100%;
  input {
    border-radius: 5px;
    border: none;
    margin: 20px 0;
    height: 40px;
    padding: 5px;
  }
  textarea {
    border-radius: 5px;
    border: none;
    height: 100px;
    margin: 20px 0;
    padding: 5px;
  }
}
</style>
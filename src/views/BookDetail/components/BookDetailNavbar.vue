<template>
  <div>
    <el-row type="flex" justify="space-between" class="nav-row">
      <span class="nav-button" @click="backToList">Back</span>
      <span class="nav-title">{{ title }}</span>
      <span class="nav-button">Edit</span>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class BookDetailNavbar extends Vue {
  @Prop(String) title!: string;

  backToList() {
    this.$router.push('/');
  }
}
</script>

<style lang="scss" scoped>
.nav-row {
  line-height: 60px;
  color: #ffff;
  background-color: #ffc35f;

  .nav-title {
    font-size: 20px;
  }

  .nav-button {
    margin: 0 10px;
    font-size: 30px;
  }
}
</style>

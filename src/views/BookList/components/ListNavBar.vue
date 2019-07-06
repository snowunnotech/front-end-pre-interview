<template>
  <div>
    <el-header>
      <span @click="addBook">New</span>
    </el-header>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ListNavBar extends Vue {
  addBook() {
    this.$router.push('./bookEditing');
  }
}
</script>

<style lang="scss" scoped>
  .el-header {
    line-height: 60px;
    color: #ffff;
    text-align: right;
    background-color: #ffc35f;

    span {
      margin-right: 20px;
      font-size: 30px;
    }
  }
</style>

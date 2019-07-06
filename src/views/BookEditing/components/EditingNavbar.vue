<template>
  <div>
    <el-row type="flex" justify="space-between" class="nav-row">
      <span class="nav-button" @click="backToList">Back</span>
      <span class="nav-button"> Add a New Book</span>
      <span class="nav-button" @click="addNewBook">Save</span>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class EditingNavbar extends Vue {
  backToList() {
    this.$router.push('/');
  }

  addNewBook() {
    this.$emit('save');
    this.$router.push('/');
  }
}
</script>

<style lang="scss" scoped>
.nav-row {
  line-height: 60px;
  color: #ffff;
  background-color: #ffc35f;

  .nav-button {
    margin: 0 10px;
    font-size: 30px;
  }
}
</style>

<template>
  <div id="nav">
    <button class="btn" @click="leftButton.click">{{leftButton.text}}</button>
    {{title}}
    <button class="btn" @click="rightButton.click">{{rightButton.text}}</button>
  </div>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
    },
    rightButton: {
      type: Object,
      default: () => ({text: 'New', click: () => {}})
    },
    leftButton: {
      type: Object,
      default: () => ({text: '', click: () => {}})
    }
  },
}
</script>

<style lang="scss" scoped>
#nav {
  position: fixed;
  width: 100%;
  padding: 0 12px;
  background: wheat;
  height: 60px;
  font-size: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}
.btn {
  color: white;
  background-color: transparent;
  border: none;
  font-size: 24px;
}
</style>
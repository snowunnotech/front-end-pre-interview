<template>
  <div id="bar">
    <button class="item"
            @click="handleClick({ path: left.path, func: left.func })"
            :disabled="!left.text || left.disabled">{{left.text}}</button>
    <div class="item title" :title="center.text">{{center.text}}</div>
    <button class="item"
            @click="handleClick({ path: right.path, func: right.func })"
            :disabled="!right.text || right.disabled">{{right.text}}</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Bar',
  methods: {
    handleClick({ path, func }) {
      if(typeof func == 'function')
        func()
      else if(path)
        this.$router.push(path)
    }
  },
  computed: {
    ...mapState('bar', [
      'left',
      'center',
      'right'
    ])
  }
}
</script>

<style lang="scss" scoped>
#bar {
  background: var(--primary);
  height: 48px;
  line-height: 48px;
  display: flex;

  .item {
    flex: 1;
    color: #FFF;
    font-size: 16px;
    text-align: center;

    &.title {
      font-size: 18px;
      font-weight: bold;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    &:first-child,
    &:last-child {
      flex: 0 0 70px;
    }
  }
  button {
    color: #FFF;
    background: transparent;
    border: none;
    text-decoration: none;
    transition: background .1s linear;
    cursor: pointer;

    &:not([disabled]):hover {
      background: rgba(#FFF, .2);
    }
    &[disabled] {
      cursor: default;
    }
  }
}
</style>

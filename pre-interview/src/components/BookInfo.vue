<template>
  <section class="book-info">
    <div class="detail">
      <p>Author: Lazaro Yundt</p><p>1986-01-28</p>
    </div>
    <article class="book-content">
      <p>Inventore sed libero et velit. Suscipit a deserunt laudantium quibusdam enim nostrum. Qui ipsam non ipsum velit reiciendis aperiam</p>
    </article>
  </section>
</template>

<script>
export default {
  name: 'BookInfo',
  data () {
    return {
      key: 'good'
    }
  },
  mounted () {
    console.log(this)
    console.log(this.$route.params)
  }
}
</script>

<style lang="scss" scoped>
.book-info{
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
}
.detail{
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  p{
    font-size: 12px;
    color: #9B9B9B;
  }
}
.book-content{
  position: relative;
  width: 100%;
  p{
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    line-height: 1.5;
    color: #4A4A4A;
  }
}
</style>

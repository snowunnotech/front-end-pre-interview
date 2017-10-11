<template>
    <div class="details">
      <h1>Title: {{this.$store.state.curBook["title"]}}</h1>
        <h2>
          <span>Author: {{this.$store.state.curBook["author"]}}</span>
          <span>{{this.$store.state.curBook["publicationDate"].slice(0,10)}}</span>
          <span>{{this.$store.state.curBook["id"]}}</span>
        </h2>
        <p>{{this.$store.state.curBook["description"]}}</p>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="sass" scoped>
.details
  display: flex
  width: 80%
  margin: 0 auto
  text-align: left
  h1
    padding: 10px 0
    font-size: 1.2em
  h2
    display: flex
    justify-content: space-between
    width: 100%
    color: gray
    margin: 10px 0
    span
      &:nth-child(3)
        opacity: .5
  p
    width: 100%
    padding: 20px 0
</style>
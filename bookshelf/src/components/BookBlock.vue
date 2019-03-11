<template>
  <div class="book" @click="read">
    <div class="title">{{book.attributes.title}}</div>
    <p class="desc">{{book.attributes.description}}</p>
    <footer>
      <p class="author">by {{book.attributes.author}}</p>
      <p class="date">{{pubDate}}</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'BookBlock',
  props: {
    book: Object
  },
  methods: {
    read() {
     this.$router.push('/book/' + this.realId)
    }
  },
  computed: {
    realId() {
      return this.book.id.match(/books\/([a-z0-9-]+)/)[1]
    },
    pubDate() {
      return this.book.attributes.publicationDate.split('T')[0]
    }
  }
}
</script>

<style lang="scss" scoped>
.book {
  --font-size: 16px;
  --padd-v: 12px;
  --padd-h: 10px;

  padding: var(--padd-v) var(--padd-h);
  font-size: var(--font-size);
  background: #FFF;
  min-width: 0;
  cursor: pointer;
}
.title {
  font-weight: bold;
  text-align: center;
  font-size: 1.15em;
}
.desc {
  color: var(--light);
  margin: var(--padd-v) 0;
  line-height: 1.3em;
  width: 100%;
  max-height: 45px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 0.8em;
  font-style: italic;
  color: var(--light);
  margin-top: -5px;

  p {
    margin-top: 5px;
    word-break: break-all;
  }
  .author {
    margin-right: 3px;
  }
}
@media (max-width: 600px) {
  .book {
    --font-size: 15px;
    --padd-h: 8px;
  }
}
</style>

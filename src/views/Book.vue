<template>
  <article class="book">
    <nav class="nav">
      <div class="nav-btn back" @click="back">Back</div>
      <span class="nav-title">{{title}}</span>
    </nav>
    <div class="subtitle">
      <span class="author">Author: {{author}}</span>
      <span class="date">{{date}}</span>
    </div>
    <section class="detail">{{detail}}</section>
  </article>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      author: "",
      date: "",
      detail: ""
    };
  },
  methods: {
    getDetail() {
      fetch(`${this.$store.state.bookUrl}/books/${this.$route.params.id}`)
        .then(res => {
          res.status === 200
            ? this.handleDetail(res.data)
            : this.handleDetailError(res.status);

          /**
           * By the way, since I keep getting status 500,
           * and I keep creating book id by my self in getBooks,
           * we may get status 404 here.
           */
        })
        .catch(e => console.log("Error in getDetail in Book.vue: ", e));
    },
    handleDetail(data) {
      this.title = data.title;
      this.author = data.author;
      this.date = data.publicationDate;
      this.detail = data.description;
    },
    handleDetailError() {
      this.title = "Error";
      this.author = "張育維";
      this.date = new Date().toLocaleString();
      this.detail =
        "Sorry, yet semms like the servers still have some problems.";
    },
    back() {
      this.$router.back(-1);
    }
  },
  created() {
    this.getDetail();
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/vars";
@import "../assets/extends";
@import "../assets/mixins";
.book {
  @extend %normal-view-container;
}
.nav {
  @extend %nav;
  text-align: center;
  .back {
    float: left;
  }
  .nav-title {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}
.subtitle {
  @include line(32px);
  box-sizing: border-box;
  padding: 0 8px;
  background: $sub-color;
  color: #b3b3b3;
  font-size: 0.8em;
  .date {
    float: right;
  }
}
.detail {
  padding: 16px;
  letter-spacing: 1px;
}
@media screen and(min-width: 768px) {
  .detail {
    padding: 48px 16px;
  }
}
</style>
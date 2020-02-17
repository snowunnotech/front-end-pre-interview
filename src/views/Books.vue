<template>
  <article class="books">
    <nav class="nav">
      <router-link to="./add">
        <div class="nav-btn new">New</div>
      </router-link>
    </nav>
    <section class="book">
      <div class="book-card" v-for="item in books" :key="item.id" @click="toDetailPage(item.id)">
        <div class="book-name">{{item.name}}</div>
        <div class="book-author">by {{item.author}}</div>
        <div class="book-date">{{item.date}}</div>
      </div>
    </section>
    <section class="more">
      <div class="more-btn" @click="getBooks()">Load More</div>
    </section>
  </article>
</template>

<script>
export default {
  name: "Home",
  computed: {
    books() {
      return this.$store.state.books;
    }
  },
  methods: {
    getBooks() {
      this.$store.dispatch("getBooks");
    },
    toDetailPage(id) {
      this.$router.push({
        path: `book/${id}`
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/vars";
@import "../assets/extends";
@import "../assets/mixins";
.books {
  @extend %normal-view-container;
  border-top: none;
  border-bottom: none;
}
.nav {
  @extend %nav;
  .new {
    float: right;
  }
}
.book {
  min-height: 80vh;
  .book-card {
    @extend %clickable-item;
    position: relative;
    display: inline-block;
    width: calc(50% - #{$normal-margin}* 2);
    height: calc(100% / 3 - #{$normal-margin}* 2);
    box-sizing: border-box;
    margin: $normal-margin;
    padding: $normal-margin $small-margin;
    background: $sub-color;
    &:hover {
      background: #e6e6e6;
    }
  }
  .book-name {
    height: calc(100% - 48px);
  }
  .book-author,
  .book-date {
    height: 24px;
    line-height: 24px;
  }
}
.more {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(20vh - #{$nav-height});
  box-sizing: border-box;
  padding: $normal-margin $normal-margin $big-margin $normal-margin;
  .more-btn {
    @extend %color-theme;
    @extend %clickable-item;
    @include line(40px);
    box-sizing: border-box;
    border-radius: 8px;
    text-align: center;
    font-size: 1.8em;
    &:hover {
      border: 1px solid $main-color;
      background: $sub-color;
      color: $main-color;
    }
  }
}

@media screen and(min-width: 360px) {
  .book {
    .book-name {
      box-sizing: border-box;
      padding-top: 24px;
    }
  }
  .more {
    .more-btn {
      @include line(56px);
    }
  }
}

@media screen and(min-width: 768px) {
  .book {
    .book-card {
      width: calc(100% / 3 - #{$normal-margin}* 2);
    }
    .book-name {
      padding-top: 48px;
    }
  }
  .more {
    padding-top: 32px;
    .more-btn {
      @include line(72px);
    }
  }
}

@media screen and(min-width: 1024px) {
  .book {
    .book-name {
      padding-top: 24px;
    }
  }
  .more {
    padding-top: 16px;
    .more-btn {
      @include line(48px);
    }
  }
}

@media screen and(min-height: 1200px) {
  .book {
    .book-card {
      padding: 96px 16px;
    }
  }
  .more {
    .more-btn {
      @include line(84px);
    }
  }
}
</style>

<template>
    <div>
        <loading :active.sync="isLoading" ></loading>
        <div class="wrap">
            <nav class="home__P">
                <div class="add" @click="editData">New</div>
            </nav>
            <section class="content_wrap">
                <div class="content" v-for="(item, index) in limit"
                :key=index style="cursor:pointer">
                    <div class="del" @click="deletData(item['@id'])">X</div>
                    <div class="inner__content" @click="toData(item['@id'])">
                        <p>{{item.description}}</p>
                        <em>by {{item.author}}<span>{{item.publicationDate}}</span></em>
                    </div>
                </div>
            </section>
            <input type="button" value="Load More" class="load" @click="limitData" v-if="count < 5">
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      booksId: [],
    //   isLoading: true,
    };
  },
  methods: {
    getData() {
      this.$store.dispatch('getData');
    },
    limitData() {
      this.$store.dispatch('limitData');
    },
    deletData(id) {
      const vm = this;
      const api = `https://cors-anywhere.herokuapp.com/https://demo.api-platform.com/${id}`;
      this.$http.delete(api).then(() => {
        vm.getData();
      });
    },
    editData() {
      this.$router.push('/edit');
    },
    toData(id) {
      const api = `https://cors-anywhere.herokuapp.com/https://demo.api-platform.com/${id}`;
      this.$http.get(api).then(() => {
        this.$router.push(`/content${id}`);
      });
    },
  },
  computed: {
    books() {
      return this.$store.state.books;
    },
    limit() {
      return this.$store.state.limit;
    },
    count() {
      return this.$store.state.count;
    },
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
  created() {
    this.getData();
  },
};
</script>

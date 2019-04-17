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
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(['getData', 'limitData', 'editData']),
    deletData(id) {
      this.$store.dispatch('deletData', id);
    },
    toData(id) {
      this.$store.dispatch('toData', id);
    },
  },
  computed: {
    ...mapGetters(['books', 'limit', 'count', 'isLoading']),
  },
  created() {
    this.$store.dispatch('getData');
  },
};
</script>

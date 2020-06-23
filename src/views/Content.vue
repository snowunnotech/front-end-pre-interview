<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <div class="wrap">
            <nav class="Content__P">
                <div class="back" @click="backData">Back</div>
                <div class="Content__title" style="text-overflow:ellipsis;">{{author.title}}</div>
                <router-link class="edit"
                :to="{path: '/edit', query: {to: `${pid}`}}">Edit</router-link>
            </nav>
            <section>
                <div class="Content__info">
                    <div class="Content__Author">Author: <span>{{author.author}}</span></div>
                    <div class="Content__Time">{{author.publicationDate}}</div>
                </div>
                <div class="Content__text">
                    <p>{{author.description}}</p>
                </div>
            </section>
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
    ...mapActions(['getSingleData', 'backData']),
  },
  computed: {
    ...mapGetters(['author', 'pid', 'isLoading',]),
  },
  created() {
    this.$store.state.pid = this.$route.params.id;
    this.$store.dispatch('getSingleData');
  },
  watch: {
    'pid': 'getSingleData',
  },
};
</script>

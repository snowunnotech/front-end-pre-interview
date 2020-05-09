<template lang="pug">
    v-content.overflow-scrolling-touch.overflow-y-auto#scroll-container.gray.lighten-4(v-scroll:#scroll-container="onScroll")
        app-bar(hide-on-scrol fluid)
            v-btn(text slot="right" nuxt to="/create") New
        v-container.px-2.py-1(fluid)
            v-row(dense)
                v-col(v-for="(item, index) in books" :key="'t_' + index" cols="6" md="4" lg="2")
                    vertical(:item="item")
                v-col(cols="12")
                    v-btn(block color="amber lighten-1" :disabled="paginationCanNotNext" @click="next") {{ more }}
                v-col.text-center(cols="12")
                    span {{ books.length }} 筆 ， 共 {{ pagination.totalItems}} 筆
                v-col.text-center(cols="12")
                    span 第{{ pagination.currentPage }}頁 ， 共 {{ pagination.lastPage}} 頁
</template>

<script>
import { Scroll } from 'vuetify/lib/directives';
import { mapGetters, mapActions } from 'vuex';
import Vertical from '@/components/Cards/Vertical';
import { book } from '@/apis';

export default {
    components: {
        AppBar: () => import('@/components/AppBar/AppBar'),
        Vertical
    },
    directives: { Scroll },
    auth: false,
    head: {
        title: '創順科技'
    },
    data: () => ({
        id: ''
    }),
    computed: {
        ...mapGetters({
            books: 'books/books',
            pagination: 'books/pagination'
        }),
        paginationCanNotNext() {
            return this.pagination.currentPage >= this.pagination.lastPage;
        },
        more(o) {
            return this.paginationCanNotNext ? 'No More books' : 'Load More';
        }
    },
    async asyncData({ $axios, store }) {
        if (store.getters['books/books'].length !== 0) return {};
        const params = {
            page: 1,
            'order[isbn]': 'desc'
        };

        const { data, totalItems } = await book($axios).query({ params });
        store.dispatch('books/pagination', {
            data,
            pagination: { currentPage: 1, totalItems }
        });
        return {};
    },
    methods: {
        ...mapActions({}),
        onScroll(o) {
            // this.$nuxt.$emit('MENU_CLOSE');
            // console.log(o);
        },
        async next() {
            if (this.paginationCanNotNext) return false;
            const params = {
                page: this.pagination.currentPage + 1,
                'order[author]': 'desc'
            };

            const { data, totalItems } = await book(this.$axios).query({
                params
            });
            this.$store.dispatch('books/pagination', {
                data,
                pagination: {
                    currentPage: this.pagination.currentPage + 1,
                    totalItems
                }
            });
        }
    }
};
</script>
<style>
.clamp3 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
</style>

<template lang="pug">
    v-app
        nuxt
        dialog-delete-book(v-if="this.bookRemove.active && this.bookRemove.item !== ''" v-model="this.bookRemove.active" @close="bookRemove.active = false")
</template>

<script>
import { DialogDeleteBook } from '@/partials/Dialog';

export default {
    components: { DialogDeleteBook },
    data: () => ({
        bookRemove: { active: false, item: null }
    }),
    mounted() {
        this.$nuxt.$on('BOOK_REMOVE', bookId => {
            this.bookRemove.item = bookId;
            this.bookRemove.active = true;
        });
    },
    beforeDestroy() {
        this.$nuxt.$off('BOOK_REMOVE');
    }
};
</script>

<template>
    <section>
        <v-container>
            <v-layout row wrap>
                <BookCard 
                    v-for="book in loadedBooks"
                    :book="book" 
                    :key="book['@id']"
                />
                <v-flex xs12 class="text-xs-center">
                    <v-progress-circular
                    v-if="!loadedBooks.length"
                    :size="50"
                    :width="5"
                    color="lime lighten-1"
                    indeterminate
                    ></v-progress-circular>
                    <v-btn v-else-if="!loadedToEnd" class="white--text text-none" color="orange lighten-3" depressed large block @click="LOAD_BOOKS">
                        Load More
                    </v-btn>
                    <p v-else py-2>No more books to load.</p>
                </v-flex>
            </v-layout>
        </v-container>
    </section>
</template>

<script>
import BookCard from '@/components/BookCard'
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
    components: {
        BookCard
    },
    created() {
        this.requestBooks()
    },
    computed: {
        ...mapGetters(['loadedBooks', 'loadedToEnd'])
    },
    methods: {
        ...mapMutations(['LOAD_BOOKS']),
        ...mapActions(['requestBooks'])
    }
}
</script>

<style>

</style>
<template>
    <section>
        <v-container>
            <v-layout row wrap>
                <BookCard v-for="i in 6" :key="i"/>
                <v-flex xs12>
                    <v-btn class="white--text text-none" color="orange lighten-3" depressed large block>
                        Load More
                    </v-btn>
                </v-flex>
            </v-layout>
        </v-container>
    </section>
</template>

<script>
import BookCard from '@/components/BookCard'

export default {
    components: {
        BookCard
    }
}
</script>

<style>

</style>
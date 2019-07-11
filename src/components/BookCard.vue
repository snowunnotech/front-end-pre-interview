<template>
    <v-flex xs6 pa-2>
        <v-layout class="book-card white" :data-id="book['@id']" pa-2 row wrap>
            <v-flex class="text-xs-center font-weight-bold headline">X</v-flex>
            <v-flex class="grey--text" pb-1 xs12>
                <article>{{ book.description | hidden-text(50) }}</article>
            </v-flex>
            <v-flex class="grey--text" xs6>
                <h3 class="font-weight-regular">{{ book.title | hidden-text(15) }}</h3>
            </v-flex>
            <v-flex class="grey--text text-xs-right" xs6>
                <time>{{ book.publicationDate | yyyy-mm-dd }}</time>
            </v-flex>
        </v-layout>
    </v-flex>
</template>

<script>
export default {
    props: {
        book: Object
    },
    filters: {
        hiddenText(text, count) {
            return `${ text.slice(0, count) }...`
        }
    }
}
</script>

<style>
.book-card {
    height: 100%;
    font-size: 0.25rem;
    cursor: pointer;
}
</style>



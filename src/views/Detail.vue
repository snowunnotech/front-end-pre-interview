<template>
    <section class="detail">
        <v-container>
            <v-layout row wrap>
                <template v-if="bookDetail">
                    <v-flex class="grey--text" xs8>Author: {{ bookDetail.author }}</v-flex>
                    <v-flex class="grey--text text-xs-right" xs4>{{ bookDetail.publicationDate | yyyy-mm-dd }}</v-flex>
                    <v-flex class="detail__description" xs12>{{ bookDetail.description }}</v-flex>
                </template>
                <v-flex class="text-xs-center" v-else xs12>
                     <p>Sorry! Can't find book detail.</p>
                </v-flex>
            </v-layout>
        </v-container>
         <div>
    </div>
    </section>
   
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters(['bookDetail'])
    }
}
</script>

<style>
.detail__description {
    font-size: 1.5rem;
}
</style>



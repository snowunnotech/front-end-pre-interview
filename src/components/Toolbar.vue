<template>
    <v-toolbar app class="white--text" color="orange lighten-3" flat>
        <template v-if="$route.name==='list'">
            <v-spacer></v-spacer>
            <v-btn flat @click="editBook" color="white">
                <span class="white--text text-none">New</span>
            </v-btn>
        </template>
        <template v-if="$route.name==='detail'">
            <v-btn @click="$router.go(-1)" flat color="white">
                <span class="white--text text-none">Back</span>
            </v-btn>
            <v-spacer></v-spacer>
            <v-toolbar-title class="headline">
                <span>{{ bookDetail ? bookDetail.title : 'Book Detail' }}</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn flat @click="editBook" color="white">
                <span class="white--text text-none">Edit</span>
            </v-btn>
        </template>
        <template v-if="$route.name==='edit'">
             <v-btn @click="$router.go(-1)" flat color="white">
                <span class="white--text text-none">Back</span>
            </v-btn>
            <v-spacer></v-spacer>
            <v-toolbar-title class="headline">
                <span>{{ bookDetail ? bookDetail.title : 'Add a new book' }}</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn @click="submitBookEdit" flat color="white">
                <span class="white--text text-none">Save</span>
            </v-btn>
        </template>
    </v-toolbar>
</template>

<script>
import { bus } from '@/main'
import { mapGetters } from 'vuex'

export default {
    methods: {
        editBook() {
            let id = this.$route.params.id
            this.$router.push({ name: 'edit', params: { id } })
        },
        submitBookEdit() {
            bus.$emit('submitBookEdit')
        }
    },
    computed: {
        ...mapGetters(['bookDetail'])
    }
}
</script>

<style>

</style>



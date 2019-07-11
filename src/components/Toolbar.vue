<template>
    <v-toolbar app class="white--text" color="orange lighten-3" flat>
        <template v-if="$route.name==='list'">
            <v-spacer></v-spacer>
            <v-btn flat to="/edit" color="white">
                <span class="white--text text-none">New</span>
            </v-btn>
        </template>
        <template v-if="$route.name==='detail'">
            <v-btn @click="$router.go(-1)" flat color="white">
                <span class="white--text text-none">Back</span>
            </v-btn>
            <v-spacer></v-spacer>
            <v-toolbar-title class="headline">
                <span>{{ bookDetail ? bookDetail.title : '' }}</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn flat to="/edit" color="white">
                <span class="white--text text-none">Edit</span>
            </v-btn>
        </template>
        <template v-if="$route.name==='edit'">
             <v-btn @click="$router.go(-1)" flat color="white">
                <span class="white--text text-none">Back</span>
            </v-btn>
            <v-spacer></v-spacer>
            <v-toolbar-title class="headline">
                <span>Add a new book</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn flat to="/" color="white">
                <span class="white--text text-none">Save</span>
            </v-btn>
        </template>
    </v-toolbar>
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

</style>



<template>
    <div>
        <app-loading v-if="loading"></app-loading>

        <app-Navbar
            :title="title"
            :leftBtn="'default'"
            :rightBtn="null"
        ></app-Navbar>

        <div class="container" id="context">
            <div class="d-flex justify-content-between text-secondary">
                <small>Author: {{author}}</small>
                <small>{{createdAt | formatDate("YYYY-MM-DD")}}</small>
            </div>

            <p class="bg-light p-0">{{description}}</p>
        </div>
    </div>
</template>


<script>
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import axios from "axios";
import moment from "moment";

export default {
    components: {
        appNavbar: Navbar,
        appLoading: Loading
    },

    data(){
        return {
            id: null,
            title: null,
            author: null,
            createdAt: null,
            description: null,
            loading: true
        }
    },

    created(){
        axios.get(`/books/${this.$route.params.id}`).then(res => {
            const book = res.data;
            this.id = this.$route.params.id;
            this.title = book.title;
            this.author = book.author;
            this.createdAt = book.publicationDate;
            this.description = book.description;
            this.loading = false;
        }).catch(err => {
            this.$router.push({ name: "books" });
        })
    }
}
</script>


<style lang="scss" scope>
    #context {
        small {
            font-size: $font-sm;
        }

        p {
            font-size: $font-md;
        }
    }
</style>
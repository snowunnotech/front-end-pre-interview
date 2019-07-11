<template>
    <div>
        <app-loading v-if="loading"></app-loading>

        <app-Navbar
            :title="'Dashboard'"
            :leftBtn="{useIcon: false, text: modeText, method: switchMode }"
            :rightBtn="{useIcon: true,  icon: 'plus', method: gotoCreateBook }"
        ></app-Navbar>


        <div class="container">
            <div class="row">
                <template v-for="book in books">
                    <div class="col-6 mb-4">
                        <app-book-card
                            :id="book['@id']"
                            :title="book.title"
                            :description="book.description"
                            :author="book.author"
                            :publicationDate="book.publicationDate"
                            :inEditingMode="inEditingMode"
                        ></app-book-card>
                    </div>
                </template>
            </div>

            <button 
                id="load-more"
                class="btn btn-block btn-lg mb-5 py-3"
                @click="loadMore"
                :disabled="!hasMoreToLoad"
            >
                {{ hasMoreToLoad ? "Load More" : "No more to load" }}
            
            </button>

        </div>

    </div>
</template>


<script>
import axios from "axios";
import moment from "moment";

import Navbar from "../components/Navbar";
import BookCard from "../components/BookCard";
import Loading from "../components/Loading";

export default {
    components: {
        appNavbar: Navbar,
        appBookCard: BookCard,
        appLoading: Loading
    },

    data(){
        return {
            inEditingMode: false,
            modeText: "Edit",
            books: [],
            page: 1,
            maxItems: 0,
            showedItems: 0,
            hasMoreToLoad: true,
            loading: true
        }
    },

    created(){
        axios.get(`/books?page=${this.page}`).then(res => {
            this.maxItems = res.data[`hydra:totalItems`];
            // 刪掉id中的"/books/"字串
            const books = res.data[`hydra:member`].map(book => {
                let id = book["@id"];
                const start = id.indexOf("/books/") + "/books/".length;
                const end = id.length
                book["@id"] = id.substring(start, end);
                return book;
            });

            this.books = books;
            this.loading = false;
        })
    },

    methods: {
        loadMore(){
            this.loading = true;
            this.page++;
            axios.get(`/books?page=${this.page}`).then(res => {
                this.maxItems = res.data[`hydra:totalItems`];
                // 刪掉id中的"/books/"字串
                const books = res.data[`hydra:member`].map(book => {
                    let id = book["@id"];
                    const start = id.indexOf("/books/") + "/books/".length;
                    const end = id.length
                    book["@id"] = id.substring(start, end);
                    return book;
                });

                this.books = this.books.concat(books);
                this.loading = false;
            })
        },

        gotoCreateBook(){
            this.$router.push({ name: "createBook" });
        },

        switchMode(){
            this.inEditingMode = !this.inEditingMode;

            switch(this.inEditingMode){
                case true:
                    this.modeText = "Cancel";
                    break;

                case false:
                    this.modeText = "Edit";
                    break;
            }
        }
    },

    watch: {
        books(newValue){
            this.showedItems = newValue.length;
        },

        showedItems(newValue){
            if(newValue >= this.maxItems) this.hasMoreToLoad = false;
        }
    }
}
</script>

<style lang="scss" scope>
    #load-more {
        background: #FFC35F;
        color: white;
        font-size: 1.8rem;

        &:disabled {
            background: rgb(167, 167, 167);
        }
    }
</style>
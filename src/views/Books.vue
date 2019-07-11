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
                <template v-for="book in books.slice(0, amountToShow)">
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
            amountToShow: 6,
            loadMoreIncrease: 6,
            hasMoreToLoad: true,
            loading: true
        }
    },

    created(){
        axios.get("/books").then(res => {
            // 刪掉id中的"/books/"字串
            const books = res.data[`hydra:member`].map(book => {
                let id = book["@id"];
                const start = id.indexOf("/books/") + "/books/".length;
                const end = id.length
                book["@id"] = id.substring(start, end);
                return book;
            });

            // 按照日期先後排列
            books.sort((a, b) => {
                if(moment(a.publicationDate).isBefore(moment(b.publicationDate))){
                    return 1;
                } else if(moment(a.publicationDate).isAfter(moment(b.publicationDate))) {
                    return -1;
                }
            })

            this.books = books;
            this.loading = false;
        })
    },

    methods: {
        loadMore(){
            this.amountToShow += this.loadMoreIncrease;
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
        amountToShow(newValue){
            if(newValue >= this.books.length) this.hasMoreToLoad = false;
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
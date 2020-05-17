<template>
    <router-link :to="{name: bookCardHref, params: { id }}" class="card border-0">
        <div class="card-body p-3 d-flex flex-column justify-content-between">
            <div>
                <div class="header">
                    <h2 class="card-title title">{{title | limitText(titleTextNum)}}</h2>

                    <h2 class="delete-btn" :class="{insert: inEditingMode}">
                        <font-awesome-icon icon="minus-circle" @click.prevent="deleteBook" />
                    </h2>                  
                </div>                
                
                <p class="card-text text-secondary">{{description | limitText(descriptionTextNum)}}</p>
            </div>
            
            <div>
                <cite class="text-secondary">by {{author | limitText(authorTextNum)}}</cite>
                <cite class="text-secondary">{{publicationDate | formatDate("YYYY-MM-DD")}}</cite>
            </div>
            
        </div>
    </router-link>
</template>

<script>
export default {
    props: ["id", "title", "description", "author", "publicationDate", "inEditingMode"],

    data(){
        return {
            bookCardHref: "readBook",            
        }
    },

    computed: {
        // title在裝置寬度下可展示的上限字數
        titleTextNum(){
            const textLimit = this.$store.getters.textLimit;
            if(this.inEditingMode){
                return textLimit.bookCardTitle - 3;
            } else {
                return textLimit.bookCardTitle;
            }     
        },

        // author在裝置寬度下可展示的上限字數
        authorTextNum(){
            const textLimit = this.$store.getters.textLimit;
            return textLimit.bookCardAuthor;
        },

        // description在裝置寬度下可展示的上限字數
        descriptionTextNum(){
            const textLimit = this.$store.getters.textLimit;
            return textLimit.bookCardDescription;
        },
    },

    watch: {
        inEditingMode(newValue){
            if(newValue){
                this.bookCardHref = "editBook";
            } else {
                this.bookCardHref = "readBook";
            }
        }
    },

    methods: {
        deleteBook(){
            alert("Sorry, you can't delete books now.\nYou can click description to edit a book instead.")
        }
    }
}
</script>


<style lang="scss" scope>
    a {
        color: inherit !important;
        text-decoration: none !important;
    }

    cite {
        display: block;
    }

    .card {
        font-size: 1.4rem;
        height: 21rem;
        overflow: hidden;

        .title {
            white-space: nowrap;
        }

        .delete-btn {
            color: red;
            position: absolute;
            top: .7rem;
            right: -3rem;

            transition: right .5s ease;
        }

        .insert {
            right: 1rem;
        }
    }
</style>
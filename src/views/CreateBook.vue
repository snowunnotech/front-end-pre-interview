<template>
    <div>
        <app-loading v-if="loading"></app-loading>

        <app-Navbar
            :title="'Add new book'"
            :leftBtn="'default'"
            :rightBtn="{text: 'Save', method: createBook}"
        ></app-Navbar>

        <div id="form" class="container">
            <div class="form-group">
                <label>ISBN:</label>
                <input type="text" v-model="isbn" @blur="$v.isbn.$touch()" class="form-control form-control-lg" placeholder="ISBN">
                <small v-if="$v.isbn.$error" class="form-text text-danger">ISBN is not correct!!</small>
            </div>

            <div class="form-group">
                <label>Title:</label>
                <input type="text" v-model="title" @blur="$v.title.$touch()" class="form-control form-control-lg" placeholder="Title">
                <small v-if="$v.title.$error" class="form-text text-danger">Title is required!!</small>
            </div>

            <div class="form-group">
                <label>Author:</label>
                <input type="text" v-model="author" @blur="$v.author.$touch()" class="form-control form-control-lg" placeholder="Author">
                <small v-if="$v.author.$error" class="form-text text-danger">Author is required!!</small>
            </div>
            
            <div class="form-group">
                <label>Description:</label>
                <textarea v-model="description" @blur="$v.description.$touch()" class="form-control" rows="10" placeholder="Description"></textarea>
                <small v-if="$v.description.$error" class="form-text text-danger">Description is required!!</small>
            </div>                

        </div>
        
    </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import axios from "axios";
import moment from "moment";
import ISBN from "isbn-validate";
import { required } from "vuelidate/lib/validators";

export default {
    components: {
        appLoading: Loading,
        appNavbar: Navbar
    },

    data(){
        return {
            isbn: "9789869744546",
            title: null,
            author: null,
            description: null,
            loading: false
        }
    },

    methods: {
        createBook(){
            if(this.$v.$invalid){
                // 表單較驗失敗
                this.$v.$touch();
            } else {
                // 表單較驗成功
                this.loading = true;
                const { isbn, title, author, description } = this;
                const _this = this;

                axios.post('/books', {
                    isbn, title, author, description,
                    publicationDate: moment().format()
                }).then(function (response) {
                    _this.loading = false;

                    // 成功視窗
                    _this.$bvModal.msgBoxOk('New book added! Click OK to redirect to dashboard.', {
                        title: 'Success',
                        size: 'lg',
                        buttonSize: 'lg',
                        okVariant: 'success',
                        headerClass: 'p-3 border-bottom-0',
                        footerClass: 'p-3 border-top-0',
                        centered: true
                    }).then(value => {
                        _this.$router.push({ name: "books" });
                    })

                    
                }).catch(function (err) {
                    alert("oh, something wrong", err);
                });
            }            
        }
    },

    validations: {
        isbn: {
            correctISBN: value => ISBN.Validate(value)
        },
        title: { required },
        author: { required },
        description: { required }
    }
}
</script>

<style lang="scss" scope>
    #form {
        input {
            font-size: $font-md;
            border: none;
        }
        
        textarea {
            font-size: $font-md;
            border: none;
            resize: none;
        }

        small {
            font-size: $font-sm;
            padding: 0 1rem;
        }

        label {
            font-size: $font-md;
            padding: 0 1rem;
            font-weight: bolder;
        }
                
    }

    .modal-header {
        .modal-title {
            font-size: $font-lg;
        }
        
    }

    .modal-body {
        font-size: $font-md;
    }

    .modal-footer {
        button {
            font-size: $font-md;
        }        
    }

    .modal-backdrop {
        max-width: 576px !important;
        transform: translateX(-50%) !important;
        left: 50% !important;
    }
    
</style>
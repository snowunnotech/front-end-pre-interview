<template>
    <v-form
        ref="bookEditForm"
        v-model="valid"
        lazy-validation
    >
        <v-container>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-text-field
                        v-model="author"
                        :rules="authorRules"
                        label="Solo"
                        placeholder="Author"
                        name="author"
                        solo
                        flat
                    ></v-text-field>
                </v-flex>
                <v-flex xs12>
                    <v-menu
                        v-model="datePicker"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        lazy
                        transition="scale-transition"
                        offset-y
                        full-width
                        min-width="290px"
                    >
                        <template v-slot:activator="{ on }">
                            <v-text-field
                                v-model="publicationDate"
                                :rules="publicationDateRules"
                                label="Solo"
                                placeholder="Created at"
                                name="publicationDate"
                                solo
                                flat
                                readonly
                                v-on="on"
                            ></v-text-field>
                        </template>
                        <v-date-picker 
                            v-model="publicationDate" 
                            @input="datePicker = false"
                            color="orange lighten-3"
                        >
                        </v-date-picker>
                    </v-menu>
                </v-flex>
                <v-flex xs12>
                    <v-textarea
                        v-model="description"
                        :rules="descriptionRules"
                        solo
                        name="description"
                        placeholder="Description"
                        flat
                    ></v-textarea>
                </v-flex>
            </v-layout>
        </v-container>
    </v-form> 
</template>

<script>
import { bus } from '@/main'
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'edit',
    data() {
        return {
            valid: true,
            datePicker: false,
            author: '',
            authorRules: [
                v => !!v || 'Author name is required'
            ],
            publicationDate: new Date().toISOString().substr(0, 10),
            publicationDateRules: [
                v => !!v || 'publication date is required'
            ],
            description: '',
            descriptionRules: [
                v => !!v || 'Description is required',
                v => v.length >= 12 || 'At least 12 characters for description'
            ] 
        }
    },
    created() {
        bus.$on('submitBookEdit', this.submitBookEdit)
        if(this.bookDetail) {
            this.author = this.bookDetail.author
            this.publicationDate = this.$options.filters['yyyy-mm-dd'](this.bookDetail.publicationDate)
            this.description = this.bookDetail.description
        }
    },
    mounted() {
        this.resetValidation()
    },
    beforeDestroy() {
        bus.$off('submitBookEdit');
    },
    methods: {
        submitBookEdit() {
            this.validate()
        },
        validate() {
            if(this.$refs.bookEditForm.validate()) {
                const params = {
                    isbn: this.bookDetail? this.bookDetail.isbn : '9797423849323', // 看題目的介面不確定是否要由使用者輸入ISBN, 先寫死不驗證此項目
                    title: this.bookDetail? this.bookDetail.title : 'Add a new books', // 同上
                    description: this.description,
                    author: this.author,
                    publicationDate: new Date(this.publicationDate).toISOString(),
                    reviews: [] // 照API規格帶({body: 'xxx'})沒有用 
                }
                this.bookDetail ? this.replaceBook({
                    params
                }) : this.createBook({
                    params
                })
            }
        },
        resetValidation() {
            this.$refs.bookEditForm.resetValidation()
        },
        ...mapActions(['replaceBook', 'createBook'])
    },
    computed: {
        ...mapGetters(['bookDetail'])
    }
}
</script>

<style>

</style>
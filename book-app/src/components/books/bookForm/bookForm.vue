<template>
    <div class="bookForm">
        <div class="container">
            <div class="row">
                <form onsubmit="return false">
                    <div class="form-group">
                        <label for="title">書名:</label>
                        <input @change="setValue($event, 'title')" :value="bookInfo.title" type="text" class="form-control" id="title" aria-describedby="書名" placeholder="書名">
                    </div>
                    <div class="form-group">
                        <label for="author">作者:</label>
                        <input @change="setValue($event, 'author')" :value="bookInfo.author" type="text" class="form-control" id="author" aria-describedby="作者" placeholder="作者">
                    </div>
                    <div class="form-group">
                        <label for="description">內容:</label>
                        <textarea @change="setValue($event, 'description')" :value="bookInfo.description" class="form-control" id="description" rows="3"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="date">發佈日期:</label>
                        <datepicker @closed="setValue($event, 'publicationDate')" v-model="date" :language="zh" :format="customFormatter"></datepicker>
                    </div>
                    <div class="form-group">
                        <button @click="submitForm()" type="btn" class="btn btn-primary">{{btnTxt}}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import {zh} from 'vuejs-datepicker/dist/locale'
import Datepicker from 'vuejs-datepicker'
import moment from 'moment'

export default {
    name: 'bookForm',
    data() {
        return {
            zh: zh,
            date: '',
        }
    },
    components: {
        Datepicker
    },
    computed: {
        bookInfo() {
            if(this.$store.state.bookDetail.bookInfo['publicationDate']) {
                this.date = this.$store.state.bookDetail.bookInfo['publicationDate']
            }
            return this.$store.state.bookDetail.bookInfo
        },
        btnTxt() {
            return this.$route.name == 'newBook'? '新增' : '修改'
        }
    },
    methods: {
        setValue(env, tag) {
            if(tag == 'publicationDate') {
                this.bookInfo[tag] = this.date
                return 
            }
            this.bookInfo[tag] = env.srcElement.value
        },
        customFormatter(date) {
            return moment(date).format('YYYY MM DD');
        },
        submitForm() {
            if(this.$route.name == 'edit') {
                this.bookInfo['url'] = `${this.$root.$options.api['api2']}/${this.bookInfo['id']}`
                let res = this.$store.dispatch('updateApi', this.bookInfo) 
                this.$router.push('/')
                return 
            }
            this.bookInfo['url'] = this.$root.$options.api['api1']
            let res = this.$store.dispatch('postApi', this.bookInfo) 
            this.$router.push('/')
        }
    },
    mounted() {
        if(this.$route.name == 'newBook')
        this.$store.dispatch('updateBook', {})
    }
}
</script>
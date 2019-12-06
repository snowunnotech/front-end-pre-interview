<template>
    <div class="books">
        <div class="container">
            <div class="row">
                <div id="book" class="col-4 border" v-for="(book, key) in books">
                    <div>
                        <div class="float-right">
                            <i class="fa fa-trash" aria-hidden="true"></i>
                        </div>
                        <div class="float-right" @click="redirect('edit', book, key)">
                            <i class="fa fa-edit" aria-hidden="true"></i>
                        </div>
                    </div>
                    <b>書名:</b> 
                    <h6>{{book['title']}}</h6>
                    <div class="book-img bg-dark text-white">
                        <i class="fa fa-book"></i>
                    </div>
                    <ul>
                        <li>
                            <b>作者:</b> 
                            <p>{{book['author']}}</p>
                        </li>
                        <li>
                            <b>序號:</b> 
                            <p>{{book['isbn']}}</p>                     
                        </li>
                        <li>
                            <b>內容:</b> 
                            <p>{{book['description']}}<br/></p>
                        </li>
                    </ul>
                    <div @click="redirect('Detail', book)" class="link">更多...</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'books',
    data() {
        return  {
            books:[]
        }
    },
    methods: {
        api() {
            let data = {}
            data['url'] = this.$root.$options.api['api1']
            let res = this.$store.dispatch('getApi', data) 
            res.then((val)=>{
                this.books = val['data']
            })    
        },
        redirect(url, book, key) {
            book['id'] = key
            this.$store.dispatch('updateBook', book)
            this.$router.push(url)
        },
    },
    mounted() {
        this.api()
    }

}
</script>
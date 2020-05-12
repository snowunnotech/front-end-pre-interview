<template>
<div class="container">
    <div class="BookEdit">
        <div class="BookEdit_card" v-for="book in SpecificBook">
            <div class="BookEdit_AlertError"></div>
            <input class="BookEdit_title" v-model="book.title">
            <div class="BookEdit_author">
                Author : <input type="text" v-model="book.author">  
                <br>
                Publication Date : <input type="text" v-model="book.publicationDate">
            </div>
            <div><h5>DESCRIPTION</h5>
                </div>
                <textarea class="BookEdit_description" type="text" v-model="book.description"></textarea>
            <div class="BookEdit_submit" @click="CompleteEdit()">儲存</div>
        </div>
    </div>
</div>
</template>

<script>
import { mapState, mapMutations, mapActions} from 'vuex'
import axios from 'axios'
import moment from 'moment'
export default {
    data(){
        return{
            Editdata:{}
        }
    },
    computed:{
        ...mapState(['books']),
        SpecificBook(){
            return this.books.filter(book=>book['@id'].slice(7)===this.$route.params.id)
        },
        check(){
            if(!this.SpecificBook[0].title|!this.SpecificBook[0].author|!this.SpecificBook[0].publicationDate|!this.SpecificBook[0].description){
                document.querySelector('.BookEdit_back').style.pointerEvents= "none"
            } else {
                document.querySelector('.BookEdit_back').style.pointerEvents= "auto"
            }
        }
        
    },
    methods:{
        CompleteEdit(){
            if (!this.SpecificBook[0].title|!this.SpecificBook[0].author|!this.SpecificBook[0].publicationDate|!this.SpecificBook[0].description){
                const AlertBox = document.querySelector('.BookEdit_AlertError')
                AlertBox.innerHTML=`<div style="padding: 10px">有欄位尚未填寫 <br> 請確認所有欄位填寫完畢再送出 </div>`
                const check=document.querySelectorAll('input')
                const checkB=document.querySelector('textarea')
                for (var i=0;i<check.length;i++){
                    if (!check[i].value){
                        check[i].style.boxShadow="0px 0px 15px #EEA9A9"
                    }else{
                        check[i].style.boxShadow="none"
                    }
                    if (!checkB.value){
                        checkB.style.boxShadow="0px 0px 10px #EEA9A9"
                    }else{
                        checkB.style.boxShadow="none"
                    }
                }
            } else{
            const BookID = this.$route.params.id
            const Bookurl = `https://demo.api-platform.com/books/${BookID}`
            const data = JSON.stringify(this.SpecificBook).slice(1,-1)
            axios({
                method:'put',
                url: Bookurl,
                headers:{"accept": "application/json", "Content-Type": "application/json"},
                data: data
            }).then(res=>{
                alert(`修改成功！修改書籍資料如下：
                書名：${res.data.title}
                作者：${res.data.author}
                發行日期：${res.data.publicationDate}
                描述：${res.data.description}
                `)
                this.$router.push({path:`/book/${this.$route.params.id}`})
            }).catch(error=>{
                if (error.response.data.detail='Not found, because of an invalid identifier configuration"'){
                alert(`${error.response.data.detail}
此為假資料無法修改`)
                this.$router.push({path:`/book/${this.$route.params.id}`})
                }else{
                const AlertBox = document.querySelector('.BookEdit_AlertError')
                AlertBox.innerHTML=`<div style="padding: 10px"> ${error.response.data.detail}</div>`
                }
                }
            )
        }},
        ...mapActions(['LoadBook']),
        ReloadBook(){
            return this.books.filter(book=>book['@id'].slice(7)===this.$route.params.id)
        }
        
    },
    created(){
    this.ReloadBook()
}
}

</script>

<style lang="sass">
$MainColor: #77969A
$DarkMainColor: #255359
@mixin FlexSetting($justify-content:center, $align-items:center)
	display: flex
	justify-content: $justify-content
	align-items: $align-items
@mixin ButtonSetting
    background-color: #fff
    border: 1px solid $MainColor
    color: $MainColor
    padding: 5px 20px 
    &:hover
        cursor: pointer
        background-color: $MainColor
        color: #fff
        transition: 0.3s
        box-shadow: 2px 2px 5px rgba($DarkMainColor,0.5)
@mixin TitleSetting
    font-size: 36px
    color: #000
    font-weight: 500
.container
    +FlexSetting
    margin-top: 60px
    flex-direction: column
    .BookEdit
        +FlexSetting
        flex-direction: column
        padding: 0px 10px
        max-width: 100%
        .BookEdit_back
            align-self: flex-start
            margin-bottom: 10px
            +ButtonSetting
        .BookEdit_card
            padding: 20px 45px
            background-color: #fff
            box-shadow: 10px 10px 20px rgba(#000,0.5)
            max-width: 100%
            width: 600px
            .BookEdit_AlertError
                background-color: #EEA9A9 
                width: 100%
                margin: 10px 0px
            .BookEdit_title
                width: 100%
                +TitleSetting
            .BookEdit_author
                padding: 10px 0px
            .BookEdit_description
                width: 100%
                height: 100px
            input, textarea
                border: 1px solid #d9d9d9
                border-radius: 4px
                border-color: #ccc
                border-width: 1px
                border-image: none
                outline: none
                padding: 4px 11px
                margin: 5px 0px
            .BookEdit_submit
                +ButtonSetting
                text-align: center

</style>

<template>
<div class="container">
    <div class="BookCreate">
        <router-link class="BookCreate_back" to="/">＜返回圖書列表</router-link>
        <div class="BookCreate_card">
            <div class='title'>新增圖書</div>
            *表示為必填欄位
            <div class="BookCreate_AlertError"></div>
            <label for="title">標題*</label>
            <input type="text" name="title"  required="required" v-model= "newbook.title">
            <label for="author">作者*</label>
            <input type="text" name="author" required="required" v-model= "newbook.author">
            <label for="date">發行日期*</label>
            <a-date-picker class="datepiker" required="required"  name="" v-model= "newbook.publicationDate"></a-date-picker>
            <label for="description">簡介*</label>
            <textarea type="text" required="required" name="description" v-model= "newbook.description"></textarea>
            <div class="submit" @click="AddBook()">送出資料</div>
        </div>
    </div>
</div>
</template>

<script>
import {DatePicker} from "ant-design-vue"
import axios from 'axios'
import { mapState, mapMutations, mapActions} from 'vuex'
export default {
    data(){
        return{
            newbook:{
            }
        }
    },
    computed:{
        ...mapState(['books']),
        
    },
    methods:{
        AddBook(){
            if (!this.newbook.title|!this.newbook.author|!this.newbook.publicationDate|!this.newbook.description){
                const AlertBox = document.querySelector('.BookCreate_AlertError')
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
            } else {
            const Bookurl = "https://demo.api-platform.com/books"
            axios({
                method:'post',
                url: Bookurl,
                headers:{"accept": "application/json", "Content-Type": "application/json"},
                data:this.newbook
            }).then(res=>{
                alert(`新增成功！新增書籍資料如下：
                書名：${res.data.title}
                作者：${res.data.author}
                發行日期：${res.data.publicationDate}
                描述：${res.data.description}
                `)
                this.$router.push({path:`/`})
            }).catch(error=>{
                    if (error.response.data.detail='Internal Server Error'){
                        alert(error.response.data.detail)
                        this.$router.push({path:`/`})
                    }else{
                    const AlertBox = document.querySelector('.BookCreate_AlertError')
                    AlertBox.textContent=error.response.data.detail
                    }
                } 
            )
        }}
    },
    components:{
        DatePicker: DatePicker
    },
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
        background-color: $MainColor
        color: #fff
        transition: 0.3s
        box-shadow: 2px 2px 5px rgba($DarkMainColor,0.5)
.container 
    margin-top: 60px
    +FlexSetting
    flex-direction: column
.BookCreate_back
    align-self: flex-start
    margin-bottom: 10px
    +ButtonSetting
.BookCreate
    +FlexSetting
    flex-direction: column
    color: #fff
    padding: 0px 10px
    max-width: 100%
    max-width: 100%
    .BookCreate_AlertError
        background-color: #EEA9A9 
        width: 300px
        margin: 10px 0px
        text-align: center
    input,textarea,
        border: 1px solid #d9d9d9
        border-radius: 4px
        border-color: #ccc
        border-width: 1px
        border-image: none
        outline: none
        padding: 4px 11px
        margin: 10px 0px
        color: #000
        width: 300px
        max-width: 100%
        transition: 0s
        background-color: #fff
    .datepiker
        max-width: 100%
    textarea
        height: 100px
    label
        margin-bottom: 0
    .BookCreate_card
        +FlexSetting
        flex-direction: column
        padding: 20px 45px
        background-color: #77969A
        box-shadow: 10px 10px 20px rgba(#000,0.5)
        max-width: 100%
        .title
            font-size: 36px
            border-bottom: 1px solid #fff
            margin-bottom: 10px
        .submit
            border: 1px solid #fff
            padding: 10px 20px 
            margin-top: 20px
            &:hover
                cursor: pointer
                background-color: $DarkMainColor
                box-shadow: 2px 2px 5px rgba(#000,0.5)
        
</style>

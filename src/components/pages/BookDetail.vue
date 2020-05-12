<template>
<div class="container">
    <div class="BookDetail" v-for="book in SpecificBook">
        <router-link class="BookDetail_back" to="/">＜返回圖書列表</router-link>
        <div class="BookDetail_card">
            <div class="BookDetail_title">{{book.title}}</div>
            <div class="BookDetail_author">
                Author : {{book.author}}
                <br>
                Publication Date : {{book.publicationDate.slice(0,10)}}
            </div>
            <div class="BookDetail_description">
                <h5>DECRIPTION</h5>
                {{book.description}}
            </div>
            <div class="BookDatail_reviews" >
                <h5>REVIEWS</h5>
                <ul>
                    <li v-for="(review,id) in book.reviews">{{review.body}}</li>
                </ul>
            </div>
            <router-link class="BookDatail_edit" :to="'/BookEdit/'+$route.params.id">修改</router-link>
        </div>
    </div>
</div>
</template>

<script>
import { mapState, mapMutations, mapActions} from 'vuex'
export default {
    computed:{
        ...mapState(['books']),
        SpecificBook(){
            return this.books.filter(book=>book['@id'].slice(7)===this.$route.params.id)
        },
        

    },
    methods:{
        ...mapActions(['LoadBook']),
    },
    created(){
    this.$store.dispatch('LoadBook')
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
        background-color: $MainColor
        color: #fff
        transition: 0.3s
        box-shadow: 2px 2px 5px rgba($DarkMainColor,0.5)
@mixin TitleSetting
    font-size: 36px
    color: #000
    font-weight: 500
.container
    margin-top: 60px
    +FlexSetting
    flex-direction: column
    .BookDetail
        +FlexSetting
        flex-direction: column
        padding: 0px 10px
        max-width: 100%
        .BookDetail_back
            align-self: flex-start
            margin-bottom: 10px
            +ButtonSetting
        .BookDetail_card
            +FlexSetting(center,flex-start)
            flex-direction: column
            padding: 20px 45px
            background-color: #fff
            box-shadow: 10px 10px 20px rgba(#000,0.5)
            max-width: 100%
            width: 600px
            .BookDetail_title
                +TitleSetting
                width: 100%
                border-bottom: 1px solid #77969A
            .BookDetail_author
                padding: 10px 0px
                font-size: 16px
            .BookDatail_reviews
                margin-top: 10px
            .BookDatail_edit
                +ButtonSetting
</style>

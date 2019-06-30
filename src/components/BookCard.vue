<template>
    <div class="BookCard_wrapper">
            <router-link :to="'/book/'+book['@id'].slice(7)" class="BookCard_outline 2" v-for= "book in books" :key="book['@id']">
                    <div class="BookCard">
                        <div class='BookCard_intro'>
                            <div class="BookCard_title"><h4>{{book.title}}</h4></div>
                            <div class="BookCard_Author">By  {{book.author}} / {{book.publicationDate.slice(0,10)}}</div>
                            <div class="BookCard_Date"></div>
                        </div>
                        <div class="BookCard_detail">
                        查看詳情 >
                        </div>
                    </div>
            </router-link>
    </div>
</template>

<script>
export default {
    props: ['books'],
    computed:{
    }
}
</script>

<style lang='sass'>
$MainColor: #77969A
$DarkMainColor: #255359
@mixin FlexSetting($justify-content:center, $align-items:center)
	display: flex
	justify-content: $justify-content
	align-items: $align-items
.BookCard_wrapper
    padding: 10px 0px
    width: 100%
.BookCard
    +FlexSetting(space-between, center)
    flex-direction: row
    box-shadow: 2px 2px 5px rgba(#000,0.5)
    max-width: 100%
    padding: 10px 25px
    margin: 10px 0px
    color: #000
    .BookCard_detail
        display: none
        white-space: nowrap
    &:hover
        cursor: pointer
        box-shadow: 5px 5px 10px rgba(#000,0.5)
        margin: 20px 0px
        background-color: rgba(#77969A,0.3)
        padding: 20px
        transition: 0.3s
        max-width: 100%
        .BookCard_detail
            font-size: 20px
            display: block
            color: #fff
            text-shadow: 2px 2px 5px rgba(#255359,0.5)
    

</style>

<template>
    <div class="container">
        <div class="BookList_title_wrapper">
            <div class="BookList_title">圖書列表</div>
            <router-link class="BookList_CreateNew" to="/BookCreate">+ 新增圖書</router-link>
        </div>
        <BookCard v-bind:books="books"></BookCard>
    </div>
</template>

<script>
import BookCard from '../BookCard'
import { mapState, mapMutations, mapActions, mapGetters} from 'vuex'
export default {
    data(){
        return {
        }
    },
    computed:{
        ...mapState(['books']),
        
    },
    methods:{
    },
    components:{
        BookCard: BookCard
    },
    }
</script>

<style lang='sass'>
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
    +FlexSetting
    margin-top: 60px
    flex-direction: column
    .BookList_title_wrapper
        +FlexSetting(space-between,baseline)
        width: 100%
        padding-bottom: 10px 
        border-bottom: 1px solid #77969A
        .BookList_title
            +TitleSetting
    .BookList_CreateNew
        +ButtonSetting



</style>
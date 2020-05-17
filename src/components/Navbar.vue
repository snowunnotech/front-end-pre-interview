<template>
        <nav 
            id="navbar" 
        >
            <!-- 左邊按鈕 -->
            <template v-if="leftBtn">
                <button
                    v-if="leftBtn === 'default'"
                    class="btn btn-link text-white btn-left" 
                    @click="$router.go(-1)">

                    <font-awesome-icon icon="chevron-left"/>
                </button>

                <transition v-else name="fade" mode="out-in">
                    <button                        
                        class="btn btn-link text-white" 
                        @click="leftBtn.method"
                        :key="leftBtn.text">

                        <font-awesome-icon v-if="leftBtn.useIcon" :icon="leftBtn.icon" />

                        <template v-else>{{leftBtn.text}}</template>
                        
                    </button>
                </transition>
                    
            </template>

            <template v-else>
                <button disabled class="transparent btn-left"></button>
            </template>
            <!-- End 左邊按鈕 -->

            <h3 v-if="title" class="title text-white">
                {{title | limitText(20)}}
            </h3>

            <!-- 右邊按鈕 -->
            <template v-if="rightBtn">
                <button
                    class="btn btn-link text-white btn-right" 
                    @click="rightBtn.method">
                    <font-awesome-icon v-if="rightBtn.useIcon" :icon="rightBtn.icon" />
                    <template v-else>{{rightBtn.text}}</template>
                </button>  
            </template>

            <template v-else>
                <button disabled class="transparent btn-right"></button>
            </template>
            <!-- End 右邊按鈕 -->
        </nav>
</template>

<script>
export default {
    props: ["title", "leftBtn", "rightBtn"],
}
</script>

<style lang="scss">
    h3 {
        margin: 0;
        font-weight: normal;
    }
    
    #navbar {
        background: #FFC35F;
        position: fixed;
        top: 0;
        z-index: 200;
        width: 100%;
        max-width: $mobile-breakpoint;

        button {
            font-size: $font-lg;
            text-decoration: none;
            padding: 1rem;
        }        

        .title {
            font-size: 2.5rem;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            white-space: nowrap;
        }

        .btn-left {
            float: left;
        }

        .btn-right {
            float: right;
        }

        .transparent {
            opacity: 0;
        }


        // 動畫
        .fade-enter {
            opacity: 0;
        }

        .fade-enter-active {
            transition: all .25s ease;
        }

        .fade-leave {
        }

        .fade-leave-active {
            opacity: 0;
            transition: all .25s ease;
        }
    }

    
</style>
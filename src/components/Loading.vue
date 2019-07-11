<template>
    <div>
        <app-Navbar
            class="mb-5"
            :title="null"
            :leftBtn="null"
            :rightBtn="{text: 'New', method: gotoCreateBook}"
        ></app-Navbar>

        <div class="lds-css ng-scope">
            <div class="lds-spinner" style="width:100%;height:100%">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
</template>

<script>
import "../assets/loading.css";
import Navbar from "./Navbar";

export default {
    components: {
        appNavbar: Navbar
    },
    methods: {
        gotoCreateBook(){
            return;
        }
    }
}
</script>

<style lang="scss" scope>
    .lds-css {
        position: fixed;
        top: 0;
        width: 100%;
        max-width: $mobile-breakpoint;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        background: rgba(199, 199, 199, 0.295);
        z-index: 100;
    }
</style>

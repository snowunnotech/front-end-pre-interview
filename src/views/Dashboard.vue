<template>
    <div class="wrap">
        <div class="page">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.page{
    width: 70%;
    margin:0 auto;
    padding-top: 250px;
}
.wrap{
    background-image: url(../assets/bg.jpg);
    background-position: center center;
    background-size: cover;
    min-height: 1041px;
}
</style>

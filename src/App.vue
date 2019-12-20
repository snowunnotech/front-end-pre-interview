<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
export default {
    name: "App"
};
</script>

<style>
@import "bootstrap/dist/css/bootstrap.min.css";
body {
    height: 100%;
    width: 100vw;
    user-select: none;
    position: fixed;
    overflow: hidden;
    background: #e9ecef;
}
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    height: 100%;
}
</style>

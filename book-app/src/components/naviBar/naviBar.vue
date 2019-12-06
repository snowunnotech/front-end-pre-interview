<template>
    <div class="naviBar">
        <nav class="bg-dark navbar-dark">
            <div @click="redirect('/')">
                <a class="navbar-brand" href="#">BookStore</a>
            </div>
            <div @click="redirect('/')">
                <i class="fa fa-chevron-left" aria-hidden="true"></i>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'naviBar',
    data() {
        return  {
        }
    },
    methods: {
        redirect(url) {
            console.log(url)
            this.$router.push(url)
        },
    }
}
</script>

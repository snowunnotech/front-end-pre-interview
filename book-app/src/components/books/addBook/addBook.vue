<template>
    <div class="addBook">
        <div class="container">
            <div class="row">
                <div class="col text-center" @click="redirect('newBook')">
                    <i class="fas fa-plus-square" data-toggle="tooltip" data-placement="right" title="增加新書籍"></i>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'addBook',
    methods: {
        redirect(url) {
            this.$router.push(url)
        }
    }
}
</script>
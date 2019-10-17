<template lang="pug">
    v-dialog(v-model='model' scrollable :fullscreen="fullscreen" @click:outside="outside" persistent)
        v-card
            v-card-title
                v-row(no-gutters)
                    v-col.text-center
                        span {{ titleTxt }}
            v-card-text.ma-0.pa-0
                v-container(fluid)
            v-card-actions.pa-4
                v-btn(block color='primary' dark large @click="goDelete") {{ btnTxt }}
</template>
<script>
export default {
    model: {
        prop: 'active',
        event: 'update'
    },
    props: {
        active: {
            type: Boolean,
            default: false
        },
        item: {
            type: String,
            default: ''
        },
        fullscreen: {
            type: Boolean,
            default: false
        },
        maxWidth: {
            type: [String, Number],
            default: ''
        }
    },
    data: () => ({
        flag: false
    }),
    computed: {
        model: {
            get() {
                return this.active;
            },
            set(value) {
                if (typeof value === 'boolean') {
                    this.$emit('update', value);
                }
            }
        },
        btnTxt() {
            return this.flag ? 'Cancel' : 'Delete';
        },
        titleTxt() {
            return this.flag ? '你未取得權限 JWT token' : '是否刪除';
        }
    },
    methods: {
        goDelete() {
            this.flag = !this.flag;
            if (this.flag) {
                // @todo delete API
            } else {
                this.$nuxt.$emit('BOOK_REMOVE', '');
                this.$emit('close');
            }
        },
        outside() {
            this.$emit('close');
        }
    }
};
</script>

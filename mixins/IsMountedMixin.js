export const IsMountedMixin = {
    data: () => ({
        isMounted: false
    }),
    computed: {
        searchUri() {
            return this.$vuetify.breakpoint.mdAndDown ? '/search-m' : '/search';
        }
    },
    mounted() {
        this.isMounted = true;
    }
};
export default IsMountedMixin;

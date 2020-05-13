module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData:
              `@import "@/assets/sass/mixins.scss";
               @import "@/assets/sass/default.scss";`
      }
    }
  },
  devServer: {
    host: '0.0.0.0',
    hot: true
  }
}

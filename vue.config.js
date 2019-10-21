module.exports = {
    devServer: {
        open: true,
        host: 'localhost',
        port: 8080,
        proxy: {
            '/api': {
                target: 'https://demo.api-platform.com/',
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/api': '/'
                }
            },
        },
    },
    publicPath: './',
    css: {
        loaderOptions: {
            sass: {
                prependData: ` 
                    @import './src/assets/all.scss';
                    `
            }
        }
    },
}
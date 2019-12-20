import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PageDetail from '@/components/PageDetail'
import AdeNew from '@/components/AdeNew'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/pageDetail',
            name: 'PageDetail',
            component: PageDetail
        }, {
            path: '/adeNew',
            name: 'AdeNew',
            component: AdeNew
        }
    ]
})
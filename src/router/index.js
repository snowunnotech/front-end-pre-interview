import Vue from 'vue'
import Router from 'vue-router'
import Books from '@/components/Books'
import Book from '@/components/Book'
import Edit from '@/components/Edit'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Books',
            component: Books
        },
        {
            path: '/book/:id',
            name: 'Book',
            component: Book
        },
        {
            path: '/edit/:id',
            name: 'Edit',
            component: Edit
        }
    ]
})
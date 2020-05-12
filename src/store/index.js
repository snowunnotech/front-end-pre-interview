import Vuex from 'vuex';
import Vue from 'vue'
import axios from 'axios'
Vue.use(Vuex);
const store = new Vuex.Store({
    state:{
        books:[]
    },
    getters:{
    },
    mutations:{
        Loading(state,value){
            return state.books = value
        },
        
    },
    actions:{
        LoadBook(context){
            const Bookurl = "https://demo.api-platform.com/books"
            axios.get(Bookurl,{
                headers:{'accept': 'application/ld+json'}
            }).then(res=>{
                const books = res.data['hydra:member']
                context.commit('Loading',books)
                })
                .catch(error=>{
                    context.commit('Loading',[
                        {
                        "@id":"/books/123456789",
                        "isbn": "FakeData",
                        "title": "FakeData",
                        "description": "FakeData",
                        "author": "FakeData",
                        "publicationDate": "2019-06-30T17:46:27.513Z",
                        "reviews": [
                            {
                            "body": "FakeData"
                            }
                        ]
                        }
                    ])
                    alert(`${error.response.data['hydra:title']} : ${error.response.data['hydra:description']}
系統出現問題，請重整網頁或稍後再試`)    
                    })
                }
            
        },
    })


export default store
import * as mutationsType from './mutations_type.js'
import axios from 'axios'

export const getBooks = ({ commit }) => {
  axios.get('https://demo.api-platform.com/books')
  .then(response => {
    let books = response.data['hydra:member']
    commit(mutationsType.BUILD_BOOKS_LIST, books)
  })
  .catch(e => { console.log(e) })
  .then(() => {
    commit(mutationsType.SWITCH_LOADING)
  })
}

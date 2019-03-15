import Vue from 'vue'
import axios from 'axios'

const baseURL = 'https://demo.api-platform.com/books'
export const GetBookListApi = function ({
    commit
  }) {
    Vue.axios.get(baseURL,{
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Accept',
        'accept': 'application/ld+json'
      }
    }).then(function (response) {
        // handle success
        commit('getList', response.data['hydra:member'])
    })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
}

export const GetBookInfo = ({ commit, state }, id) => {
  console.log(state.BookList)
  let filterInfo = state.BookList.filter((obj) => {
    if (obj['@id'] === '/books/' + id) {
      return obj
    }
  })
  console.log(filterInfo)
  commit('getBookInfo', filterInfo)
}

export const POSTBookCreate = ({
  commit,
  state
}, axiosData) => {
  Vue.axios.post(baseURL,axiosData).then(res => {
      alert('add scuess')
    }).then(res => {
    })
}

export const PUTBookEdit = ({
  commit,
  state
}, id,axiosData) => {
  Vue.axios.put(baseURL+'/'+id,axiosData).then(res => {
    console.log(baseURL + '/' + id)
    console.log(res)
    alert('edit scuess')
  }).then(res => {})
}


// export const GetBookInfo = function ({
//   commit, state},id) {
//   Vue.axios.get('https://demo.api-platform.com/books/'+id, {
//       headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//         'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Accept',
//         'accept': 'application/ld+json'
//       }
//     }).then(function (response) {
//       // handle success
//       let filterInfo = state.BookList.filter((obj) => {
//         if (obj['@id'] === '/books/' + id) {
//           return obj
//         }
//       })
//       console.log(filterInfo)
//       commit('getBookInfo', filterInfo)
//       // commit('getBookInfo', response.data['hydra:member'])
//     })
//     .catch(function (error) {
//       // handle error
//       console.log(error);
//     })
//     .then(function () {
//       // always executed
//     });
// }
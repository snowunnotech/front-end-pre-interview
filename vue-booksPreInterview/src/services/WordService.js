import Api from '@/services/Api'
import axios from 'axios'

// export const actionGetBooks = ({
//   commit
// }) => {
//  Api.get()
//     .then((response) => {
//       commit(types.BOOK_LIST, response.data['hydra:member']);
//       console.log(response.data);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }
export default {
  getBookListApi(params) {
    axios({
        method: 'get',
        url: 'https://demo.api-platform.com/books'
      })
      .then(function (response) {
        return response.data
      });
    // return Api().get('/')
  },
  getBookInfo(params) {
    return Api().get('/' + params)
  },
}

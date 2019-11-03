import axios from './axios'

const url = 'https://demo.api-platform.com/books'

/**
 * [GET]
 * 取得書本列表
 * @param {Object} option
 *  @param {String} order[id] 排序(書本ID)
 *  @param {String} order[title] 排序(標題)
 *  @param {String} order[author] 排序(作者)
 *  @param {String} order[isbn] 排序(isbn)
 *  @param {String} title 書本標題
 *  @param {String} author 作者
 *  @param {Number} page 頁數
 */
function getBooks (option) {
  let params = Object.keys(option)
    .map(key => `${key}=${option[key]}&`)
    .join('')
    .slice(0, -1)
  console.log(params)
  return axios
    .get(`${url}?${params}`)
    .catch(e => e)
}

/**
 * [GET]
 *  取得單一書本
 */
function getBook (id) {
  return axios
    .get(`${url}/${id}`)
    .catch(e => e)
}

/**
 * [POST]
 * 新增書本
 * @param {Object} option
 *  @param {string} isbn  // ?
 *  @param {string} title
 *  @param {string} description
 *  @param {string} author
 *  @param {date} publicationDate
 *  @param {array[object]} reviews // ?
 */
function postNewBook (option) {
  return axios
    .post(`${url}`, option)
    .catch(e => e)
}

/**
 * [PATCH]
 * 更新書本資訊
 * @param {Object} option
 *  @param {string} isbn  // ?
 *  @param {string} title
 *  @param {string} description
 *  @param {string} author
 *  @param {date} publicationDate
 *  @param {array[object]} reviews // ?
 */
function patchBook (option, id) {
  console.log(option)
  return axios
    .patch(`${url}/${id}`, option, {
      headers: {
        'Content-Type': 'application/merge-patch+json'
      }
    })
    .catch(e => e)
}

export {
  getBooks,
  getBook,
  postNewBook,
  patchBook
}

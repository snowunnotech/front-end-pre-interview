const urlConfig = {
  books: 'https://demo.api-platform.com/books',
  review: 'https://demo.api-platform.com/reviews'
}

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
function getBookLists (option) {

  // compose options get params
  let options = Object.keys(option)
    .map(key => `${key}=${option[key]}&`)
    .join('')
    .slice(0, -1)
  return new Promise((resolve, reject) => {
    fetch(`${urlConfig['books']}?${options}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        resolve(data)
      })
      .catch((err) => {
        reject(err)
      })
  });
}

/**
 * [GET]
 *  取得單一書本資料
 */
function getBookDetail (id) {
  return new Promise((resolve, reject) => {
    fetch(`${urlConfig['books']}/${id}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
        resolve(data)
        /* dispatch('fetchBookDetails') */
      })
      .catch((err) => {
        reject(err)
      })
  });
}


export {
  getBookLists,
  getBookDetail
}
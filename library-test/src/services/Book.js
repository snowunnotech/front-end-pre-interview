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
        resolve(data)
        /* dispatch('fetchBookDetails') */
      })
      .catch((err) => {
        reject(err)
      })
  });
}

/**
 * [POST]
 * 新增書本
 * @param {Object} option
 *  @param {string} isbn 
 *  @param {string} title
 *  @param {string} description
 *  @param {string} author
 *  @param {date} publicationDate
 *  @param {array[object]} reviews
 */
function createBook (formData) {
  return new Promise((resolve, reject) => {
    fetch(`${urlConfig['books']}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'error',
      body: JSON.stringify(formData)
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if(data['@type'] === "hydra:Error") {
        reject(data['hydra:description'])
      } else {
        return data
      }
    })
    .catch((err) => {
      reject(err)
    })
  })
}

/**
 * [PATCH]
 * 更新書本資訊
 * @param {Object} option
 *  @param {string} isbn 
 *  @param {string} title
 *  @param {string} description
 *  @param {string} author
 *  @param {date} publicationDate
 *  @param {array[object]} reviews
 */
function updateBook (formData, id) {
  return new Promise((resolve, reject) => {
    fetch(`${urlConfig['books']}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/merge-patch+json'
      },
      redirect: 'error',
      body: JSON.stringify(formData)
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if(data['@type'] === "hydra:Error") {
        reject(data['hydra:description'])
      } else {
        return data
      }
    })
    .catch((err) => {
      reject(err)
    })
  })
}

export {
  getBookLists,
  getBookDetail,
  createBook,
  updateBook
}
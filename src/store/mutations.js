function setBooks (state, payload) {
  const bookList = {}
  for (let i = 0; i < payload.length; i++) {
    const val = payload[i]
    bookList[val['@id']] = val
  }
  state.bookList = bookList
  state.isBookListReady = true
}

function setBookInfo (state, payload) {
  const { book, cb } = payload
  cb(book)
  const bookId = book['@id']
  state.bookList[bookId] = book
}

const mutations = {
  setBooks,
  setBookInfo
}

export default mutations

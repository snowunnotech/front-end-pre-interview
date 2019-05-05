import axios from 'axios'

async function loadBooks (context) {
  try {
    const response = await axios.get('https://demo.api-platform.com/books')
    const bookList = response.data['hydra:member']
    context.commit('setBooks', bookList)
  } catch (error) {
    if (error && error.status !== 404) {
      throw (error)
    }
  }
}

async function getBookInfo (context, payload) {
  const { bookId, cb } = payload
  try {
    const response = await axios.get(`https://demo.api-platform.com/books/${bookId}`)
    const book = response.data
    context.commit('setBookInfo', { book, cb })
  } catch (error) {
    if (error && error.status !== 404) {
      throw (error)
    }
  }
}

async function saveBookInfo (context, payload) {
  const { bookId, userInput, cb } = payload
  try {
    const response = await axios.patch(`https://demo.api-platform.com${bookId}`, userInput)
    const book = response.data
    context.commit('setBookInfo', { book, cb })
  } catch (error) {
    if (error && error.status !== 404) {
      throw (error)
    }
  }
}

async function createBookInfo (context, payload) {
  const { userInput, cb } = payload
  try {
    const response = await axios.post('https://demo.api-platform.com/books', userInput)
    const book = response.data
    context.commit('setBookInfo', { book, cb })
  } catch (error) {
    if (error && error.status !== 404) {
      throw (error)
    }
  }
}

const actions = {
  loadBooks,
  getBookInfo,
  saveBookInfo,
  createBookInfo
}

export default actions

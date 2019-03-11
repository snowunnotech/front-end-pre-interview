import books from '@/data/books'

function getBooksByPage(page, perPage) {
  const length = books.data.length,
        pages = Math.ceil(length / perPage)

  const start = (page - 1) * perPage,
        end = start + perPage
  return page > pages ? [] : books.data.slice(start, end)
}
function randomString(length, letter = true) {
  const source = (letter ? 'abcdefghijklmnopqrstuvwxyz' : '') + '0123456789'

  let string = ''
  for(let i = 0; i < length; i++)
    string += source.charAt(Math.floor(Math.random() * source.length))

  return string
}
function simulateRequest(fn) {
  return new Promise((resolve, reject) => {
    const delay = Math.random() * 2000
    setTimeout(() => {
      const response = fn()
      resolve(response)
    }, delay)
  })
}

const routeRegex = /\/books\/([a-z0-9-]+)/
// Simulate RESTful API
const API = {
  // Get books or a book
  get: (url, { params: { page = 1, perPage = 6 } = {} } = {}) => {
    return simulateRequest(() => {
      if(routeRegex.test(url)) { // Get a book
        const id = url.match(routeRegex)[0],
              book = books.data.find(b => b.id == id)

        return book
      }
      else { // Get books
        const data = getBooksByPage(page, perPage)

        return {
            meta: {
              totalItems: books.data.length,
              itemsPerPage: perPage,
              currentPage: page
            },
            data: data
          }
      }
    })
  },
  // Add a book
  post: (url, { title, desc, author, date }) => {
    return simulateRequest(() => {
      const book = {
        id: `/books/${randomString(8)}-${randomString(4)}-${randomString(4)}-${randomString(4)}-${randomString(12)}`,
        type: 'Book',
        attributes: {
          isbn: `978-986-${randomString(3, false)}-${randomString(3, false)}-${randomString(1, false)}`,
          title: title,
          description: desc,
          author: author,
          publicationDate: date + 'T00:00:00+00:00'
        }
      }
      books.data = [book].concat(books.data)

      return book
    })
  },
  // Delete a book
  delete: (url) => {
    return simulateRequest(() => {
      const id = url.match(routeRegex)[0],
            bookIdx = books.data.findIndex(b => b.id == id)
      books.data.splice(bookIdx, 1)

      return true
    })
  },
  // Update a book
  patch: (url, { title, desc, author, date }) => {
    return simulateRequest(() => {
      const id = url.match(routeRegex)[0],
            bookIdx = books.data.findIndex(b => b.id == id)
      books.data[bookIdx].attributes.title = title
      books.data[bookIdx].attributes.description = desc
      books.data[bookIdx].attributes.author = author
      books.data[bookIdx].attributes.publicationDate = date

      return books.data[bookIdx]
    })
  }
}

export default API
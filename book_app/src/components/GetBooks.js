import React from 'react'
import { NavLink } from 'react-router-dom'

class GetBooks extends React.Component {
  constructor() {
    super()
    this.state = {
      books: [],
      booksList: [],
      bookNum: 5,
    }
  }
  doLoad = async () => {
    await this.setState({ bookNum: this.state.bookNum + 2 })
    let booksList = this.state.books.filter((val, ind) => {
      return ind <= this.state.bookNum
    })
    console.log(booksList)
    await this.setState({ booksList: booksList })
  }
  // hydra:member: Array(30)
  // 0:
  // @id: "/books/012dea03-aca6-4822-bc49-05c1261138fc"
  // @type: "http://schema.org/Book"
  // author: "Alf Rosenbaum MD"
  // description: "Assumenda fugiat doloremque ab unde a. Culpa voluptatum molestias facere totam similique voluptatum. Ab quo error rerum accusantium laborum veniam."
  // isbn: "9792355638656"
  // publicationDate: "1983-07-20T00:00:00+00:00"

  componentDidMount() {
    fetch(`https://demo.api-platform.com/books?page=${this.props.lastPage}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(res => {
        return res.json()
      })
      .then(obj => {
        console.log(obj)
        this.setState({ books: obj['hydra:member'] })
        let booksList = obj['hydra:member'].filter((val, ind) => {
          return ind <= this.state.bookNum
        })
        console.log(booksList)
        this.setState({ booksList: booksList })
      })
  }
  doNew = () => {
    window.location = '/New/books'
  }
  render() {
    return (
      <div className="container GetBooks">
        <div className="d-flex justify-content-end nav bg-warning align-items-center">
          <button className="p-3 text-center" onClick={this.doNew}>
            New
          </button>
        </div>
        <div className="d-flex flex-wrap justify-content-center book-container text-center">
          {this.state.booksList.map(val => (
            <NavLink
              className="m-3 book-list"
              key={val['@id']}
              to={`${val['@id']}`}
            >
              <i className="fas fa-times d-block text-center mb-3" />
              <div className="mt-2 mb-4">
                <h3>{val.title}</h3>
              </div>
              <div className="mt-3 mb-1 date">
                <h4>PublishDate</h4>
                <h5>{String(val.publicationDate).split('T')[0]}</h5>
              </div>
            </NavLink>
          ))}
          <button
            type="button"
            className="btn px-5 py-2 d-block"
            onClick={this.doLoad}
          >
            LoadMore
          </button>
        </div>
      </div>
    )
  }
}

export default GetBooks

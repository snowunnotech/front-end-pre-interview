import React from 'react'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'

class BookDetail extends React.Component {
  constructor() {
    super()
    this.state = {
      bookDetail: '',
    }
  }
  componentDidMount() {
    let theUrl = this.props.location.pathname

    fetch(`https://demo.api-platform.com${theUrl}`, {
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
        this.setState({ bookDetail: obj })
      })
  }
  render() {
    return (
      <>
        <div className="container BookDetail">
          <div className="d-flex justify-content-between nav bg-warning align-items-center">
            <NavLink className="p-3 text-center d-block" to={'/'}>
              Back
            </NavLink>
            <h3>{this.state.bookDetail.title}</h3>
            <NavLink
              className="p-3 text-center d-block"
              to={`/Edit${this.props.location.pathname}`}
            >
              Edit
            </NavLink>
          </div>
          <div className="book-container">
            <div className="d-flex justify-content-between text-center p-3">
              <h5>Author:{this.state.bookDetail.author}</h5>
              <h5>
                {String(this.state.bookDetail.publicationDate).split('T')[0]}
              </h5>
            </div>
            <h3 className="p-3">{this.state.bookDetail.description}</h3>
          </div>
        </div>
      </>
    )
  }
}

export default withRouter(BookDetail)

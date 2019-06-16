import React from 'react'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'
import moment from 'moment'

class EditBook extends React.Component {
  constructor() {
    super()
    this.state = {
      dateNow: '',
      bookauthor: '',
      bookdate: '',
      bookdescription: '',
      submitauthor: 1,
      submitdate: 1,
      submitdescription: 1,
      authorShow: 0,
      dateShow: 0,
      descriptionShow: 0,
      Url: '',
      response: { success: 0, show: 0 },
    }
  }
  // {author: { data: '', submit: 0 }},
  //         {date: { data: '', submit: 0 }},
  //         {description: { data: '', submit: 0 }},
  async componentDidMount() {
    let dateNow = moment().format('YYYY-MM-DD')
    await this.setState({ dateNow: dateNow })
    let theUrl = String(this.props.location.pathname).split('Edit')[1]
    this.setState({ Url: theUrl })
    await fetch(`https://demo.api-platform.com${theUrl}`, {
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
        this.setState({
          bookauthor: obj.author,
          bookdate: String(obj.publicationDate).split('T')[0],
          bookdescription: obj.description,
        })
      })
  }

  //this.value=this.value.replace(/[^u4e00-u9fa5w]/g,'')
  checkChange = type => event => {
    switch (type) {
      case 'author':
        console.log(event.target.value)
        if (
          !event.target.value ||
          /[^u4e00-u9fa5w]/g.test(event.target.value)
        ) {
          this.setState({
            authorShow: 1,
            bookauthor: event.target.value,
            submitauthor: 0,
          })
        } else {
          this.setState({
            authorShow: 0,
            bookauthor: event.target.value,
            submitauthor: 1,
          })
        }

        return
      case 'date':
        console.log(event.target.value)
        if (!event.target.value) {
          this.setState({
            dateShow: 1,
            bookdate: event.target.value,
            submitdate: 0,
          })
        } else {
          this.setState({
            dateShow: 0,
            bookdate: event.target.value,
            submitdate: 1,
          })
        }
        return
      case 'description':
        console.log(event.target.value)
        if (!event.target.value) {
          this.setState({
            descriptionShow: 1,
            bookdescription: event.target.value,
            submitdescription: 0,
          })
        } else {
          this.setState({
            descriptionShow: 0,
            bookdescription: event.target.value,
            submitdescription: 1,
          })
        }
        return
      default:
    }
  }
  save = () => {
    if (
      this.state.bookauthor &&
      this.state.submitauthor &&
      this.state.submitdate &&
      this.state.bookdate &&
      this.state.submitdescription &&
      this.state.bookdescription
    ) {
      let body = {
        author: this.state.bookauthor,
        publicationDate: this.state.bookdate,
        description: this.state.bookdescription,
      }
      console.log(JSON.stringify(body))
      fetch(`https://demo.api-platform.com${this.state.Url}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(body),
      })
        .then(res => {
          console.log(res.status)
          if (res.status == 200) {
            return res.json()
          } else {
            return 'update_fail'
          }
        })
        .then(obj => {
          if (obj === 'update_fail') {
            this.setState({ response: { success: 0, show: 1 } })
          } else {
            this.setState({ response: { success: 1, show: 1 } })
          }
        })
    }
  }
  render() {
    if (!this.state.bookdescription) {
      return null
    }
    return (
      <>
        <div className="container EditBook">
          <div className="d-flex justify-content-between nav bg-warning align-items-center">
            <NavLink
              className="p-3 text-center  "
              to={String(this.props.location.pathname).split('Edit')[1]}
            >
              Return
            </NavLink>

            <button className="p-3 text-center" onClick={this.save}>
              Save
            </button>
          </div>
          <div className="book-container p-3">
            <div
              className={
                this.state.response.show ? 'show-response mb-2' : 'd-none'
              }
            >
              {this.state.response.success == 1
                ? '資料更新成功'
                : '資料更新失敗'}
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control author"
                placeholder="Author"
                value={this.state.bookauthor}
                onChange={this.checkChange('author')}
              ></input>
              <small
                id="AuthorHelp"
                className={
                  this.state.authorShow == 1 ? 'form-text text-muted' : 'd-none'
                }
              >
                請輸入作者（不接受任何符號）
              </small>
            </div>
            <div className="form-group">
              <input
                type="date"
                className="form-control date"
                placeholder="Publishdate"
                value={this.state.bookdate}
                max={this.state.dateNow}
                onChange={this.checkChange('date')}
              ></input>
              <small
                id="dateHelp"
                className={
                  this.state.dateShow == 1 ? 'form-text text-muted' : 'd-none'
                }
              >
                請輸入出版日期
              </small>
            </div>
            <div className="form-group">
              <textarea
                className="form-control description"
                placeholder="Description"
                onChange={this.checkChange('description')}
                defaultValue={this.state.bookdescription}
              ></textarea>
              <small
                id="dateHelp"
                className={
                  this.state.descriptionShow == 1
                    ? 'form-text text-muted'
                    : 'd-none'
                }
              >
                請輸入描述內容
              </small>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default withRouter(EditBook)

import React from 'react'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'
import moment from 'moment'

class NewBook extends React.Component {
  constructor() {
    super()
    this.state = {
      dateNow: '',
      booktitle: '',
      bookauthor: '',
      bookdate: '',
      bookdescription: '',
      submittitle: 0,
      submitauthor: 0,
      submitdate: 0,
      submitdescription: 0,
      titleShow: 1,
      authorShow: 1,
      dateShow: 1,
      descriptionShow: 1,
      Url: '',
      response: { success: 0, show: 0 },
    }
  }
  // {author: { data: '', submit: 0 }},
  //         {date: { data: '', submit: 0 }},
  //         {description: { data: '', submit: 0 }},

  //this.value=this.value.replace(/[^u4e00-u9fa5w]/g,'')
  checkChange = type => event => {
    switch (type) {
      case 'title':
        console.log(event.target.value)
        if (
          !event.target.value ||
          /[^u4e00-u9fa5w]/g.test(event.target.value)
        ) {
          this.setState({
            titleShow: 1,
            booktitle: event.target.value,
            submittitle: 0,
          })
        } else {
          this.setState({
            titleShow: 0,
            booktitle: event.target.value,
            submittitle: 1,
          })
        }

        return
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
      this.state.booktitle &&
      this.state.submittitle &&
      this.state.bookauthor &&
      this.state.submitauthor &&
      this.state.submitdate &&
      this.state.bookdate &&
      this.state.submitdescription &&
      this.state.bookdescription
    ) {
      let body = {
        title: this.state.booktitle,
        author: this.state.bookauthor,
        publicationDate: this.state.bookdate,
        description: this.state.bookdescription,
      }
      console.log(JSON.stringify(body))
      fetch(`https://demo.api-platform.com/books`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(body),
      })
        .then(res => {
          console.log(res.status)
          if (res.status == 200 || 201) {
            return res.json()
          } else {
            return 'update_fail'
          }
        })
        .then(obj => {
          console.log(obj)
          if (obj === 'update_fail') {
            this.setState({ response: { success: 0, show: 1 } })
          } else {
            this.setState({ response: { success: 1, show: 1 } })
          }
        })
    }
  }
  render() {
    return (
      <>
        <div className="container NewBook">
          <div className="d-flex justify-content-between nav bg-warning align-items-center">
            <NavLink
              className="p-3 text-center  "
              to={String(this.props.location.pathname).split('New')[0]}
            >
              Return
            </NavLink>
            <h3>新增書籍</h3>
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
                ? '資料新增成功'
                : '資料新增失敗'}
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control title"
                placeholder="Title"
                value={this.state.booktitle}
                onChange={this.checkChange('title')}
              ></input>
              <small
                id="titleHelp"
                className={
                  this.state.titleShow == 1 ? 'form-text text-muted' : 'd-none'
                }
              >
                請輸入標題（不接受任何符號）
              </small>
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
export default withRouter(NewBook)

import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GetBooks from './components/GetBooks'
import BookDetail from './components/BookDetail'
import EditBook from './components/EditBook'
import NewBook from './components/NewBook'
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      lastPage: '',
    }
  }
  async componentDidMount() {
    await fetch('https://demo.api-platform.com/books', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(res => {
        return res.json()
      })
      .then(obj => {
        console.log(obj['hydra:view']['hydra:last'].split('=')[1]) //get LastPage
        this.setState({
          lastPage: obj['hydra:view']['hydra:last'].split('=')[1],
        })
      })
  }
  render() {
    if (!this.state.lastPage) {
      return null
    }
    return (
      <Router>
        <>
          <Switch>
            <Route
              exact
              path="/"
              component={() => <GetBooks lastPage={this.state.lastPage} />}
            />
            <Route path="/books/:id" component={BookDetail} />
            <Route path="/Edit/books/:id" component={EditBook} />
            <Route path="/New/books" component={NewBook} />
          </Switch>
        </>
      </Router>
    )
  }
}

export default App

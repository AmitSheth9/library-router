import React from 'react'
import reactDom from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BookDetail from './views/Books/BookDetail'
import BookList from './views/Books/BookList'
import Home from './views/Home/Home'
import './App.css'
/* eslint-disable react/jsx-props-no-spreading */

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/books" render={(routerProps) => <BookList {...routerProps} />} />
          <Route exact path="/books/:id">
            <BookDetail />
          </Route>
        </Switch>
      </Router>
    </main>
  )
}

export default App

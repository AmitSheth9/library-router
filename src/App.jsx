import React from 'react'
import reactDom from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BookDetail from './views/Books/BookDetail'
import BookList from './views/Books/BookList'

import './App.css'
/* eslint-disable react/jsx-props-no-spreading */

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <Router>
        <Switch>
          <Route path="/" exact render={(routerProps) => <BookList {...routerProps} />} />
          <Route path="/Booklist/:id" render={(routerProps) => <BookDetail {...routerProps} />} />
        </Switch>
      </Router>
    </main>
  )
}

export default App

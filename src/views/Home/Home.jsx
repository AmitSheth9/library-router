import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <div>Welcome to the Book Library</div>
      <Link to="/books">
        <div>Book List</div>
      </Link>
    </div>
  )
}

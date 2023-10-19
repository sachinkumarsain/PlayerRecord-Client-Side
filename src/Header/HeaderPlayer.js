import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

function HeaderPlayer() {
  return (
    <>
    <header>
          <h1>Player Record</h1>
          <Link to="/">Home</Link>
          <Link to="/admin">Admin</Link>
    </header>
    </>
  )
}

export default HeaderPlayer
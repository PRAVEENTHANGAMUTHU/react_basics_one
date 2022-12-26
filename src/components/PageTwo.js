import React from 'react'
import { Link } from 'react-router-dom'
const PageTwo = () => {
  return (
    <div>
        <h1>PageTwo</h1>
        <Link to='/'>Page One</Link>
        <br/>
        <Link to='/pagethree'>Page Three</Link>
        <br/>
        <Link to='/pagefour'>Page Four</Link>
        </div>
  )
}

export default PageTwo
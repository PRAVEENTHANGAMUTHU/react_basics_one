import React from 'react'
import { Link } from 'react-router-dom'
const PageOne = () => {
  return (
    <div>
        <h1>Page One</h1>
        <Link to='/pagetwo'>Page Two</Link>
        <br/>
        <Link to='/pagethree'>Page Three</Link>
        <br/>
        <Link to='/pagefour'>Page Four</Link>

    </div>
  )
}

export default PageOne
import React from 'react'
import { Link } from 'react-router-dom'
const PageThree = () => {
  return (
    <div>
        <h1>PageThree</h1>
        <Link to='/'>Page One</Link>
        <br/>
        <Link to='/pagetwo'>Page Two</Link>
        <br/>
        <Link to='/pagefour'>Page Four</Link>
        </div>
  )
}

export default PageThree
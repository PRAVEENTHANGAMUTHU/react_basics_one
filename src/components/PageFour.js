import React from 'react'
import { Link } from 'react-router-dom'
const PageFour = () => {
  return (
    <div>
        <h1>PageFour</h1>
        <Link to='/'>Page One</Link>
        <br/>
        <Link to='/pagetwo'>Page Two</Link>
        <br/>
        <Link to='/pagethree'>Page Three</Link>
    </div>
  )
}

export default PageFour
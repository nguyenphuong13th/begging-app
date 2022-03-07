import React from 'react'
import{Link} from 'react-router-dom'
function FooterComponent() {
  return (
    <div>
        <Link to='/'>Back</Link>
        <h1>This is a footer</h1>
    </div>
  )
}

export default FooterComponent
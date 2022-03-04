import React from 'react'

function BodyContentComponent() {
  return (
    <div className='BodyComponent d-flex-column justify-content-between'>
        <h1>Fun Fact About React</h1>
        <ul>
            <li className='ListItems'>
                Was First release in 2003
            </li>
            <li className='ListItems'>
                Was originally developed by Jordan Walke
            </li>
            <li className='ListItems'>
                Has Well over 100K stars on Github
            </li>
            <li className='ListItems'>
                Is maintained by Facebook
            </li>
            <li className='ListItems'>
                Powerd thousand of enterprise apps,including mobile apps
            </li>
        </ul>
    </div>
  )
}

export default BodyContentComponent
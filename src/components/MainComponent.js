import React from 'react'
import TitleComponent from './TitleComponent'
import BodyContentComponent from './BodyContentComponent'
import ContactComponent from './ContactComponent'
function MainComponent() {
  return (
    <div>
        {/* <TitleComponent/> */}
        {/* <BodyContentComponent/> */}
        <ContactComponent
        name='Anthony'
        title='Software Engineer'
        phone='095632145'
        style={{color:'red'}}
        />
    </div>
  )
}

export default MainComponent
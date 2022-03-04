import React from 'react'
import '../assets/custom.css'
import logo from '../assets/2048px-HP_logo_2012.svg.png'
function TitleComponent() {
  return (
    <div className='d-flex align-items-center justify-content-between TitleComponent SubTitlecolor'>
      <div className='d-flex align-items-center'>
        <img src={logo} className="LogoSize"></img>
        <h2 className='Titlecolr'>ReactFact</h2>
      </div>
      <div>
        <h5>React Courses -Project1</h5>
      </div>
    </div>
  );
}

export default TitleComponent
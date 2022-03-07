import React from 'react'
import {Routes, Route,Link } from 'react-router-dom'
import TitleComponent from './TitleComponent'
import BodyContentComponent from './BodyContentComponent'
import ContactComponent from './ContactComponent'
import HomeComponent from './HomeComponent'
import FooterComponent from './FooterComponent'
function MainComponent() {
  return (
    <div>
      {/* <TitleComponent/> */}
      {/* <BodyContentComponent/> */}
      <Routes>
        <Route path='/' element={<HomeComponent />} />
        <Route path='/contact/:name' element={<ContactComponent
          name="Anthony"
          title="Software Engineer"
          phone="095632145"
          style={{ color: "red" }}
        />} />
        <Route path='/footer' element={<FooterComponent />} />
      </Routes>
    </div>
  );
}
export default MainComponent
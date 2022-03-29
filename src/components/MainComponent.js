import React from 'react'
import{useState,useEffect} from 'react'
import {Routes, Route } from 'react-router-dom'
import {useSelector,useDispatch} from'react-redux'
import TitleComponent from './TitleComponent'
import BodyContentComponent from './BodyContentComponent'
import ContactComponent from './ContactComponent'
import HomeComponent from './HomeComponent'
import FooterComponent from './FooterComponent'
import ContactDetailed from './ContactDetailed'
import {fetchStaff,pathUser,postUser} from '../redux/ActionCreator'

function MainComponent() {
    // const[allStaff,SetAllStaff]=useState(staffinfo);
    // function HandleAddStaff(newStaff) {
    //   SetAllStaff([...staffinfo,newStaff])
    // }
    const dispatch=useDispatch();
    const allStaff=useSelector(state=>state.staffs.staffs)
    console.log('allStaff',allStaff)
    useEffect(()=>{
      dispatch(fetchStaff())},[]
    );
    useEffect(()=>{
      dispatch(postUser())},[]
    )
    useEffect(()=>{
      dispatch(pathUser())},[]
    )
  return (
    <div>
      {/* <TitleComponent/> */}
      {/* <BodyContentComponent/> */}
      <Routes>
        <Route path='/' element={<HomeComponent />} />
        <Route path='/contact' element={<ContactComponent staffinforesult={allStaff} postUser={postUser}/>} />
        <Route path='/footer' element={<FooterComponent />} />
        <Route path='/contact/:id' element={<ContactDetailed staffinforesult={allStaff} pathUser={pathUser}/>}/>
      </Routes>
    </div>
  );
}
export default MainComponent
import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Body from './Body'
export default function contact() {
  return (
    <div>
   <div>
    <Header/>
   </div>
   <div className=' bg-[#fff]'>
    <Body/>
   </div>
   <Footer/>
    </div>
  )
}

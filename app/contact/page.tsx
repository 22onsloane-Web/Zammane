"use client"
import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Body from './Body'
export default function contact() {
  return (
    <div>
   <div className='absolute w-full -mt-[1vw] px-[5vw]'>
    <Header/>
   </div>
   <div className=' bg-[#fff]'>
    <Body/>
   </div>
    <div className='bottom-0'>
    <Footer/>
    </div>
    </div>
  )
}

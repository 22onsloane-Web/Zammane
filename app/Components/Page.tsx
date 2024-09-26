"use client"
import React from 'react'
import Header from './Header'
import Banner from './Banner'
import Section from './Section'
import Partner from './Partner'
import Fouter from './Footer'
export default function Page() {
  return (
  <div className='bg-[#ffffff]'>
      {/* <div>
      <Header/>
    </div> */}
    <div className=' min-h-screen'>
      <Banner/>
    </div>
    <div className=''>
      <Partner/>
      <Section/>
      <div className='w-full bottom-0'>
      <Fouter/>
    </div>
    </div>
   
  </div>
  )
}

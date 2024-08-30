"use client"
import React from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import Section from '../Components/Section'
import Partner from '../Components/Partner'
import Fouter from '../Components/Footer'
import Body from './Body'
import header from '../Image/header.jpg'
import Image from 'next/image'

export default function Page() {
  return (
  <div className='bg-[#ffffff]'>
      <div className='shadow-xl'>
      <Header/>
     
    </div>
    
    <div className='h-screen bg-[#fff] text-[#000] '>
      <Image src={header} className='w-full h-auto ab' alt=''/>
      <p className='text-center font-bold text-white text-[90px] mt-[-400px]'>Projects</p>
        <div className='bg-[#fff]  h-[500px] mt-[90px]'>
          
        </div>
      </div>
    <div className='w-full '>
      <Fouter/>
    </div>
   
  </div>
  )
}

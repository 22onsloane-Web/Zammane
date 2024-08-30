"use client"
import React from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import Section from '../Components/Section'
import Partner from '../Components/Partner'
import Fouter from '../Components/Footer'
import Body from './Body'
import header from '../Image/Untitled (8)_page-0001.jpg'
import pic1 from '../Image/service-1.jpg'
import pic2 from '../Image/service-2.jpg'
import pic3 from '../Image/service-3.jpg'
import pic4 from '../Image/service-4.jpg'
import pic5 from '../Image/service-5.jpg'
import pic6 from '../Image/service-6.jpg'
import pic7 from '../Image/service-7.png'
import {Montserrat} from "next/font/google"
import Image from 'next/image'
const montserrat = Montserrat({ subsets: ["latin"] });
export default function Page() {
  return (
  <div className='bg-[#ffffff]'>
      <div className='shadow-xl'>
      <Header/>
     
    </div>
    
    <div className='h-[700px] bg-[#fff] text-[#000] '>
   <Image src={header} className='w-full h-[600px]' alt=''/>
      <div className={montserrat.className}>
      <p className='text-center font-bold text-white text-[90px] mt-[-400px]'>Services</p>
      </div>
        
      </div>
      <div className='mx-auto flex justify-center items-center h-auto pb-10 text-black'>
          <div>
            <div className='flex gap-x-5 '>

             <div className='shadow-xl'>
             <Image src={pic1}   alt=''/>
             <div className={montserrat.className}>
            <div className='shadow-xl px-2 rounded-[10px]'>
            <p className='font-bold py-2'>Engineering</p>
             <p className='w-[350px] h-[150px] px-1 font-light'>Zammane Engineering provides sustainable and evidence-based infrastructure solutions through designing, manufacturing, and integrating connected solutions.</p>
              </div>
              </div>

             </div>
             <div>
             <Image src={pic2}   alt=''/>
              <div className={montserrat.className}>
            <div className='shadow-xl px-2 rounded-[10px]'>
            <p className='font-bold py-2'>Rigging and Logistics</p>
             <p className='w-[350px] h-[150px] px-1 font-light'>Zammane Projects is a logistics company that offers high-quality services throughout the logistics chain.</p>
              </div>
              </div>
             </div>
             <div>
             <Image src={pic3}   alt=''/>
              <div className={montserrat.className}>
            <div className='shadow-xl px-2 rounded-[10px]'>
            <p className='font-bold py-2'>Mining</p>
             <p className='w-[350px] h-[150px] px-1 font-light'>Zammane aims to deliver exceptional service quality and efficiency through its plant rentals and mining services.</p>
              </div>
              </div>
             </div>
            </div>

            <div className='flex gap-x-5 mt-5'>

              <div>
              <Image src={pic4}   alt=''/>
              <div className={montserrat.className}>
            <div className='shadow-xl px-2 rounded-[10px]'>
            <p className='font-bold py-2'>Banking Services</p>
             <p className='w-[350px] h-[150px] px-1 font-light'>In addition to providing banking solutions, we have assisted clients in the banking sector with various services such as data center relocation and full technical installation.</p>
              </div>
              </div>
              </div>
              <div>
              <Image src={pic5}   alt=''/>
              <div className={montserrat.className}>
            <div className='shadow-xl px-2 rounded-[10px]'>
            <p className='font-bold py-2'>Construction</p>
             <p className='w-[350px] h-[150px] px-1 font-light'>Zammane is a construction and infrastructure developer committed to promoting sustainable economic growth, social transformation, and development in South Africa.</p>
              </div>
              </div>
              </div>
              <div>
              <Image src={pic6}   alt=''/>
              <div className={montserrat.className}>
            <div className='shadow-xl px-2 rounded-[10px]'>
            <p className='font-bold py-2'>I.T</p>
             <p className='w-[350px] h-[150px] px-1 font-light'>We are a provider of sustainable and cost-effective ICT-based business solutions. Using world-class technology and best practices, our solutions are designed to optimize performance and align with your strategic goals.</p>
              </div>
              </div>
              </div>
              </div>

              <div className='flex gap-x-5 mt-5'>

              <div>
              <Image src={pic7}   alt=''/>
              <div className={montserrat.className}>
            <div className='shadow-xl px-2 rounded-[10px]'>
            <p className='font-bold py-2'>Manufacturing</p>
             <p className='w-[350px] h-[150px] px-1 font-light'>To enhance employment opportunities in South Africa, partnerships will be formed with industry leaders and the government to expand capacity and reach.</p>
              </div>
              </div>
              </div>
              {/* <div>
              <Image src={pic1}   alt=''/>
              <div className={montserrat.className}>
            <div className='shadow-xl px-2 rounded-[10px]'>
            <p className='font-bold py-2'>Engineering</p>
             <p className='w-[350px] h-[150px] px-1 font-light'>Zammane Engineering provides sustainable and evidence-based infrastructure solutions through designing, manufacturing, and integrating connected solutions.</p>
              </div>
              </div>
              </div>
              <div>
              <Image src={pic1}   alt=''/>
              <div className={montserrat.className}>
            <div className='shadow-xl px-2 rounded-[10px]'>
            <p className='font-bold py-2'>Engineering</p>
             <p className='w-[350px] h-[150px] px-1 font-light'>Zammane Engineering provides sustainable and evidence-based infrastructure solutions through designing, manufacturing, and integrating connected solutions.</p>
              </div>
              </div>
              </div> */}
              </div>
          </div>
        </div>
    <div className='w-full '>
      <Fouter/>
    </div>
   
  </div>
  )
}

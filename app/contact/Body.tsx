/* eslint-disable react/no-unescaped-entities */
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
import img1 from '../Image/smarthome.png'
import img2 from '../Image/Untitled (69)_page-0001.jpg'
import {Montserrat} from "next/font/google"
import Image from 'next/image'
import { GiBank } from 'react-icons/gi'
import { HiOutlineLightBulb } from 'react-icons/hi'
import { FaHandshake } from 'react-icons/fa6'
import { GoHorizontalRule } from 'react-icons/go'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import { IoIosMail } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoClose } from 'react-icons/io5'

const montserrat = Montserrat({ subsets: ["latin"] });
export default function Page() {
  return (
  <div className='bg-[#ffffff] text-[#3b3b3b]'>
    
    <div className='absolute w-full -mt-[1vw] px-[5vw]'>
      <Header/>
    </div>
    
    <div className=' bg-[#fff] text-[#000] '>
   <Image src={img2} className='w-full ' alt=''/>
      <div className={montserrat.className}>
      <p className=' font-bold text-white text-[2.5vw] mt-[-14vw]  px-[10vw]'>Contact</p>
      <p className='px-[10vw] text-[#FFF] text-[1.2vw] font-medium'>Providing the best customer support.</p>
      </div>   
      </div> 

      <div className='justify-center flex pt-[15vw] '>
        <div className=' flex gap-x-[6vw]'>
        <div>
          <p className='font-medium text-[1vw]'>CONTACT WITH US </p>
          <p className='font-bold text-[2.5vw] w-[30vw]'>Have questions? Feel free to write us</p>
          <div className='flex mt-[1vw] gap-x-[1vw]'>
          <div className='flex justify-center'>
           <IoIosMail className='text-white text-[3.5vw] bg-[#d94948] p-[0.5vw] rounded-[10px] '/>
           </div>
           <p className='py-[1vw] font-semibold text-[0.8vw]'>info@zammane.com</p>
          </div>

          <div className='flex mt-[1vw] gap-x-[1vw]'>
          <div className='flex justify-center'>
          <BiSolidPhoneCall className='text-white text-[3.5vw] bg-[#d94948] p-[0.5vw] rounded-[10px] '/>
           </div>
           <div className='text-[0.8vw] mt-[0.5vw]'>
           <p className='font-semibold '>(+27) 10 824 9014</p>
           <p className=' font-semibold '>(+27) 21 001 3544 </p>
           </div>
          </div>

          <div className='flex mt-[1vw] gap-x-[1vw]'>
          <div className='flex justify-center'>
          <FaMapLocationDot className='text-white text-[3.5vw] bg-[#d94948] p-[0.5vw] rounded-[10px] '/>
           </div>
           <p className='py-[0.6vw] font-semibold text-[0.8vw] w-[10vw]'>66 Regency Drive, Route 21 Business Park, Centurion</p>
          </div>
          
        </div>

        <div className='shadow-xl px-[3vw] h-fit rounded-[10px]'>
          <div className='flex gap-x-[3vw]'>
            <div>
            <p className='font-medium text-[1vw]'>Name*</p>
            <input type="text" placeholder='Enter your name' className='font-medium text-[1vw] border-b-[1px] outline-none  py-[0.3vw] w-full'  />
            </div>
            <div>
            <p className='font-medium text-[1vw]'>Surname*</p>
            <input type="text" placeholder='Enter your surname' className='font-medium text-[1vw] border-b-[1px] outline-none  py-[0.3vw] w-full'  />
            </div>
          </div>

          <div className='flex gap-x-[3vw] mt-[1vw]'>
            <div>
            <p className='font-medium text-[1vw]'>Phone*</p>
            <input type="text" placeholder='Enter your phone number' className='font-medium text-[1vw] border-b-[1px] outline-none  py-[0.3vw] w-full'  />
            </div>
            <div>
            <p className='font-medium text-[1vw]'>Email*</p>
            <input type="text" placeholder='Enter your email address' className='font-medium text-[1vw] border-b-[1px] outline-none  py-[0.3vw] w-full'  />
            </div>
          </div>

          <div className='flex gap-x-[3vw] mt-[1vw]'>
            <div className='w-full'>
            <p className='font-medium text-[1vw]'>Subject*</p>
            <input type="text" placeholder='Enter the subject of your request' className='font-medium text-[1vw] border-b-[1px] outline-none  py-[0.3vw] w-full'  />
            </div>
    
          </div>

          <div className='flex gap-x-[3vw] mt-[1vw]'>
            <div className='w-full'>
            <p className='font-medium text-[1vw]'>Message*</p>
            <textarea placeholder='Write a message' className='font-medium text-[1vw] border-b-[1px] h-[4vw] outline-none  py-[0.3vw] w-full'  />
            </div>
    
          </div>
          <div className='py-[1vw] text-white'>
          <div className='bg-[#040914] flex px-6 py-[0.75vw] rounded-[10px] gap-x-3  w-fit hover:scale-110 transition duration-300 hover:ease-in-out hover:cursor-pointer'>
                  <div className='text-[18px] font-semibold'>
                    <p>Submit</p>
                  </div>
                      </div>
          </div>
        </div>
        </div>
      </div>

      <div className='flex w-full justify-between bg-[#040914] px-[2.5vw] py-[3vw] mt-[5vw] '>
        <div>
            <p className='text-[2.5vw] text-[#fff]'>Frequently asked <span className='text-[#747474]'>questions</span></p>
        </div>

        <div className='w-[40vw] space-y-[2vw]'>
            <div className='flex  justify-between  bg-[#fff] text-[#3d3d3d] px-[2vw] py-[0.7vw] text-[1.1vw] font-medium rounded-[10px] hover:cursor-pointer'>
                <p>How does Zammane ensure quality in equipment testing ?</p>
                <IoClose className={`text-[#cc1616] text-[1.4vw] mt-[0.1vw] rotate-45 hover:rotate-0 transition duration-900 `} />
            </div>

            <div className='flex  justify-between  bg-[#fff] text-[#3d3d3d] px-[2vw] py-[0.7vw] text-[1.1vw] font-medium rounded-[10px] hover:cursor-pointer'>
                <p>How can Zammane support my energy project needs ?</p>
                <IoClose className={`text-[#cc1616] text-[1.4vw] mt-[0.1vw] rotate-45 hover:rotate-0 transition duration-900 `} />
            </div>
            <div className='flex  justify-between  bg-[#fff] text-[#3d3d3d] px-[2vw] py-[0.7vw] text-[1.1vw] font-medium rounded-[10px] hover:cursor-pointer'>
                <p>How does Zammane help with equipment refurbishment ?</p>
                <IoClose className={`text-[#cc1616] text-[1.4vw] mt-[0.1vw] rotate-45 hover:rotate-0 transition duration-900 `} />
            </div>
            <div className='flex  justify-between  bg-[#fff] text-[#3d3d3d] px-[2vw] py-[0.7vw] text-[1.1vw] font-medium rounded-[10px] hover:cursor-pointer'>
                <p>How does Zammane customize power solutions for various sectors ?</p>
                <IoClose className={`text-[#cc1616] text-[1.4vw] mt-[0.1vw] rotate-45 hover:rotate-0 transition duration-900 `} />
            </div>
            <div className='flex  justify-between  bg-[#fff] text-[#3d3d3d] px-[2vw] py-[0.7vw] text-[1.1vw] font-medium rounded-[10px] hover:cursor-pointer'>
                <p>How does Zammane ensure expert service on projects ?</p>
                <IoClose className={`text-[#cc1616] text-[1.4vw] mt-[0.1vw] rotate-45 hover:rotate-0 transition duration-900 `} />
            </div>
        </div>
      </div>
     
      <div className='mt-[15vw]'>
        <div className='justify-center flex'>
          <p className='text-center font-medium text-[2.5vw] bg-[#cc1616] text-white w-fit  px-[2vw] rounded-[15px] absolute'>Our Head Office</p>
        </div>
      <iframe className='w-full h-[700px] mt-[2vw]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.267882536155!2d28.255494900000002!3d-25.8606593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9567ad764bb9eb%3A0xf44b6c3ff9c1ad62!2s66%20Regency%20Dr%2C%20Route%2021%20Business%20Park%2C%20Centurion%2C%200178!5e0!3m2!1sen!2sza!4v1725525096718!5m2!1sen!2sza"></iframe>
      </div>

   
  </div>
  )
}

import Image from 'next/image'
import React from 'react'
import logo from '../image/logo.png'
import { FaPhone } from "react-icons/fa6";
import {Open_Sans} from "next/font/google"
import thislogo from "../Image/Zammane Logo Redesignpng-02.png"

const open_Sans = Open_Sans({ subsets: ["latin"] });

export default function Footer() {
  return (
    <div className='bg-[#0a1635] w-full h-[500px]'>
      <div className='flex items-center justify-center mx-auto '>
        <div className='flex gap-x-[60px] pt-[80px] border-b-[1px] pb-[3vw] border-[#3b3b3b]'>
            <div className='-pt-10 '>
            <div className={open_Sans.className}>
            {/* <span className="self-center text-2xl font-srextrabold whitespace-nowrap  font-Open_Sans text-white ">ZAMMANE</span> */}
            <Image src={thislogo} className='w-[10vw] h-auto '  alt=''/>
        </div>
            </div>
            <div className='pt-5 '>
                <p className='font-bold text-[13px] text-white'>NAVIGATION</p>
                <div className='text-[#666b6a] hover:text-[#8aa19d] font-bold mt-3  text-[14px] space-y-4'>
                    <p>Home</p>
                    <p>About</p>
                    <p>Blog</p>
                    <p>Contact Us</p>
                </div>
            </div>
            <div className='pt-5 '>
                <p className='font-bold text-[13px] text-white'>PROGRAMMES</p>
                <div className=' font-bold mt-3 text-[14px] space-y-4'>
                <p className='text-[#666b6a] hover:text-[#8aa19d]'>Short Learning Programs</p>
                <p className='text-[#666b6a] hover:text-[#8aa19d]'>QCTO Accredited Programs</p>
                <p className='text-[#666b6a] hover:text-[#8aa19d]'>Solar-PV & Energy Audit Program</p>
                <p className='text-[#666b6a] hover:text-[#8aa19d]'>Community Development Programs</p>
                </div>
            </div>
            <div className='pt-5 '>
                <p className='font-bold text-[13px] text-white'>LEGAL</p>
                <div  className='text-[#666b6a] hover:text-[#8aa19d] font-bold mt-3  text-[14px] space-y-4'>
                  <p className='text-[#666b6a] hover:text-[#8aa19d]'>Terms of Use</p>
                  <p className='text-[#666b6a] hover:text-[#8aa19d]'>Privacy Policy</p>
                  <p className='text-[#666b6a] hover:text-[#8aa19d]'>Legal Notice</p>
                </div>
            </div>
            <div className='pt-5 '>
                <p className='font-bold text-[13px] text-white'>TRAINING HOURS</p>
                <div className='text-[#666b6a] hover:text-[#8aa19d] font-bold mt-3  text-[14px] space-y-4'>
                <p className='text-[#666b6a] hover:text-[#8aa19d]'> Sunday to friday</p>
                <p className='text-[#666b6a] hover:text-[#8aa19d]'> 9:00 AM – 15:00 PM</p>
                </div>
            </div>

        </div>
      
        </div>
        <div className='flex items-center justify-center mx-auto text-white mt-[3vw]'>
        <div className='flex justify-evenly items-center mx-auto gap-x-[100px]'>
            <div>
            <p className=''> GRACE ARTISAN SCHOOL Made In South Africa</p> 
            <p className=''>dony reated By Spiral8Studio Copyright  2024.</p>
            </div>
            <div>
            <p className='w-[250px]'> Wedgefield Office Park 17 Muswell Road, Bryanston Johannesburg, 2021 South Africa</p> 
   
            </div>
            <div>
           <div className='flex gap-x-2'><FaPhone className='mt-1' /> <p className=''>+27 (0) 63 680 916</p> </div>
           <div className='flex gap-x-2'><FaPhone className='mt-1' /> <p className=''>+27 (0) 63 680 916</p> </div>
           <div className='flex gap-x-2'><FaPhone className='mt-1' /> <p className=''>+27 (0) 63 680 916</p> </div>
           
            </div>
      </div>
    </div>
    </div>
  )
}

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
import img2 from '../Image/smarthome2.png'
import thislogo from "../Image/Zammane Logo Redesignpng-04.png"
import img3 from '../Image/Untitled (70)_page-0001.jpg'
import {Montserrat} from "next/font/google"
import Image from 'next/image'
import { GiBank, GiBrickWall, GiMineTruck } from 'react-icons/gi'
import { HiOutlineLightBulb } from 'react-icons/hi'
import { FaHandshake, FaLaptopCode } from 'react-icons/fa6'
import { GoHorizontalRule } from 'react-icons/go'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import {motion} from "framer-motion"
import { FaMapLocationDot } from "react-icons/fa6";
import { IoClose } from 'react-icons/io5'
import { FaArrowRightLong } from "react-icons/fa6";
import Footer from '@/app/Components/Footer'
import { MdOutlineDisplaySettings, MdOutlineEngineering, MdOutlinePrecisionManufacturing } from 'react-icons/md'
import { GrAtm } from 'react-icons/gr'
import Link from 'next/link'
const montserrat = Montserrat({ subsets: ["latin"] });
export default function Page() {
  return (
  <div className='bg-[#ffffff] text-[#3b3b3b]'>
    
    <div className='absolute w-full -mt-[1vw] px-[5vw]'>
      <Header/>
    </div>
    
    <div className='h-[700px] bg-[#fff] text-[#000] '>
   <Image src={img3} className='w-full ' alt=''/>
      <div className={montserrat.className}>
      <p className=' font-bold text-white text-[2.5vw] mt-[-14vw]  px-[10vw]'>Services</p>
      <p className='px-[10vw] text-[#FFF] text-[1.2vw] font-medium'>Providing the best Services to customers.</p>
      </div>
        
      </div> 
     
      <div className='pt-[2vw] pb-[1vw] flex justify-center items-center text-center  '>
        <div className='flex gap-x-[1vw]'>
          <div className='hover:animate-pulse transition duration-300 hover:cursor-pointer'>
           <div className='flex justify-center'>
           <FaHandshake className='text-white text-[4.5vw] bg-[#d94948] p-[1vw] rounded-full '/>
           </div>
           <div className='bg-[#fff]  mt-[0vw] shadow-xl py-[2vw]'>
            <p className='text-[1.5vw] font-bold'>Integrity</p>
            <p className='w-[20vw] text-[0.9vw] pt-[1vw] '>Our unwavering commitment to honesty, ethics, and trust in every interaction.</p>
           </div>
          </div>

          <div className='hover:animate-pulse transition duration-300 hover:cursor-pointer'>
           <div className='flex justify-center'>
           <HiOutlineLightBulb className='text-white text-[4.5vw] bg-[#d94948] p-[1vw] rounded-full '/>
           </div>
           <div className='bg-[#fff]  mt-[0vw] shadow-xl py-[2vw]'>
            <p className='text-[1.5vw] font-bold'>Innovation</p>
            <p className='w-[20vw] text-[0.9vw] pt-[1vw] '>Unlocking tomorrow's opportunities through today's innovative solutions.</p>
           </div>
          </div>
          <div className='hover:animate-pulse transition duration-300 hover:cursor-pointer'>
           <div className='flex justify-center'>
           <GiBank className='text-white text-[4.5vw] bg-[#d94948] p-[1vw] rounded-full '/>
           </div>
           <div className='bg-[#fff]  mt-[0vw] shadow-xl py-[2vw]'>
            <p className='text-[1.5vw] font-bold'>Profitability</p>
            <p className='w-[20vw] text-[0.9vw] pt-[1vw] '>Maximizing profitability through strategic growth and efficiency.</p>
           </div>
          </div>
        </div>
      </div>

        <div className='bg-[#f3f3f3] mt-[3vw]'>
        <div className='justify-center text-center flex pt-[5vw]'>
        <div>
        <div className='flex justify-center'>
        <GoHorizontalRule className='relative -mt-[0.6vw] text-[2.5vw] w-[4vw] rounded-[15px]'/>
        <p className='text-[1vw] font-medium'>OUR PROJECTS</p>
        <GoHorizontalRule className='relative -mt-[0.6vw] text-[2.5vw] w-[4vw] rounded-[15px]'/>
        </div>
        <p className='font-bold leading-[3vw] text-[2.5vw] text-[#3a3a3a] w-[40vw] font-sans'>Empowering Your Business with Versatile Solutions</p>
        </div>
      </div>
      <div className=' justify-center text-center flex pt-[4vw]'>
          <div>
          <div className=' justify-center text-center flex pt-[4vw] pb-[5vw]'>
          <div>
            <div>
            <motion.div  initial={{y:100, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:1.2}} viewport={{once:true}} className='flex gap-x-[1vw] pb-[1vw]'>
                
                <Link href='./services/engineering'>
                <div className='bg-[#fff] shadow-xl rounded-[10px] hover:scale-90 transition duration-300 hover:cursor-pointer'>
                  <Image src={pic1} className='w-[20vw] h-auto rounded-t-[10px]' alt='' />
                  <div className='flex justify-center relative -mt-[2.2vw]'>
                     <MdOutlineEngineering className='text-white text-[4.5vw] bg-[#d94948] p-[1vw] rounded-full '/>
                  </div>
                  <div className='pb-[2vw] pt-[1vw] space-y-[0.5vw]'>
                    <p className='font-semibold text-[1.1vw] text-[#3a3a3a]'>Engineering</p>
                    <p >Where comfort meets convenience</p>
                  </div>
                </div>
                </Link>
                <div className='bg-[#fff] shadow-xl rounded-[10px] hover:scale-90 transition duration-300 hover:cursor-pointer'>
                  <Image src={pic2} className='w-[20vw] h-auto rounded-t-[10px]' alt='' />
                  <div className='flex justify-center relative -mt-[2.2vw]'>
                  <MdOutlineDisplaySettings className='text-white text-[4.5vw] bg-[#d94948] p-[1vw] rounded-full '/>
                  </div>
                  <div className='pb-[2vw] pt-[1vw] space-y-[0.5vw]'>
                    <p className='font-semibold text-[1.1vw] text-[#3a3a3a]'>Rigging and Logistics</p>
                    <p >Where comfort meets convenience</p>
                  </div>
                </div>
                <div className='bg-[#fff] shadow-xl rounded-[10px] hover:scale-90 transition duration-300 hover:cursor-pointer'>
                  <Image src={pic3} className='w-[20vw] h-auto rounded-t-[10px]' alt='' />
                  <div className='flex justify-center relative -mt-[2.2vw]'>
                  <GiMineTruck className='text-white text-[4.5vw] bg-[#d94948] p-[1vw] rounded-full '/>
                  </div>
                  <div className='pb-[2vw] pt-[1vw] space-y-[0.5vw]'>
                    <p className='font-semibold text-[1.1vw] text-[#3a3a3a]'>Mining</p>
                    <p >Where comfort meets convenience</p>
                  </div>
                </div>
              </motion.div>

              <motion.div  initial={{y:100, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:1.2}} viewport={{once:true}} className='flex gap-x-[1vw] pb-[1vw]'>
                <div className='bg-[#fff] shadow-xl rounded-[10px] hover:scale-90 transition duration-300 hover:cursor-pointer'>
                  <Image src={pic4} className='w-[20vw] h-auto rounded-t-[10px]' alt='' />
                  <div className='flex justify-center relative -mt-[2.2vw]'>
                     <GrAtm className='text-white text-[4.5vw] bg-[#d94948] p-[1vw] rounded-full '/>
                  </div>
                  <div className='pb-[2vw] pt-[1vw] space-y-[0.5vw]'>
                    <p className='font-semibold text-[1.1vw] text-[#3a3a3a]'>Banking Services</p>
                    <p >Where comfort meets convenience</p>
                  </div>
                </div>
                <div className='bg-[#fff] shadow-xl rounded-[10px] hover:scale-90 transition duration-300 hover:cursor-pointer'>
                  <Image src={pic5} className='w-[20vw] h-auto rounded-t-[10px]' alt='' />
                  <div className='flex justify-center relative -mt-[2.2vw]'>
                  <GiBrickWall  className='text-white text-[4.5vw] bg-[#d94948] p-[1vw] rounded-full '/>
                  </div>
                  <div className='pb-[2vw] pt-[1vw] space-y-[0.5vw]'>
                    <p className='font-semibold text-[1.1vw] text-[#3a3a3a]'>Construction</p>
                    <p >Where comfort meets convenience</p>
                  </div>
                </div>
                <div className='bg-[#fff] shadow-xl rounded-[10px] hover:scale-90 transition duration-300 hover:cursor-pointer'>
                  <Image src={img1} className='w-[20vw] h-auto rounded-t-[10px]' alt='' />
                  <div className='flex justify-center relative -mt-[2.2vw]'>
                    <FaLaptopCode className='text-white text-[4.5vw] bg-[#d94948] p-[1vw] rounded-full '/>
                  </div>
                  <div className='pb-[2vw] pt-[1vw] space-y-[0.5vw]'>
                    <p className='font-semibold text-[1.1vw] text-[#3a3a3a]'>I.T</p>
                    <p >Where comfort meets convenience</p>
                  </div>
                </div>
              </motion.div>
              <motion.div  initial={{y:100, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:1.2}} viewport={{once:true}} className='flex gap-x-[1vw] pb-[1vw]'>
                <div className='bg-[#fff] shadow-xl rounded-[10px] hover:scale-90 transition duration-300 hover:cursor-pointer'>
                  <Image src={pic7} className='w-[20vw] h-auto rounded-t-[10px]' alt='' />
                  <div className='flex justify-center relative -mt-[2.2vw]'>
                  <MdOutlinePrecisionManufacturing  className='text-white text-[4.5vw] bg-[#d94948] p-[1vw] rounded-full '/>
                  </div>
                  <div className='pb-[2vw] pt-[1vw] space-y-[0.5vw]'>
                    <p className='font-semibold text-[1.1vw] text-[#3a3a3a]'>Manufacturing</p>
                    <p >Where comfort meets convenience</p>
                  </div>
                </div>
                {/* <div className='bg-[#fff] shadow-xl rounded-[10px] hover:scale-90 transition duration-300 hover:cursor-pointer'>
                  <Image src={img1} className='w-[20vw] h-auto rounded-t-[10px]' alt='' />
                  <div className='flex justify-center relative -mt-[2.2vw]'>
                     <FaHandshake className='text-white text-[4.5vw] bg-[#d94948] p-[1vw] rounded-full '/>
                  </div>
                  <div className='pb-[2vw] pt-[1vw] space-y-[0.5vw]'>
                    <p className='font-semibold text-[1.1vw] text-[#3a3a3a]'>Automation Technology</p>
                    <p >Where comfort meets convenience</p>
                  </div>
                </div>
                <div className='bg-[#fff] shadow-xl rounded-[10px] hover:scale-90 transition duration-300 hover:cursor-pointer'>
                  <Image src={img1} className='w-[20vw] h-auto rounded-t-[10px]' alt='' />
                  <div className='flex justify-center relative -mt-[2.2vw]'>
                     <FaHandshake className='text-white text-[4.5vw] bg-[#d94948] p-[1vw] rounded-full '/>
                  </div>
                  <div className='pb-[2vw] pt-[1vw] space-y-[0.5vw]'>
                    <p className='font-semibold text-[1.1vw] text-[#3a3a3a]'>Automation Technology</p>
                    <p >Where comfort meets convenience</p>
                  </div>
                </div> */}
              </motion.div>
            </div>
          </div>
      </div>
          </div>
      </div>
        </div>

        <div className='h-[40vw] py-[5vw] px-[12vw]'> 
          <div className='flex justify-center gap-x-[3vw] bg-[#ffff] shadow-xl pb-[5vw] '>
            <Image src={img2} className='w-[30vw] rounded-[20px]' alt='' />
            <div className='py-[2vw] space-y-[1vw]'>
              <p className='font-semibold text-[3vw]'>Engineering</p>
            <p className='w-[30vw] text-[0.9vw]'>Zammane Engineering is dedicated to providing sustainable and evidence-based infrastructure solutions that not only meet current demands but also anticipate future needs. Through meticulous design, precision manufacturing, and the seamless integration of connected technologies, they create innovative solutions that enhance the resilience and efficiency of infrastructure projects. Their commitment to sustainability ensures that every project contributes to a greener future, while their focus on evidence-based practices guarantees that each solution is grounded in solid research and proven methodologies. By combining cutting-edge technology with a deep understanding of infrastructure challenges, Zammane Engineering delivers comprehensive, forward-thinking solutions that drive progress and sustainability in the built environment.</p>
            </div>
          </div>
          <div className='w-full  flex justify-center px-[0vw] -mt-[18vw]'>
          <div className='w-full  flex justify-between '>
            <div className='bg-[#000] bg-opacity-20 rounded-full hover:cursor-pointer hover:bg-black  hover:text-white'>
            <RiArrowLeftSLine className='text-[2.5vw] p-[0.3vw]'/>
            </div>
            <div className='bg-[#000] bg-opacity-20 rounded-full hover:cursor-pointer hover:bg-black  hover:text-white'>
              <RiArrowRightSLine className='text-[2.5vw] p-[0.3vw]'/>
            </div>
          </div>
       </div>  
        </div>
    <div className='w-full '>
      <Fouter/>
    </div>
   
  </div>
  )
}

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
// components/Carousel.js
import { useState, useEffect, useRef } from 'react';
import heoro1 from "../Image/header1.jpg"
import heoro2 from "../Image/header2.jpg"
import heoro3 from "../Image/header3.jpg"
import hero4 from "../Image/heropic1.jpg"
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { FaArrowRight, FaArrowRightLong } from "react-icons/fa6";
import Link from 'next/link';
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import {motion} from "framer-motion"
import {Montserrat} from "next/font/google"
import Video from './Video';
import Header from './Header';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';

const montserrat = Montserrat({ subsets: ["latin"] });
const Slider = () => {
  const[hide, setHide] = useState('block');

  function Moveit() {
    setHide('hidden')
  }

  return (
    <div className={`text-white `} onMouseLeave={Moveit}>
      
      <motion.div initial={{y: 200, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:1.2}}  viewport={{once:true}} className='px-[3vw] py-[1vh] '>
          <div className='bg-[#0a1635] w-full h-[45vw] rounded-[20px] shadow-xl pb-[2vw]'>
            <div className={`bg-${hide}`}>
            <Header/>
            </div>
       
         <div className='pt-[4vw] px-[3vw] flex justify-center'>
            <div>
            <motion.div initial={{scale:0, opacity:0}} whileInView={{scale:1, opacity:1}} transition={{duration:2}} viewport={{once:true}} className='w-[40vw]'>
              <p className='text-[3vw] font-bold  leading-[4vw] w-[35vw] text-[#fff]'>Africa's Leading <span className='text-[#787c7e]'>Industry Corporation</span> Multiple Industry All Solution </p>
            </motion.div>
      
             <div>
             <motion.div initial={{scale:0, opacity:0}} whileInView={{scale:1, opacity:1}} transition={{duration:2.2}}  viewport={{once:true}} className='flex w-full mt-[2vw]  px-0 '>
              <div className=' bottom-0  w-[37vw] text-[0.9vw]'>
                <p className='text-[#bbbbbd] font-bold text-[1vw] w-[30vw]'>Dive into innovation with Zammane Company, showcasing cutting-edge solutions in Engineering, Rigging, Logistics, Construction, and IT services. Explore our advanced approach to efficiency and performance.</p>
              <div className='py-8 flex gap-x-[2vw] font-semibold'>
              <div className='bg-[#040914] flex px-6 py-[0.75vw] justify-center rounded-[10px] gap-x-3 text-center w-[13vw] shadow-xl hover:scale-110 transition duration-300 hover:ease-in-out hover:cursor-pointer'>
                  <div className='text-[18px] font-semibold text-center'>
                    <p>Learn More </p>
                      </div>
                        {/* <div className='py-[4px] '>
                        <FaArrowRightLong className='text-[18px]' />
                        </div> */}
                      </div>
                   

                      <div className='bg-[#f4c41b] flex px-6 py-[0.75vw] rounded-[10px] gap-x-3  w-fit hover:scale-110 transition duration-300 hover:ease-in-out hover:cursor-pointer'>
                  <div className='text-[18px] font-semibold'>
                    <p>Book a free discovery call </p>
                      </div>
                        {/* <div className='py-[4px] '>
                        <FaArrowRightLong className='text-[18px]' />
                        </div> */}
                      </div>
                      
              </div>
              </div>
            </motion.div>
            </div> 
            </div>
             <div>
             <motion.div initial={{y:100, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:2}} viewport={{once:true}} className='flex ml-[5vw]' >
                <img      
                src={hero4.src}
                alt="" className="transition-opacity duration-900 w-[32vw] h-auto -ml-[0vw] mt-[2vw] rounded-[15px]"  />      
              </motion.div>
              {/* <motion.div initial={{y:100, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:2}}  viewport={{once:true}} className='flex ml-[5vw]' >
                <div className='border-[5px] w-[25vw] h-[18vw] ml-[10vw] border-[#3a3a3a] '>
                </div>
                <img      
                src={hero4.src}
                alt="" className="transition-opacity duration-900 w-[25vw] h-[18vw] -ml-[27vw] mt-[2vw] rounded-[15px]"  />      
              </motion.div> */}
            </div>
         </div>

         <div className='w-full  flex justify-center px-[2vw] -mt-[14vw]'>
          <div className='w-full  flex justify-between '>
            <div className='bg-[#000] bg-opacity-50 rounded-full hover:cursor-pointer hover:bg-white  hover:text-black'>
            <RiArrowLeftSLine className='text-[3vw] p-[0.5vw]'/>
            </div>
            <div className='bg-[#000] bg-opacity-50 rounded-full hover:cursor-pointer hover:bg-white  hover:text-black'>
              <RiArrowRightSLine className='text-[3vw] p-[0.5vw]'/>
            </div>
          </div>
       </div>       
          </div>
        </motion.div>
    </div>
)}

export default Slider















// <div id="default-carousel" className="relative w-full pb-0" data-carousel="slide">
    //   {/* Carousel wrapper */}
    

    //   <div className='w-full   hidden  md:w-full   mt-[-10px]  lg:px-[0]    lg:w-full h-[200px] md:flex lg:flex'>
    
    // {/* <div className='w-full h-full absolute ' >
    //          <Video />
    //          </div> */}
   
    //  </div>
    
    //   <div>
    //     <div className='text-white font-bold absolute flex mx-auto items-center justify-center w-full mt-[100px]'>
    //        <div className={montserrat.className}>
    //        <p className='text-[55px] font-extrabold'>World's Leading Industry Corporation</p>
    //        <p className='text-[55px] font-extrabold w-[430px] '>MULTIPLE INDUSTRY ALL SOLUTION</p>
    //        <div className='gap-x-[60px] flex '>           
    //         <button className='text-[18px] md:text-[14px] lg:text-[14px] rounded-[2px] relative mt-5 p-4 border-[2px] border-[#fffb27] bg-[#fffb27]  text-[#000] font-bold'>LEARN MORE</button>
    //         {/* <button className='text-[18px] md:text-[14px] lg:text-[14px] rounded-[2px] border-[2px] border-[#fff] relative mt-5 py-4 px-10 hover:border-[#fff] hover:bg-white hover:text-black text-[#fff] font-semibold'>Buy Prepaid Electricity</button> */}
    //         </div>
       
    //        </div>
         
    //     </div>
      
    //   </div>


    // </div>
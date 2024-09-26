/* eslint-disable react/no-unescaped-entities */
"use client"
import React from 'react'
import Header from '@/app/Components/Header'
import header from '@/app/Image/Untitled (8)_page-0001.jpg'
import pic1 from '@/app/Image/engineers.jpg'
import pic2 from '@/app/Image/service-2.jpg'
import pic3 from '@/app/Image/service-3.jpg'
import pic4 from '@/app/Image/service-4.jpg'
import pic5 from '@/app/Image/service-5.jpg'
import pic6 from '@/app/Image/service-6.jpg'
import pic7 from '@/app/Image/service-7.png'
import img1 from '@/app/Image/smarthome.png'
import img2 from '@/app/Image/Untitled (69)_page-0001.jpg'
import img3 from '@/app/Image/Untitled (70)_page-0001.jpg'
import {Montserrat} from "next/font/google"
import Image from 'next/image'
import { GiBank, GiBrickWall, GiMineTruck } from 'react-icons/gi'
import { HiOutlineLightBulb } from 'react-icons/hi'
import { FaHandshake, FaLaptopCode } from 'react-icons/fa6'
import { GoHorizontalRule } from 'react-icons/go'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import { IoIosMail } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";
import {motion} from "framer-motion"
import { FaMapLocationDot } from "react-icons/fa6";
import { IoClose } from 'react-icons/io5'
import { FaArrowRightLong } from "react-icons/fa6";
import Footer from '@/app/Components/Footer'
import { MdOutlineDisplaySettings, MdOutlineEngineering, MdOutlinePrecisionManufacturing } from 'react-icons/md'
import { GrAtm } from 'react-icons/gr'


const montserrat = Montserrat({ subsets: ["latin"] });
export default function Page() {
  return (
  <div className='bg-[#ffffff] text-[#3b3b3b] '>
    
    <motion.div  initial={{y:-100, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:1.2}} viewport={{once:true}} className='absolute w-full -mt-[1vw] px-[5vw]'>
      <Header/>
    </motion.div>
    
    <div className='h-[500px] bg-[#fff] text-[#000] '>
   <Image src={img3} className='w-full h-[500px]' alt=''/>
   <motion.div  initial={{y:200, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:1.2}} viewport={{once:true}} className={montserrat.className}>
      <p className=' font-bold text-white text-[2.5vw] mt-[-14vw] px-[10vw]'>Engineering</p>
      <p className='px-[10vw] text-[#FFF] text-[1.2vw] font-medium'>Providing the best customer support.</p>
      </motion.div>   
      </div> 

      
      <div className='justify-center flex'>
        <div className='flex gap-x-[5vw]'>
          <motion.div  initial={{y:200, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:1.2}}  viewport={{once:true}} className='space-y-[1vw]'>
            <div className='pb-[0.5vw] mt-[6vw] text-[1.2vw] font-semibold text-start '>
                <p className='w-[17vw]'>OUR SERVICES</p>
            </div>
                <div className='flex justify-between w-[20vw] text-[1vw] font-medium px-[1.5vw] hover:cursor-pointer text-white bg-[#d94948] py-[0.7vw] rounded-[5px] transition duration-500 hover:ease-linear'>
                    <p>Engineering</p>
                    <FaArrowRightLong className='mt-[0.2vw]'/>
                </div>
                <div className='flex justify-between w-[20vw] text-[1vw] font-medium px-[1.5vw] bg-[#f4f3f8] hover:cursor-pointer hover:text-white hover:bg-[#d94948] py-[0.7vw] rounded-[5px] transition duration-500 hover:ease-linear'>
                    <p>Rigging and Logistics</p>
                    <FaArrowRightLong className='mt-[0.2vw]'/>
                </div>
                <div className='flex justify-between w-[20vw] text-[1vw] font-medium px-[1.5vw] bg-[#f4f3f8] hover:cursor-pointer hover:text-white hover:bg-[#d94948] py-[0.7vw] rounded-[5px] transition duration-500 hover:ease-linear'>
                    <p>Mining</p>
                    <FaArrowRightLong className='mt-[0.2vw]'/>
                </div>
                <div className='flex justify-between w-[20vw] text-[1vw] font-medium px-[1.5vw] bg-[#f4f3f8] hover:cursor-pointer hover:text-white hover:bg-[#d94948] py-[0.7vw] rounded-[5px] transition duration-500 hover:ease-linear'>
                    <p>Banking Services</p>
                    <FaArrowRightLong className='mt-[0.2vw]'/>
                </div>
                <div className='flex justify-between w-[20vw] text-[1vw] font-medium px-[1.5vw] bg-[#f4f3f8] hover:cursor-pointer hover:text-white hover:bg-[#d94948] py-[0.7vw] rounded-[5px] transition duration-500 hover:ease-linear'>
                    <p>Construction</p>
                    <FaArrowRightLong className='mt-[0.2vw]'/>
                </div>
                <div className='flex justify-between w-[20vw] text-[1vw] font-medium px-[1.5vw] bg-[#f4f3f8] hover:cursor-pointer hover:text-white hover:bg-[#d94948] py-[0.7vw] rounded-[5px] transition duration-500 hover:ease-linear'>
                    <p>I.T</p>
                    <FaArrowRightLong className='mt-[0.2vw]'/>
                </div>
                <div className='flex justify-between w-[20vw] text-[1vw] font-medium px-[1.5vw] bg-[#f4f3f8] hover:cursor-pointer hover:text-white hover:bg-[#d94948] py-[0.7vw] rounded-[5px] transition duration-500 hover:ease-linear'>
                    <p>Manufacturing</p>
                    <FaArrowRightLong className='mt-[0.2vw]'/>
                </div>
                <motion.div  initial={{scale:0, opacity:0}} whileInView={{scale:1, opacity:1}} transition={{duration:1.2}} viewport={{once:true}} className='bg-[#0a1635] w-[20vw] h-[20vw] rounded-[15px] px-[2vw]'>
                    <div className='py-[2vw] border-b-[1px] border-[#727171] border-opacity-40'>
                    <div className='flex justify-center'>
                        <BiSolidPhoneCall className='text-white text-[3.5vw] bg-[#d94948] p-[0.5vw] rounded-full '/>
                    </div>
                        <p className='text-[1.5vw] text-center text-white'>Quick Access</p>
                    </div>
                    <div className='text-[#fff] font-semibold text-center mt-[1vw] space-y-[1.2vw]'>
                        <p>Call Now</p>
                        <p>(+27) 10 824 9014</p>
                        <p>(+27) 21 001 3544</p>
                    </div>
                </motion.div>
            </motion.div>

            <div>
                <div>
                <motion.div  initial={{scale:0, opacity:0}} whileInView={{scale:1, opacity:1}} transition={{duration:1.2}} viewport={{once:true}} >
                  <Image src={pic1} className='w-[35vw] rounded-[10px] mt-[6vw]' alt='' />
                  </motion.div>
                    <motion.div  initial={{x:200, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:1.2}} viewport={{once:true}}>
                    <p className=' font-bold text-[2vw] text-[#000] py-[1vw]'>Engineering</p>
                    <p className='text-[#464646] text-[0.9vw] w-[35vw]'>Zammane Engineering is a forward-thinking company dedicated to providing sustainable, innovative, and evidence-based infrastructure solutions. We specialize in the design, manufacturing, and seamless integration of advanced, connected systems that address the evolving needs of modern infrastructure. </p>
                    <p className='text-[#d94948] font-bold mt-[1vw] text-[1.15vw]'>Engineering Progress: Connected Solutions for Modern Infrastructure</p>
                    <div className='space-y-[0.7vw] mt-[0.5vw] text-[0.9vw] w-[35vw]'>
                        <p>➤ Leveraging cutting-edge technology to address complex industry challenges.</p>
                        <p>➤ Ensuring every project meets and exceeds client expectations through innovation.</p>
                        <p>➤ Driving progress with smart, connected, and sustainable infrastructure solutions backed by rigorous research and precision engineering.</p>
                    </div>
                    </motion.div>
                   
                </div>
            </div>
        </div>
      </div>

      <div className=' justify-center text-center flex pt-[4vw] pb-[5vw]'>
          <div>
            <div>
            <motion.div  initial={{y:100, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:1.2}} viewport={{once:true}} className='flex gap-x-[1vw] pb-[1vw]'>
                
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


      <Footer/>
      {/* <div className='justify-center flex pt-[5vw] '>
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
                    <p>Book a free discovery call </p>
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
      </div> */}

   
  </div>
  )
}

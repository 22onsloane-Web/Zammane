/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-undef */
import React from 'react'
import {Montserrat} from "next/font/google"
import Image from 'next/image';
import pic1 from '../Image/service-1.jpg'
import pic2 from '../Image/service-2.jpg'
import pic3 from '../Image/service-3.jpg'
import pic4 from '../Image/service-4.jpg'
import pic5 from '../Image/service-5.jpg'
import pic6 from '../Image/service-6.jpg'
import pic7 from '../Image/service-7.png'
import img1 from '../Image/smarthome.png'
import project1 from "../Image/MAFIKENG.jpg"
import project2 from "../Image/about4.jpg"
import project3 from "../Image/about3.jpg"
import { HiOutlineArrowRight } from "react-icons/hi";
import { RiArrowRightCircleFill } from 'react-icons/ri';
import { Roboto, Roboto_Condensed, Roboto_Mono, Roboto_Slab, Roboto_Serif } from 'next/font/google';
import { FaHandshake } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { GiBank, GiBrickWall, GiMineTruck } from "react-icons/gi";
import { GrAtm } from "react-icons/gr";
import { GoHorizontalRule } from "react-icons/go";
import { FaLaptopCode, FaUser } from "react-icons/fa6";
import { MdOutlineDisplaySettings, MdOutlineEngineering, MdOutlinePrecisionManufacturing } from 'react-icons/md';
import { motion } from 'framer-motion';

const roboto = Roboto_Slab({subsets: ["latin"]});
export default function Section() {
  return (

    <div className={roboto.className}>

        <motion.div  initial={{scale:0, opacity:0}} whileInView={{scale:1, opacity:1}} transition={{duration:1.2}} viewport={{once:true}} className='pt-[2vw] pb-[1vw] flex justify-center items-center text-center '>
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
      </motion.div>

      <motion.div  initial={{y:200, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:1.2}} viewport={{once:true}} className=' text-[#3b3b3b] flex justify-center w-full px-[20vw] pt-[5vw]'>
        <div className='space-y-[1vw]'>
        <p className='uppercase text-[#d94948] text-center'>Certified Engineering Service Provider</p>
        <p className='text-[2vw] font-semibold text-center uppercase'>Zammane Business</p>
        <p className=' pt-[2vw]'><span className='font-bold'>Zammane Business Entreprise</span> is an emerging electrical service provider in the field of Erection, Testing & Commissioning, Preventive Maintenance, Troubleshooting services etc. It has young and Energetic talents which is professionally managed by a team of Certified Engineers. We provide innovative solutions for project management and execution of energy projects, Erection, Testing & Commissioning of Substation equipment’s and Specialized or customized power system solution without compromising the technical aspect.</p>
        <p className='py-[1vw]'>This team is basically involved in the Testing & Commissioning of Gas Insulated Switch Gear, Protection Relay & Other Electrical Equipment’s, Control Supervision, Routine / Annual Maintenance & operation, refurbishment of existing equipment with the new equipment and other customized services.</p>
        <p>With the team of having different expertise working in various projects our services extend to sectors like power plant, Process Industries, Switchyard / Substations, Steel plant and so on.</p>

        <div className='flex justify-center '>
          <div className='flex gap-x-[1vw] bg-[#f4c41b] hover:cursor-pointer hover:scale-90 scale-110 transition duration-500 shadow-lg shadow-[#0a1635] hover:ease-in-out text-[#fff] rounded  text-[1.1vw] px-[1.5vw] py-[0.7vw]'>
            <p>Learn More</p>
            <HiOutlineArrowRight className='mt-[0.35vw]'/>
          </div>
        </div>
        </div>
      </motion.div>

      <div className='justify-center text-center flex pt-[5vw]'>
        <div>
        <div className='flex justify-center'>
        <GoHorizontalRule className='relative -mt-[0.6vw] text-[2.5vw] w-[4vw] rounded-[15px]'/>
        <p className='text-[1vw] font-medium'>OUR SERVICES</p>
        <GoHorizontalRule className='relative -mt-[0.6vw] text-[2.5vw] w-[4vw] rounded-[15px]'/>
        </div>
        <p className='font-bold leading-[3vw] text-[2.5vw] text-[#3a3a3a] w-[40vw] font-sans'>Empowering Your Business with Versatile Solutions</p>
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

              <motion.div  initial={{y:100, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:1.2}} viewport={{once:true}} className='flex justify-center pt-[3vw]'>
                <div className='flex gap-x-[1vw] bg-[#f4c41b] hover:cursor-pointer hover:scale-90 scale-110 transition duration-500 shadow-lg shadow-[#0a1635] hover:ease-in-out text-[#fff] rounded  text-[1.1vw] px-[1.5vw] py-[0.7vw]'>
                  <p>Discover More</p>
                  <HiOutlineArrowRight className='mt-[0.35vw]'/>
                </div>
              </motion.div>
              <motion.div  initial={{y:100, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:1.2}} viewport={{once:true}} className='flex gap-x-[1vw] pb-[1vw]'>
                {/* <div className='bg-[#fff] shadow-xl rounded-[10px] hover:scale-90 transition duration-300 hover:cursor-pointer'>
                  <Image src={pic7} className='w-[20vw] h-auto rounded-t-[10px]' alt='' />
                  <div className='flex justify-center relative -mt-[2.2vw]'>
                  <MdOutlinePrecisionManufacturing  className='text-white text-[4.5vw] bg-[#d94948] p-[1vw] rounded-full '/>
                  </div>
                  <div className='pb-[2vw] pt-[1vw] space-y-[0.5vw]'>
                    <p className='font-semibold text-[1.1vw] text-[#3a3a3a]'>Manufacturing</p>
                    <p >Where comfort meets convenience</p>
                  </div>
                </div> */}
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

      <motion.div  initial={{y:200, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:1.2}} viewport={{once:true}} className='justify-center text-center flex pt-[3vw]'>
        <div>
        <div className='flex justify-center'>
        <GoHorizontalRule className='relative -mt-[0.6vw] text-[2.5vw] w-[4vw] rounded-[15px]'/>
        <p className='text-[1vw] font-medium'>OUR PROJECTS</p>
        <GoHorizontalRule className='relative -mt-[0.6vw] text-[2.5vw] w-[4vw] rounded-[15px]'/>
        </div>
        <p className='font-bold leading-[3vw] text-[2.5vw] text-[#3a3a3a] w-[40vw] font-sans'>Empowering Your Business with Versatile Solutions</p>
        </div>
      </motion.div>

      <div className='pt-[5vw] justify-center text-center flex'>
        <div>
        <motion.div  initial={{scale:0, opacity:0}} whileInView={{scale:1, opacity:1}} transition={{duration:1.2}} viewport={{once:true}} className='flex gap-x-[1vw]'>
          <div className='rounded-[10px] shadow-xl hover:scale-90 duration-500 transition hover:ease-out'>
            <Image src={project1} className='w-[20vw] h-[16vw] rounded-[10px] shadow-xl' alt='' />
            <div className='rounded-[10px] shadow-xl w-[20vw] h-[16vw] bg-[#000] bg-opacity-50 absolute -mt-[16vw] pt-[9vw] text-transparent hover:text-white hover:pt-[3vw] hover:cursor-pointer'>
              <p className='border-b-[1px] border-[#666666] text-[#c4c4c4] text-[1.5vw]'>Mafikeng Water Project</p>
              <p className='text-[1.1vw] pt-[1.5vw] font-bold'>Building water Network and Water Tanks for a Municipalities in Mafikeng.</p>
            </div>
          </div>

          <div className='rounded-[10px] shadow-xl hover:scale-90 duration-500 transition hover:ease-out'>
            <Image src={project2} className='w-[20vw] h-[16vw] rounded-[10px] shadow-xl' alt='' />
            <div className='rounded-[10px] shadow-xl w-[20vw] h-[16vw] bg-[#000] bg-opacity-50 absolute -mt-[16vw] pt-[9vw] text-transparent hover:text-white hover:pt-[3vw] hover:cursor-pointer'>
              <p className='border-b-[1px] border-[#666666] text-[#c4c4c4] text-[1.5vw]'>TotalEnergies Rebranding</p>
              <p className='text-[1.1vw] pt-[1.5vw] font-bold'>Took part in the rebranding from TOTAL to TotalEnergies across South Africa, worked on over 100 Service Stations. </p>
            </div>
          </div>

          <div className='rounded-[10px] shadow-xl hover:scale-90 duration-500 transition hover:ease-out'>
            <Image src={project3} className='w-[20vw] h-[16vw] rounded-[10px] shadow-xl' alt='' />
            <div className='rounded-[10px] shadow-xl w-[20vw] h-[16vw] bg-[#000] bg-opacity-50 absolute -mt-[16vw] pt-[9vw] text-transparent hover:text-white hover:pt-[3vw] hover:cursor-pointer'>
              <p className='border-b-[1px] border-[#666666] text-[#c4c4c4] text-[1.5vw] '>Maintenance and Support</p>
              <p className='text-[1.1vw] pt-[1.5vw] font-bold'>Responsible for maintenance of the petroleum, oil, paraffin and gas for over 33 mines across South Africa..</p>
            </div>
          </div>
        </motion.div>
        <motion.div  initial={{y:100, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:1.2}} viewport={{once:true}} className='flex justify-center pt-[3vw]'>
          <div className='flex gap-x-[1vw] bg-[#f4c41b] hover:cursor-pointer hover:scale-90 scale-110 transition duration-500 shadow-lg shadow-[#0a1635] hover:ease-in-out text-[#fff] rounded  text-[1.1vw] px-[1.5vw] py-[0.7vw]'>
            <p>See More</p>
            <HiOutlineArrowRight className='mt-[0.35vw]'/>
          </div>
        </motion.div>
        </div>
      </div>

      <motion.div  initial={{scale:0, opacity:0}} whileInView={{scale:1, opacity:1}} transition={{duration:1.2}} viewport={{once:true}} className='pt-[5vw] justify-center text-center flex pb-[5vw] px-[19vw]'>
        <div className='bg-[#0a1635] w-full  h-[25vw] rounded-[15px] px-[8vw]'>
          <p className='text-center text-[#fff] text-[2.5vw] mt-[3vw] font-semibold'>Let’s work together</p>
          <p className='text-center text-[#fff] text-[1.2vw] mt-[3vw] '>Partner with Zammane Business Enterprise for expert electrical solutions. Our certified team ensures top-quality commissioning and maintenance, delivering customized services that maximize efficiency and reliability across sectors.</p>
          <div className='flex justify-center pt-[3vw]'>
          <div className='flex gap-x-[1vw] bg-[#f4c41b] hover:cursor-pointer hover:scale-90 scale-110 transition duration-500 shadow-lg shadow-[#0a1635] hover:ease-in-out text-[#fff] rounded  text-[1.1vw] px-[1.5vw] py-[0.7vw]'>
            <p>Get in touch</p>
            <HiOutlineArrowRight className='mt-[0.35vw]'/>
          </div>
        </div>
        </div>
      </motion.div>


      {/* <div className='pt-[5vw] pb-[50vw] justify-center text-center flex px-[19vw]'>
        <div>
          <div className='bg-[#f0f0f0] relative'>
            <div className='justify-center flex -mt-[3.5vw]'>
            <FaUser  className='text-[3.5vw] text-white bg-[#000] rounded-full p-[0.5vw]'/>
            </div>
            <p>Name Surname</p>
            <p>2024-09-04</p>
          </div>
        </div>


      </div> */}

    </div>




  )
}

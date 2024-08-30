/* eslint-disable react/jsx-no-undef */
import React from 'react'
import {Montserrat} from "next/font/google"
import Image from 'next/image';
import pic1 from '../Image/about1.jpg'
import pic2 from '../Image/about2.jpg'
import pic3 from '../Image/about3.jpg'
import pic4 from '../Image/about4.jpg'
import pic5 from '../Image/about6.jpg'


const montserrat = Montserrat({ subsets: ["latin"] });
export default function Section() {
  return (
    <div className='bg-[#f3f3f3]  pt-[200px]'>
      <div className='flex items-center justiy-center mx-auto'>
        <div className='flex items-center gap-x-3 justify-center h-[200px] text-[20px] text-black  w-full  mx-auto pb-[340px]'>
            <div className='w-[700px]  h-auto p-4'>
              <p className='font-medium'>Zammane is an industry leader providing bespoke engineering and infrastructure solutions since 2001. With expertise in Civil and Construction, Mining Maintenance, Rigging and Logistics, as well as renewable energy sustainability solutions, we offer comprehensive services encompassing full-cycle wind farm development—from manufacturing and construction to start-up, commissioning, and maintenance. </p>
            </div>
            <div className='w-[700px]  h-auto p-4'>
              <div className={montserrat.className}>
              <p className='text-[30px]'>WHAT WE DO</p>
              </div>
              <p className='border-l-[6px] px-[35px] border-[#001a4b] font-light mt-5'>Our highly qualified team focuses on precision and client-first workmanship, addressing the unique needs of each client and project. As a 100% Black-Owned B-BBEE LEVEL 1 entity, we are dedicated to empowerment and the shared responsibility of global common good as corporate citizens. </p>
            </div>
        </div>
      </div>
      <div className='bg-[#001a4b] h-auto pb-10 '>
        <div className='absolute flex items-center justify-center -mt-[150px] mx-auto px-[300px] '>
        <div className='flex px-10 gap-x-10'>
        <div className='bg-gradient-to-b from-[#ffffff] via-[#000000] to-[#000]'>
          <Image src={pic2} className='w-[400px] h-auto opacity-50' alt=''/>
          <div className='absolute px-5 mt-[-80px] text-white font-bold text-[20px] '>
          <p className={montserrat.className}>Rigging <br></br>and Logistics</p>
          </div>
        </div>
        <div className='bg-gradient-to-b from-[#ffffff] via-[#000000] to-[#000]'>
          <Image src={pic3} className='w-[400px] h-auto opacity-50' alt=''/>
          <div className='absolute px-5 mt-[-80px] text-white font-bold text-[20px] '>
          <p className={montserrat.className}>Pump and <br /> Tanks Maintenance</p>
          </div>
        </div>
        <div className='bg-gradient-to-b from-[#ffffff] via-[#000000] to-[#000]'>
          <Image src={pic4} className='w-[400px] h-auto opacity-50' alt=''/>
          <div className='absolute px-5 mt-[-80px] text-white font-bold text-[20px] '>
          <p className={montserrat.className}>Oil and <br />Gas Industry</p>
          </div>
        </div>
        <div className='bg-gradient-to-b from-[#ffffff] via-[#000000] to-[#000]'>
          <Image src={pic1} className='w-[400px] h-auto opacity-50' alt=''/>
          <div className='absolute px-5 mt-[-80px] text-white font-bold text-[20px] '>
          <p className={montserrat.className}>Oil, Energy and <br /> Gas Industry</p>
          </div>
        </div>
        </div>
        </div>
        <div className='w-fit flex mx-auto items-center justify-center relative pt-[17%]'>
          <p className='text-[#ffffff] font-bold bg-[#000000] py-2 px-3 hover:text-black hover:bg-[#fff] hover:cursor-pointer'>See all services</p>
        </div>

        <div className='relative pt-[100px] flex items-center justify-center mx-auto px-[300px] gap-x-10'>
          <div >
          <Image src={pic5} className='w-full h-auto' alt='' />
          </div>
          <div className='w-full  h-auto px-4 text-white'>
              <div className={montserrat.className}>
              <p className='text-[30px] font-bold'>OUR VALUES</p>
              </div>
              <div className='border-l-[0px]  border-[#2a5bb4] '>
              
               <div className='flex gap-x-[50px] items-center justify-start mt-3 mx-auto'>
               <div className='space-y-6'>
               <div>
                  <p className='font-bold'>- Empathy</p>
                  <p className='font-light w-[320px] text-[#d8d8d8]'>We are committed to fostering a supportive and collaborative environment for both our customers and employees, where their ideas are considered and valued. </p>
                </div>
                <div>
                  <p className='font-bold'>- Excellence</p>
                  <p className='font-light w-[320px] text-[#d8d8d8]'>We are dedicated to the highest standards of quality and precision to meet and exceed customer expectations.  </p>
                </div>
                <div>
                  <p className='font-bold'>- Innovation</p>
                  <p className='font-light w-[320px] text-[#d8d8d8]'>We focus our efforts on a problem-solving approach and continuous improvement. </p>
               
                </div>
                <div>
                  <p className='font-bold'>- Integrity</p>
                  <p className='font-light w-[320px] text-[#d8d8d8]'>We build trust through honesty, respect, and reliability.  </p>
               
                </div>
               </div>
              <div className='space-y-6 '>
            <div className='mt-[-100px]'>
                  <p className='font-bold'>- Collaboration</p>
                  <p className='font-light w-[320px] text-[#d8d8d8]'>We are united in a common pursuit of shared goals with our partners to achieve mutual outcomes. </p>
               
                </div>
                <div>
                  <p className='font-bold'>- Agility</p>
                  <p className='font-light w-[320px] text-[#d8d8d8]'>We prioritize adapting to the changing needs of our operating environments and clients. </p>
               
                </div>
                <div>
                  <p className='font-bold'>- Ubuntu</p>
                  <p className='font-light w-[320px] text-[#d8d8d8]'>We honor our African values of humanity first, approachability, and community involvement. </p>
               
                </div>
             </div>
               </div>
              </div>
             </div>
          <div>

          </div>
        </div>

      </div>
    </div>
  )
}

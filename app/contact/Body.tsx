import Image from 'next/image'
import React from 'react'
import header from '../Image/Untitled (8)_page-0001.jpg'
import {Montserrat} from "next/font/google"
import { SocialIcon } from 'react-social-icons';
const montserrat = Montserrat({ subsets: ["latin"] });
export default function Body() {
  return (
    <div className='text-[#000]'>
          <div className='  text-[#000] '>
            <Image src={header} className='w-full h-[600px]' alt=''/>
            <div className={montserrat.className}>
            <p className='text-center font-bold text-white text-[90px] mt-[-400px]'>Contact</p>
                </div>
                <div className='mt-[300px] w-full items-center justify-center flex mx-auto'>
                 <div>
                 <div className='w-full items-center justify-between gap-x-[500px] text-[26px] mx-auto flex text-black  border-b-[2px] border-[#2461a8] pb-4'>
                        <p>CONTACT US</p>
                        <p>Tel +27 10 824 9014 | Email info@zammane.com</p>
                    </div>
                    <div className='mt-5 space-y-2 flex gap-x-[550px] pb-10'>
                       <div>
                       <p className='text-[#2461a8] font-bold text-[27px] '>Head Office</p>
                      <div className='text-[20px]'>
                      <p>Gauteng, South Africa</p>
                        <p> Centurion</p>
                        <p>66 Regency Drive</p>
                        <p>Route 21 Business Park</p>
                      </div>
                        <p className='text-[#2461a8] font-bold text-[27px] mt-4'>Follow Us</p>
                        <div className='flex'>
                        <div className="flex py-1">
                            <SocialIcon url="https://www.facebook.com/EquityBCDC/" fgColor='#001a4b' bgColor='transparent' style={{ height: 34, width: 34 }} />
                            <SocialIcon url="https://twitter.com/EquityBCDC" fgColor='#001a4b' bgColor='transparent' style={{ height: 34, width: 34 }}  />
                            <SocialIcon url="https://www.linkedin.com/company/equitybcdc/" fgColor='#001a4b' bgColor='transparent' style={{ height: 34, width: 34 }} />
                            <SocialIcon url="https://www.instagram.com/equitybankcongo/" fgColor='#001a4b' bgColor='transparent' style={{ height: 34, width: 34 }} />
                            </div>

                        </div>
                       </div>

                        <div className='space-y-0 text-[#000] justify-end mx-auto '>
                            <div>
                                <p>Email</p>
                                <input type="text" placeholder='Enter a valid email address' className=' outline-none border-b-[2px] pb-2 w-full lg:w-[400px] px-5 lg:px-0' />
                            </div>
                            <div className='pt-6'>
                                <p>Name</p>
                                <input type="text" placeholder='Enter your name' className=' outline-none border-b-[2px] pb-2 w-full lg:w-[400px] px-5 lg:px-0' />
                            </div>
                            <div className='pt-6'>
                                <p>Phone</p>
                                <input type="text" placeholder='Enter your phone number' className=' outline-none border-b-[2px] pb-2 w-full lg:w-[400px] px-5 lg:px-0' />
                            </div>
                            <div className='pt-6'>
                                <p>Message</p>
                                <textarea name="" placeholder='Enter your message' className=' outline-none border-b-[2px] pb-4 h-[100px] w-full lg:w-[400px] px-5 lg:px-0'  id=""></textarea>  
                            </div>  
                            <button className='w-full bg-[#001a4b] font-bold text-white text-[16px] py-2'>Submit</button>        
                        </div>
                    </div>

                    <div className='py-10'>
                        <iframe className='lg:w-full h-[600px] md:w-full px-0 rounded-[15px]' src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d114769.61934709844!2d27.98906254457449!3d-25.98277496456186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-26.044006399999997!2d28.0100864!4m5!1s0x1e957be42ebc22cf%3A0x2e8ad98c909b5cdc!2saylah%20hair%20product!3m2!1d-25.920326!2d28.0917842!5e0!3m2!1sen!2sza!4v1717750586743!5m2!1sen!2sza"  loading="lazy"></iframe>
                     </div>
                 </div>
                </div>
        
      </div>
    </div>
  )
}

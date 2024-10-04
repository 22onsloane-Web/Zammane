import React, { useState } from 'react'
import {Open_Sans} from "next/font/google"
import Link from 'next/link';
import { Bars3Icon, XMarkIcon, EnvelopeIcon, QuestionMarkCircleIcon, UserCircleIcon, CreditCardIcon, BanknotesIcon, WalletIcon, RectangleGroupIcon } from "@heroicons/react/24/outline";
import {ChatBubbleLeftIcon,ChevronDownIcon,ChevronUpIcon ,HomeIcon,PaperAirplaneIcon,PhoneIcon,PlayCircleIcon} from "@heroicons/react/20/solid";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { SocialIcon } from 'react-social-icons'
import {motion, useAnimation} from "framer-motion"
import logo from "../Image/Zammane Logo Redesignpng-04.png"
import Image from 'next/image';


const open_Sans = Open_Sans({ subsets: ["latin"] });
export default function Header() {
  const controls = useAnimation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);
    return (
      <div className='w-full h-auto px-[4vw]'>
         
        <div >
   
  
          <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
  
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto shadow-[2px_3px_5px_black] bg-[#f5f5f5] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className={open_Sans.className}>
              {/* <span className="self-center text-[60px] tracking-widest font-bold   font-Open_Sans text-[#033e5b]">ZAMANE</span>
              <p className='text-[#033e5b] text-[7px] mt-[-20px] font-bold'>UNIQUE NETWORK MAINTENANCE & INSTALLATIONS</p> */}
              <Image src={logo} className='w-[10vw] h-auto ' alt=''/>
              </div>
            </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-black"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6 " aria-hidden="true" />
              </button>
            </div>
  
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6 ">
          
                  <a
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-white hover:bg-[#f2f2f2] hover:text-[#45aad7]"
                  ><div className="flex gap-x-6 text-[#303030]  hover:text-[#033e5b]">
                     <HomeIcon className="h-7 w-7  mt-0 hover:text-white" aria-hidden="true"/>
                     <p className=" font-medium text-[15px]">Home</p>
                  </div>
                 
                  </a>
  
                  <a
                   href="#offres"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-white hover:bg-[#f2f2f2] hover:text-[#45aad7]"
                  ><div className="flex gap-x-6 text-[#303030]  hover:text-[#033e5b]"  >
                     <RectangleGroupIcon className="h-7 w-7  mt-0 hover:text-white" aria-hidden="true"/>
                     <p className=" font-medium text-[15px]">Product</p>
                  </div>
                 
                  </a>
                  <a
                   href="#offres"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-white hover:bg-[#f2f2f2] hover:text-[#45aad7]"
                  ><div className="flex gap-x-6 text-[#303030]  hover:text-[#033e5b]"  >
                     <WalletIcon className="h-7 w-7  mt-0 hover:text-white" aria-hidden="true"/>
                     <p className=" font-medium text-[15px]">About Us</p>
                  </div>
                  </a>
                  <a
                   href="#about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-white hover:bg-[#f2f2f2] hover:text-[#45aad7]"
                  ><div  className="flex gap-x-6 text-[#303030]  hover:text-[#033e5b]"  >
                     <PhoneIcon className="h-7 w-7  mt-0 hover:text-white" aria-hidden="true"/>
                     <p className=" font-medium text-[15px]">Contact Us</p>
                  </div>
                 
                  </a>
        
                </div>
  
              
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
  
        <div className='flex w-full mx-auto justify-center '>
      <nav className=" border-gray-200    z-30 w-full py-[2vw] px-[0vw]">
      <div className="w-full bg-[#fff] bg-opacity-100 flex shadow-xl flex-wrap items-center justify-between mx-auto py-2 px-[3vw] rounded-[15px]">
    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
    <motion.div initial={{x: -100, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:1.2}} animate={controls} viewport={{once:true}} className={open_Sans.className}>
       {/* <span className="self-center text-[60px] tracking-widest font-bold   font-Open_Sans text-[#033e5b]">ZAMANE</span>
       <p className='text-[#033e5b] text-[8px] mt-[-20px] font-bold tracking-[0.18VW]'>ZAMANE RADEBE BUSINESS PROJECTS (PTY)</p> */}
       <Image src={logo} className='w-[13vw] h-auto ' alt=''/>
       </motion.div>
    </a>
    <button data-collapse-toggle="navbar-default" type="button"  onClick={() => setMobileMenuOpen(true)} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <motion.div initial={{x: 100, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:1.2}} animate={controls} viewport={{once:true}} className="hidden w-full lg:block md:w-auto" id="navbar-default ">
      <ul className="flex flex-col  md:p-0 font-boldrounded-lg bg-gray-50 md:flex-row md:space-x-5 rtl:space-x-reverse md:mt-0  bg-opacity-0">
        <li className='py-5'>
          <a href="/" className="block py-1 text-black rounded hover:bg-gray-100 md:hover:bg-transparent transition duration-300 border-b-[2px] border-[#fff] hover:border-[#3c6cc5] p-3 hover:text-[#3c6cc5] hover:border-b-[2px]   md:dark:hover:bg-transparent font-extrabold" aria-current="page">Home</a>
        </li>
        <li className='py-5'>
          <a href="#about" className="block py-1 text-black rounded hover:bg-gray-100 md:hover:bg-transparent transition duration-300 border-b-[2px] border-[#fff] hover:border-[#3c6cc5] p-3 hover:text-[#3c6cc5] hover:border-b-[2px]   md:dark:hover:bg-transparent font-extrabold">About</a>
        </li>
        <li className='py-5'>
       
         <Link href='/services'>
         <div  className="block py-1 text-black rounded hover:bg-gray-100 md:hover:bg-transparent transition duration-300 border-b-[2px] border-[#fff] hover:border-[#3c6cc5] p-3 hover:text-[#3c6cc5] hover:border-b-[2px]   md:dark:hover:bg-transparent font-extrabold">Services</div>
         </Link>
        </li>
        <li className='py-5'>
          <a href="#projects" className="block py-1 text-black rounded hover:bg-gray-100 md:hover:bg-transparent transition duration-300 border-b-[2px] border-[#fff] hover:border-[#3c6cc5] p-3 hover:text-[#3c6cc5] hover:border-b-[2px]   md:dark:hover:bg-transparent font-extrabold">Projects</a>
        </li> 
        <li className='py-5'>
          <a href="/contact" className="block py-1 text-black rounded hover:bg-gray-100 md:hover:bg-transparent transition duration-300 border-b-[2px] border-[#fff] hover:border-[#3c6cc5] p-3 hover:text-[#3c6cc5] hover:border-b-[2px]   md:dark:hover:bg-transparent font-extrabold">Contact</a>
        </li>
      </ul>
    </motion.div>

  </div>

</nav>
    </div>
        </div>
        </div>
  )
}





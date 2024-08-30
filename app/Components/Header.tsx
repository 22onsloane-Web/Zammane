import React from 'react'
import {Open_Sans} from "next/font/google"
import Video from './Video';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon, EnvelopeIcon, QuestionMarkCircleIcon, UserCircleIcon, CreditCardIcon, BanknotesIcon, WalletIcon, RectangleGroupIcon } from "@heroicons/react/24/outline";
import {ChatBubbleLeftIcon,ChevronDownIcon,ChevronUpIcon ,HomeIcon,PaperAirplaneIcon,PhoneIcon,PlayCircleIcon} from "@heroicons/react/20/solid";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { SocialIcon } from 'react-social-icons'

const open_Sans = Open_Sans({ subsets: ["latin"] });
export default function Header() {
  return (
    <div>
      <nav className=" border-gray-200  absolute top-0 z-30 w-full ">
  <div className="w-full bg-[#fff] bg-opacity-0  flex  flex-wrap items-center justify-between mx-auto py-0 px-[10%]">
    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
       <div className={open_Sans.className}>
       <span className="self-center text-2xl font-semibold whitespace-nowrap  font-Open_Sans text-white">ZAMMANE</span>
       </div>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default ">
      <ul className="flex flex-col  md:p-0 font-boldrounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0  bg-opacity-0">
        <li className='p-5'>
          <a href="/" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent transition duration-300 border-[#fff] hover:border-[#3c6cc5] p-3 hover:text-[#3c6cc5] hover:border-b-[2px]   md:dark:hover:bg-transparent font-extrabold" aria-current="page">Home</a>
        </li>
        <li className='p-5'>
          <a href="#" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent transition duration-300 border-[#fff] hover:border-[#3c6cc5] p-3 hover:text-[#3c6cc5] hover:border-b-[2px]   md:dark:hover:bg-transparent font-extrabold">About</a>
        </li>
        <li className='p-5'>
       
         <Link href='/services'>
         <div  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent transition duration-300 border-[#fff] hover:border-[#3c6cc5] p-3 hover:text-[#3c6cc5] hover:border-b-[2px]   md:dark:hover:bg-transparent font-extrabold">Services</div>
         </Link>
        </li>
        <li className='p-5'>
          <a href="#" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent transition duration-300 border-[#fff] hover:border-[#3c6cc5] p-3 hover:text-[#3c6cc5] hover:border-b-[2px]   md:dark:hover:bg-transparent font-extrabold">Projects</a>
        </li> 
        <li className='p-5'>
          <a href="/contact" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent transition duration-300 border-[#fff] hover:border-[#3c6cc5] p-3 hover:text-[#3c6cc5] hover:border-b-[2px]   md:dark:hover:bg-transparent font-extrabold">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

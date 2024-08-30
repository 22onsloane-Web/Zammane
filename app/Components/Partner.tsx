import React from 'react'
import partner1 from "../Image/partner1.png"
import partner2 from "../Image/partner2.png"
import partner3 from "../Image/partner3.png"
import partner4 from "../Image/logo5.png"
import partner5 from "../Image/partner5.jpg"
import partner6 from "../Image/partner7.webp"
import Image from 'next/image'
export default function Partner() {
  return (
    <div className='pb-[50px] '>

      <div className='flex items-center justify-center  gap-x-10 mx-auto bg-[#fff] pt-[100px]'>
        <div >
            <Image src={partner1} alt=''  className='w-[150px] h-[80px]'/>
        </div>
        <div >
            <Image src={partner2} alt=''  className='w-[150px] h-[80px]' />
        </div>
        <div >
            <Image src={partner4} alt=''  className='w-[150px] h-[80px]' />
        </div>
        <div >
            <Image src={partner3} alt=''  className='w-[150px] h-[80px]' />
        </div>
        <div >
            <Image src={partner6} alt=''  className='w-[150px] h-[80px]' />
        </div>
        <div >
            <Image src={partner5} alt=''  className='w-[150px] h-[80px]' />
        </div>
      </div>
    </div>
  )
}

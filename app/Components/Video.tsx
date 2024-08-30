import React from 'react'

export default function Video() {
  return (
    <div className=' w-full h-fit'>
      <video  src={"/Video2.mp4"} className=' block absolute top-0  transition-opacity duration-1000   px-0 lg:px-0 shadow-lg w-full h-[250px] md:h-[350px] lg:h-auto  mt-0' autoPlay={true} loop={true} muted={true}/>
    </div>
  )
}

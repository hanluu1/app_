"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'


const data =[
    {
        id: 1,
        title: "pick",
        image: "/side1.jpg",
    },
    {   id: 2,
        title:"your",
        image: "/side3.jpg",
    },
    {   id: 3,
        title:"tea",
        image: "/side4.jpg",
    },
        
    
]
const Slider = () => {
    const[currentSlide, setCurrentslide] =useState(0);
    useEffect(()=>{
        const interval= setInterval(()=>setCurrentslide((prev)=>(prev===data.length-1)? 0:prev+1)
        ,2000);
        return()=> clearInterval(interval)
    },[])
  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-#FFF4EA'>
        {/*Text container*/}
        <div className='flex-1 flex items-center justify-center flex-col gap-3 font-extralight  '>
            <h1 className='text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:texy-7xl'>
                {data[currentSlide].title}
            </h1>
            <button className='bg-pink-100 text-black py-4 px-8'>Order now</button>
        {/*Image container  */}
        <div className='w-full flex-1 relative'> 
            <Image src={data[currentSlide].image} alt=""  fill className='object-cover' />
        </div>
        </div>
    </div>
  )
}

export default Slider
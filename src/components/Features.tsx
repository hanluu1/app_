import React from 'react'
import Image from 'next/image'

const Features = () => {
  return (
    <div className='w-screen overflow-x-scroll text-prink-300'>
        <div className='w-max flex'>
            <div className='w-screen h-[60vh] flex flex-col items-center justify-around'>
                <div>
                    <Image src="" alt="" fill/>
            
                </div>
            <div className=''>
                <h1 className=''>Title</h1>
                <p>Description</p>
                <span>price</span>
                <button>add</button>

            </div>

            </div>
        </div>
    </div>

  )
}

export default Features
import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='h-12 md:h-24 p-4 lg:p-10 xl:p-30 text-pink-300 flex items-center justify-between'>
      <Link href='/' className='font-mono font-bold text-xl text-pink-300'>502Tea</Link>
    <p className='font-extralight'>Love from the air</p>
    </div>
  )
}

export default Footer
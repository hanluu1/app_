import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <div>       
         <Image src="/logo.png" alt='' width={30} height={30}/>
    </div>
  )
}

export default Logo
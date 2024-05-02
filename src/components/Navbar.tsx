import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import Logo from './Logo'
import CartIcon from './CartIcon'

const Navbar = () => {
    const user=false
  return (
    <div className='h-12 text-black p-4 flex items-center justify-between border-b-2 border-b-pink-400 uppercase md:h-24 lg:px-10 xl:px-30'>
          <div className='text-xl flex gap-2  md:font-mono md:font-bold flex-1 md:text-center '>
            <Logo/> 
            <Link href={'/'}>
                  Tea502
              </Link>
          </div>

          {/*left link*/}
          <div className='hidden md:flex gap-4 flex-1'>
          
            <Link href={'/'}>Homepage</Link>
            <Link href={'/menu'}>Menu</Link>
            <Link href={'/'}>Contact</Link>

          </div>
          <div className='md:hidden'>
              <Menu />
          </div>
          {/*right link*/}
          <div className='hidden md:flex gap-4 items-center justify-end flex-1'>
            <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer ">
                <img src ="/phone.png" alt='' width={20} height={20}/>
                <span className='bg-pink-200 px-1 rounded-md'> 1 119 911 9999 </span>
            </div>
            {!user ? (<Link href={'/login'}>Login</Link>):
            (<Link href={'/orders'}>Orders</Link>)}
            <CartIcon/>
          </div>
      </div>
  )
}

export default Navbar
"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CartIcon from './CartIcon'

const links=[
    {id: 1, title:"Homepage", url:"/"},
    {id: 2, title:"Menu", url:"/menu"},
    {id: 3, title:"Working hours", url:"/"},
    {id: 4, title:"Contact", url:"/"}
]

const Menu = () => {
    const [open,setOpen] = useState(false);
    
    //temporary
    const user=false;
  return (
    <div>
      {!open ? (<Image src ="/menu.png" alt='' width={20} height={20} onClick={() => setOpen(true)}/>) : 
      (<Image src ="/menuclose.png" alt='' width={20} height={20} onClick={() => setOpen(false)} />)}
  
     { open &&  (<div className='bg-pink-100 text-black absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10'>
            {links.map(item=>(
                <Link href={item.url} key={item.id} onClick={()=> setOpen(false)}>{item.title}</Link>
            ))}
            {!user ?(<Link href="/login" onClick={()=> setOpen(false)}>Login</Link>):
            (
            <Link href="/oders" onClick={()=> setOpen(false)}>Oders</Link>)}
            <Link href="/cart" onClick={()=> setOpen(false)}>
                <CartIcon/>
            </Link>
        </div>)}
    </div>
  )
}

export default Menu
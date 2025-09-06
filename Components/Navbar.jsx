import React from 'react'
import Image from "next/image";
import { assets } from '@/Assets/assets';

const Navbar = () => {
    return (
        <>
            <nav className='flex py-3 px-2 md:px-12 md:py-3 lg:py-3  lg:px-28 items-center justify-between '>
                <Image src={assets.logo} width={170} />
                <div className='flex md:ml-8'>
                    <button className='flex flex-row ml-5 md:px-5 md:py-3 border-2 items-center gap-2 md:mt-2 px-2 py-1 shadow-[-7px_7px_0px_#000000] text-xs md:text-base'>Get started <Image src={assets.arrow} className='flex items-center md:text-xs md:w-4 w-3' /></button>
                </div>
            </nav>
            <div className='flex text-center justify-center flex-col '>
                <h1 className='text-2xl font-medium md:text-5xl'>Latest Blogs</h1>
                <p className='max-w-[740px] mt-3 mx-auto text-xs sm:text-base   item-centre justify-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quidem corrupti consequuntur magni voluptates optio laudantium officia libero illo quaerat!</p>
            </div>
            <form className='item-centre justify-center flex mx-auto max-w-[500px]'>
                <input type="email" placeholder='Enter your email' className='md:w-96 md:h-14 md:text-lg px-4 mt-9 border-2  outline-none  ' />
                <button className='text-centre items-center flex border-2 h-14 mt-9 px-5  font-medium border-l-0 md:text-base active:bg-gray-600 active:text-white'>Subscribe</button>
                
            </form>
        </>
    )
}

export default Navbar
import { assets } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='flex flex-col  bg-slate-100  '>
      <div className='sm:pl-14 py-3 pl-1 border-2 border-grey-500 px-2 '>
        <Image src={assets.logo} width={120} />
      </div>
      <div className='   md:w-80 w-40 pr-3 border py-12  h-[91.46vh] border-black relative ' >
        <div className='w-[60%] md:w-[80%] absolute right-0 '>
          <Link  href='/admin/addProduct' className='items-center flex  gap-3 mt-3 shadow-[-7px_7px_0px_#000000]  border-black border-1 bg-white  font-medium  py-2 px-1'>
            <Image src={assets.add_icon} width={28} /><p >Add Blogs</p>
          </Link>
          <Link href='/admin/blogList' className='items-center flex shadow-[-7px_7px_0px_#000000]   gap-3 mt-5 border-black border-1 bg-white  font-medium  py-2 px-1'>
            <Image src={assets.blog_icon} width={28} /><p >Blogs List </p>
          </Link>
          <Link href='/admin/subscription' className='items-center flex mt-5 shadow-[-7px_7px_0px_#000000]  gap-3 border-black border-1 bg-white   font-medium  py-2 px-1'>
            <Image src={assets.email_icon} width={28} /><p >Subscriptions</p>
          </Link>
        </div>


      </div>
    </div>
  )
}

export default Sidebar
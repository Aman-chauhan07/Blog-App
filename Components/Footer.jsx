import { assets, blog_data } from '@/Assets/assets'
import Image from "next/image";
import React from 'react'

const Footer = () => {
    return (
        <div className='bg-black py-4 flex sm:flex-row gap-2 sm:gap-0 flex-col justify-around text-white items-center text-center'>
            <Image src={assets.logo_light} width={120} />
            <h3>All Right Reserved. Copyrights @blogger</h3>
            <div className='flex'>
                <Image src={assets.facebook_icon} alt="" width={40}/>
                <Image src={assets.twitter_icon}  alt="" width={40}/>
                <Image src={assets.googleplus_icon} alt="" width={40}/>
            </div>
        </div>
    )
}

export default Footer
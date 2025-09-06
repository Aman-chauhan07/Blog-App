import React, { useState } from 'react'
import { blog_data, assets } from "@/Assets/assets"
import Blogitem from './Blogitem'
import Image from "next/image";
const Bloglist = () => {
    const [data, setData] = useState("All")
    return (
        <>
            <div className='gap-6 flex text-center justify-center mt-10'>
                <button onClick={() => (setData("All"))} className='font-medium bg-black text-white px-2'>All</button>
                <button onClick={() => (setData("Technology"))} className='font-medium'>Technology</button>
                <button onClick={() => (setData("Startup"))} className='font-medium'>Startup</button>
                <button onClick={() => (setData("Lifestyle"))} className='font-medium'>Lifestyle</button>
            </div>
            <div className='flex flex-wrap justify-around'>
                {blog_data.filter((item) => data === "All" ? true : item.category === data).map((item, index) => {
                    return <Blogitem key={index} image={item.image} category={item.category} title={item.title} description={item.description} />
                })}
            </div>
        </>
    )

}

export default Bloglist
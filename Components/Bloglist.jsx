import React, { useState } from 'react'
import { blog_data, assets } from "@/Assets/assets"
import Blogitem from './Blogitem'
import Image from "next/image";
const Bloglist = () => {
    const [data, setData] = useState("All")
    return (
        <>
            <div className='gap-6 flex text-center justify-center mt-12'>
                <button onClick={() => (setData("All"))} className={data === "All" ? 'bg-black text-white font-medium   px-2' : 'font-medium'}>All</button>
                <button onClick={() => (setData("Technology"))} className={data === "Technology" ? 'bg-black text-white font-medium   px-2' : 'font-medium'}>Technology</button>
                <button onClick={() => (setData("Startup"))} className={data === "Startup" ? 'bg-black text-white font-medium   px-2' : 'font-medium'}>Startup</button>
                <button onClick={() => (setData("Lifestyle"))} className={data === "Lifestyle" ? 'bg-black text-white font-medium   px-2' : 'font-medium'}>Lifestyle</button>
            </div>
            <div className="flex flex-wrap justify-around ">
                {blog_data.filter((item) => data === "All" ? true : item.category === data).map((item, index) => {
                    return <Blogitem key={index} image={item.image} category={item.category} title={item.title} description={item.description} />
                })}
            </div>
        </>
    )

}

export default Bloglist
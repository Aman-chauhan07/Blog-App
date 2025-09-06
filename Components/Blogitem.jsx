import { blog_data, assets } from "@/Assets/assets"
import Image from "next/image";
const Blogitem = ({image,title,description,category}) => {
    return (
        <div className=" items-center border-2 border-black-500 mt-15 max-w-[300px] md:max-w-[300px] ml-5 mb-5 transition-shadow duration-300 hover:shadow-[-7px_7px_0px_black]">
            <Image src={image} alt="working on laptop" width={300} className=" fit-content" />
            <p className="bg-black text-white inline-block px-1 ml-3 mt-2 py-[0.15rem] text-[0.8rem]">{category}</p>
            <h3 className="max-w-[280px] ml-3 mt-2 font-medium justify-center">{title}</h3>
            <p className=" tracking-wide font-normal max-w-[280px] mt-2 text-sm ml-3">{description}</p>
            <button className="flex flex-row py-3 font-medium mt-5 ml-3 mb-1 items-center gap-2 text-center justify-center ">Read more<Image src={assets.arrow} className='flex items-center md:text-xs md:w-4 w-3 mt-1'/></button>
        </div>
    )
}

export default Blogitem
"use client";
import React, { useEffect, useState } from "react";
import { blog_data } from "@/Assets/assets";
import Image from "next/image";
import { assets } from "@/Assets/assets";
import Footer from "@/Components/Footer";
import Link from "next/link";

const Page = ({ params }) => {
  const [data, setData] = useState(null);

const Fetchblogdata = () => {
  const blog = blog_data.find((item) => item.id === Number(params.id));
  if (blog) {
    setData(blog);
  }
};

useEffect(() => {
  Fetchblogdata();
}, []);


  return data ? (
    <>
      <div className="bg-gray-300  h-85 md:h-140">
        {/* Navbar */}
        <div className="flex py-3 px-2 md:px-12 md:py-3 lg:py-3 lg:px-28 items-center justify-between ">
         <Link href="/">
          <Image src={assets.logo} alt="" width={170} />
         </Link>
          <div className="flex md:ml-8">
            <button className="flex flex-row ml-5 md:px-5 md:py-3 border-2 items-center gap-2 md:mt-2 px-2 py-1 shadow-[-7px_7px_0px_#000000] text-xs md:text-base">
              Get started{" "}
              <Image
                src={assets.arrow}
                alt=""
                className="flex items-center md:text-xs md:w-4 w-3"
              />
            </button>
          </div>
        </div>

        {/* Blog Title + Author */}
        <div className="flex m-auto max-w-[560px] mt-10 text-center justify-center items-center flex-col">
          <h1 className="font-semibold text-1xl md:text-5xl">{data.title}</h1>
          <Image
            src={data.author_img}
            alt=""
            width={70}
            height={60}
            className="mt-4 border-2 border-white rounded-full"
          />
          <h3 className="mt-2">{data.author}</h3>
        </div>

        {/* Blog Image */}
        <div className="flex items-center justify-center">
          <Image
            src={data.image}
            alt=""
            width={1024}
            className="mt-4 border-4 border-white max-w-[300px] sm:max-w-[350px] md:max-w-[880px]"
          />
        </div>

        {/* Introduction Heading below Image */}
        <div className="flex items-start justify-start max-w-[880px] md:m-auto  flex-col  ">
          <h1 className="text-left text-2xl font-semibold mt-3 md:ml-0 ml-3">Introduction:</h1>
          <p className="max-w-[750px] py-2 md:ml-0 ml-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <h1 className="text-left text-2xl md:ml-0 ml-3 py-4 font-semibold ">
            Step 1: Self Reflection and Goal Setting
          </h1>
          <p className="max-w-[750px] py-4 md:ml-0 ml-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="max-w-[750px] py-2 md:ml-0 ml-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <h1 className="text-left text-2xl py-4 md:ml-0 ml-3 font-semibold ">
            Step 2: Self Reflection and Goal Setting
          </h1>
          <p className="max-w-[750px] py-4  md:ml-0 ml-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="max-w-[750px] md:ml-0 ml-3 py-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <h1 className="text-left text-2xl py-4 md:ml-0 ml-3  font-semibold ">
            Step 3: Self Reflection and Goal Setting
          </h1>
          <p className="max-w-[750px] py-4 md:ml-0 ml-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="max-w-[750px] py-2 md:ml-0 ml-3 mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <h1 className="text-left text-2xl py-4  md:ml-0 ml-3 font-semibold ">
            Conclusion:
          </h1>
          <p className="max-w-[750px] md:ml-0 ml-3 py-2 ">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.
          </p>

          <p className="mt-5 font-bold md:ml-0 ml-3">
            Share this article on social media
          </p>
          <div className="flex mb-10 mt-3">
          <Image src={assets.facebook_icon} alt="" width={50} className="md:ml-0 ml-3"/>
          <Image src={assets.twitter_icon} alt="" width={50} />
          <Image src={assets.googleplus_icon} alt="" width={50} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  ) : (
    <></>
  );
};

export default Page;

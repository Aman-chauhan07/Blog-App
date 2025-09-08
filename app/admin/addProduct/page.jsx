'use client'
import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import axios from 'axios'
import { toast,ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Page = () => {
  const [image, setImage] = useState(false)
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Startup",
    author: "Alex Bannett",
    authorImg: "/author_img.png"
  })

  function OnChangeHandler(e) {
    const name = e.target.name
    const value = e.target.value
    setData((data) => ({ ...data, [name]: value }))
    console.log(data, value)
  }
  const OnSubmitHandler = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('category', data.category);
    formData.append('author', data.author);
    formData.append('authorImg', data.authorImg);
    formData.append('image', image);
    const response =await axios.post('/api/blog',formData)
    if(response.data.success){
      toast.success(response.data.msg)
    }else{
      toast.error("Error")
    }
  }

  return (
    <>
      <form onSubmit={OnSubmitHandler} className='pt-5 px-5 sm:pt-5 sm:pl-16 '>
        <p className='text-xl font-semibold'>Upload Thumbnail</p>
        <label htmlFor="image">
          <Image
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            width={140}
            height={70}
            className="mt-5"
            alt=""
          />
        </label>

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          id="image"
          hidden
          required
        />

        <p className='text-xl mt-5'>Blog Title</p>
        <input
          type="text"
          name="title"
          onChange={OnChangeHandler}
          value={data.title}
          placeholder='Type here'
          className='mt-5 border border-slate-300 font-medium px-5 py-2 w-90'
        />

        <p className='text-xl mt-5'> Blog Description</p>
        <textarea
          rows={6}
          name="description"
          onChange={OnChangeHandler}
          value={data.description}
          className='border border-slate-500 w-90 mt-5 px-2'
          placeholder='write content here'
        ></textarea>

        <p className='text-xl mt-5'>Blog Category</p>
        <select
          name="category"
          className='w-35 font-normal px-4 py-2 border border-slate-500 mt-5'
          onChange={OnChangeHandler}
          value={data.category}
        >
          <option value="Lifestyle">Lifestyle</option>
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
        </select>

        <br />

        <button className='bg-black text-white px-12 font-medium mt-6 py-3 '>
          Add
        </button>
      </form>
    </>
  )
}

export default Page

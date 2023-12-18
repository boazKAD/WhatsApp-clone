import React from 'react'
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { BsLink45Deg } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className='bg-[#2c2c2c] flex h-16 justify-between p-2 gap-2 items-center'>
      <div className='flex gap-4'>
        <HiOutlineEmojiHappy />
        <BsLink45Deg />
      </div>
      <div className='flex xjustify-center items-center rounded-xl    bg-[#2c2c2c] w-full mt-3'>
        {/* <LiaSearchSolid /> */}
        <input type="text" className="w-full h-5 mb-3 xp-1.5 dark:bg-[#2c2c2c]  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" placeholder="Type a message" required />
      </div>
      <div> <FaMicrophone /> </div>

    </div>
  )
}

export default Footer
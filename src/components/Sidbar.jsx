import React from 'react'
import { PiChatTeardropTextLight } from "react-icons/pi";
import { IoCallOutline } from "react-icons/io5";
import { TbPlaystationCircle } from "react-icons/tb";
import { MdOutlineStarRate } from "react-icons/md";
import { RiArchiveLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import Profile from "../assets/3135715.png"
const Sidbar = () => {
    return (
        <div className='text-white h-screen bg-primary w-14 relative flex flex-col justify-between '>
            <div className='flex flex-col gap-5 mt-3'>
                <PiChatTeardropTextLight className='w-10 p-2 h-10' />
                <IoCallOutline className='w-10 p-2 h-10' />
                <TbPlaystationCircle className='w-10 p-2 h-10' />
            </div>
            <div className='flex flex-col gap-5 mb-5'>
                <MdOutlineStarRate className='w-10 p-2 h-10' />
                <RiArchiveLine className='w-10 p-2 h-10' />
                <IoSettingsOutline className='w-10 p-2 h-10' />
            <img src={Profile} alt="Profile" className='w-10 h-10' />
            </div>
        </div>
    )
}

export default Sidbar 
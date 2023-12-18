import React from 'react'
import Profile from '../assets/3135715.png'
import { CiVideoOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { SlArrowDown } from "react-icons/sl";

import { LiaSearchSolid } from "react-icons/lia";
const Navbar = () => {
    return (
        <div className='bg-[#2c2c2c] xml-2 h-[70px] xw-full flex justify-between items-cente'>
            <div className='flex items-cente gap-2'>
                <div className='flex justify-center items-center'><img src={Profile} alt="profile" className='w-12 h-12' /></div>
                <div className='flex justify-center items-center'><p>Mugenga</p></div>

            </div>
            <div className='flex items-center mr-5 gap-1 '>
                <div className='bg-[#404040] h-11 w-14 flex justify-center items-center rounded-md'>
                    <CiVideoOn className='w-6 h-6 bg-[#404040]' />
                    <SlArrowDown className='w-2 h-3' />
                </div>
                <div className='bg-[#404040] h-11 w-14 flex justify-center items-center  rounded-md'>
                    <IoCallOutline className='w-6 h-6 ' />
                    <SlArrowDown className='w-2 h-3' />
                </div>
                <div>
                    <LiaSearchSolid className='w-6 h-6' />
                </div>
            </div>
        </div>
    )
}

export default Navbar
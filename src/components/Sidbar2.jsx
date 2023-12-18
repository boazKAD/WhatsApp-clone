import React from 'react'
import { PiNotePencilLight } from "react-icons/pi";
import { RiFilter3Line } from "react-icons/ri";
import { LiaSearchSolid } from "react-icons/lia";
import './style.css'

import Profile from "../assets/3135715.png"
const Sidbar2 = () => {
    const data = [{
        image: Profile,
        name: "Mugenga",
        hour: "23:24",
        p: "Hhhh wap MN ikibazo numukobwa"
    },
    {
        image: Profile,
        name: "boaz",
        hour: "23:24",
        p: "hello my gee"
    },
    {
        image: Profile,
        name: "dmajor",
        hour: "23:24",
        p: "hey bro nnn wamu gee ngogute? "
    },
    {
        image: Profile,
        name: "emmy bass",
        hour: "23:24",
        p: "hey bro nnn wamu gee ngogute? "
    },
    {
        image: Profile,
        name: "dmajor",
        hour: "23:24",
        p: "hey bro nnn wamu gee ngogute? "
    },
    {
        image: Profile,
        name: "dmajor",
        hour: "23:24",
        p: "hey bro nnn wamu gee ngogute? "
    },
    {
        image: Profile,
        name: "dmajor",
        hour: "23:24",
        p: "hey bro nnn wamu gee ngogute? "
    },
    {
        image: Profile,
        name: "dmajor",
        hour: "23:24",
        p: "hey bro nnn wamu gee ngogute? "
    },
    
    {
        image: Profile,
        name: "dmajor",
        hour: "23:24",
        p: "hey bro nnn wamu gee ngogute? "
    },
    {
        image: Profile,
        name: "dmajor",
        hour: "23:24",
        p: "hey bro nnn wamu gee ngogute? "
    },
    {
        image: Profile,
        name: "dmajor",
        hour: "23:24",
        p: "hey bro nnn wamu gee ngogute? "
    }, {
        image: Profile,
        name: "dmajor",
        hour: "23:24",
        p: "hey bro nnn wamu gee ngogute? "
    }, {
        image: Profile,
        name: "dmajor",
        hour: "23:24",
        p: "hey bro nnn wamu gee ngogute? "
    }, {
        image: Profile,
        name: "dmajor",
        hour: "23:24",
        p: "hey bro nnn wamu gee ngogute? "
    }, {
        image: Profile,
        name: "dmajor",
        hour: "23:24",
        p: "hey bro nnn wamu gee ngogute? "
    }, {
        image: Profile,
        name: "dmajor",
        hour: "23:24",
        p: "hey bro nnn wamu gee ngogute? "
    }, {
        image: Profile,
        name: "dmajor",
        hour: "23:24",
        p: "hey bro nnn wamu gee ngogute? "
    }, {
        image: Profile,
        name: "dmajor",
        hour: "23:24",
        p: "hey bro nnn wamu gee ngogute? "
    }, {
        image: Profile,
        name: "dmajor",
        hour: "23:24",
        p: "hey bro nnn wamu gee ngogute? "
    }, {
        image: Profile,
        name: "dmajor",
        hour: "23:24",
        p: "hey bro nnn wamu gee ngogute? "
    }, {
        image: Profile,
        name: "dmajor",
        hour: "23:24",
        p: "hey bro nnn wamu gee ngogute? "
    }, {
        image: Profile,
        name: "dmajor",
        hour: "23:24",
        p: "hey bro nnn wamu gee ngogute? "
    }, {
        image: Profile,
        name: "dmajor",
        hour: "23:24",
        p: "hey bro nnn wamu gee ngogute? "
    },
    ]
    return (
        <div className='bg-[#2c2c2c] w-[400px] h-screen xoverflow-y-auto flex flex-col xjustify-center items-center'>
            <div className='flex justify-between p-3 mt-3'>
                <div>
                    <h1 className='text-[#f7f7f7] text-2xl'>Chats</h1>
                </div>
                <div className='flex gap-5 ml-52 mt-2 '>
                    <PiNotePencilLight className='h-7 w-7' />
                    <RiFilter3Line className='h-7 w-7' />
                </div>
            </div>
            <div className='flex justify-center items-center rounded-xl border-[#8d8d8d] xborder-2 xborder-y border-b-[0.2px] bg-[#3d3d3d] w-[350px] mt-3'>
                <LiaSearchSolid />
                <input type="text" className="w-[320px] p-1.5 dark:bg-[#3d3d3d]  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" placeholder="Search or start a new chat" required />
            </div>
            <div className='overflow-y-auto' style={{ scrollbarWidth: 'thin', scrollbarColor: '#4a4a4a #1f1f1f'}}>

                <div className='flex  gap-3 mt-5  bg-[#515151] p-4 rounded-md xbottom-9'>
                    <img src={Profile} alt="Profile" className='w-12 h-12' />
                    <div>
                        <div className='flex justify-between'>
                            <h1>benjamin</h1>
                            <p className='text-sm text-[#ada8a8]'>23:24</p>
                        </div>
                        <p className='w-72'>  hey bro nnn wamu gee ngogute?</p>
                    </div>
                </div>
                {data.map((item) => (
                    <div className='flex  gap-3 mt-5 xoverflow-y-auto  hover:bg-[#515151] p-4 rounded-md xbottom-9'>
                        <img src={item.image} alt="Profile" className='w-12 h-12' />
                        <div>
                            <div className='flex justify-between'>
                                <h1>{item.name}</h1>
                                <p className='text-sm text-[#ada8a8]'>{item.hour}</p>
                            </div>
                            <p className='w-72'>{item.p}  </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidbar2
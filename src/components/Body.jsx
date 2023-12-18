import React from 'react'
import bgimage from '../assets/peakpx2.jpg'
// import profile from '../assets/3135715.png'

const Body = () => {
  return (
    <div className="xbg-red-600 bg-cover bg-center xrelative h-full flex xjustify-between xp-20  xitems-center cjustify-center"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      {/* <div className='bg-[#363636] xflex-grow p-2 rounded-md'>
        <span>Hello</span>
      </div> */}
      {/* <div className=''> */}
        <div className="flex items-center justify-start flex-row-reverse">
          {/* <img src={profile} alt="profile" /> */}
          <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
            <div>Hello</div>
          </div>
        </div>

        <div className="flex items-center justify-end flex-row-reverse">
          {/* <img src={profile} alt="profile" /> */}
          <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
            <div>Hello</div>
          </div>
        </div>

        {/* <div className='absolute bottom-3  right-20 xp-2 xflex-grow '>

          <div className=' flex flex-col space-y-2'>
            <div className=' flex flex-col bg-[#005c4b] rounded-md '>
              <span>Hello</span>
            </div>
            <div className=' flex flex-col bg-[#005c4b] rounded-md '>
              <span>Hello</span>
            </div>
          </div>

        </div> */}
      {/* </div> */}


    </div>
  )
}

export default Body
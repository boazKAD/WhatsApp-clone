import React from 'react'
import Body from '../components/Body'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const Home = () => {
    return (
        <div className='w-full flex flex-col ml-1 justify-between h-full'>
            <Navbar />
            <Body />
            <Footer />
        </div>
    )
}

export default Home
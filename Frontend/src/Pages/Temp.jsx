import React from 'react'
import Navbar from '../components/Navbar'
import MiddleContent from "../components/main body/middleContent"
import AboutData from '../components/About content/AboutData'
import Footer from '../components/footer'
const Temp = () => {
  return (
    <>
    


<div class="absolute top-0 -z-10 h-full w-full bg-white">
    <Navbar/>
    <AboutData/>
    <Footer/>
    <div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div></div>
    </>
  )
}

export default Temp

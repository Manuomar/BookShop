import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import AboutData from '../components/About content/AboutData'
const About = () => {
  return (
    // <div>
    //   <Navbar/>
    // <AboutData/>
    //   <Footer/>
    // </div>
  //   <>   <Navbar/>
  //   <div class="relative h-full w-full bg-white">
    
  //    <AboutData/>
  //     <Footer/>
  //     <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div></div>
  // </>

  <>
    


<div class="absolute top-0 -z-10 h-full w-full bg-white">
    <Navbar/>
    <AboutData/>
    <Footer/>
    <div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div></div>
    </>
  )
}

export default About

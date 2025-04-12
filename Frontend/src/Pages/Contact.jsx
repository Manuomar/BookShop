import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import ContactField from '../components/ContactField'
import { useState } from 'react'
const Contact = () => {
  
    const [theme, setThe] = useState(() => {
      return localStorage.getItem("theme") || "Light";
    });
  
  return (
    // <>
    
    // <Navbar/>
    // <ContactField />
    // <Footer/>

    // </>

    <>
    {theme === "Light" ? (
      <>
        <Navbar />
        <ContactField />
        <Footer />
        
     </>
    ) : (
      <>
        <Navbar />
        <ContactField theme={theme}/>
        <Footer />
      </>
    )}
  </>
  )
}


export default Contact

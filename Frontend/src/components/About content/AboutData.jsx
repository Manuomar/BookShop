import React from 'react'

const AboutData = () => {
  return (
    <div className='mt-25' >
      <h1 className='md:text-3xl mx-3 md:flex justify-center md:items-center font-bold mt-10 '><span className='text-pink-600'>Welcome to Bookshop – </span>Your Gateway to Infinite Stories and Knowledge!</h1>
      <p className='mt-8 mx-4 md:mx-40 text-xl'>Bookshop is your all-in-one digital library, offering a seamless reading experience with a diverse collection of both free and premium books. Whether you're a casual reader or a dedicated bibliophile, Bookshop is designed to meet your literary needs, anytime, anywhere.
</p>
<div className='md:mx-40 mx-4'>
    <h2 className='text-2xl font-bold mt-10 mb-8 text-pink-600'>What We Offer</h2>
    <ul className='list-disc mx-8'>
        <li className='text-xl'><span className='font-bold mt-3'>Free Books:</span><br />
Explore a wide variety of free books across genres including fiction, non-fiction, self-help, academic texts, and more.
</li>
<li className='text-xl'>
<span className='font-bold mt-3'>Premium Content:</span><br />
Unlock access to exclusive paid titles from bestselling authors and publishers at affordable prices.
</li>
<li className='text-xl'>
<span className='font-bold mt-3'>Personalized Experience:</span><br />
Enjoy curated book recommendations based on your reading habits and interests.
</li>
<li className='text-xl'>
<span className='font-bold mt-3'>User-Friendly Interface:</span><br />
Clean design and intuitive navigation make reading a joy.
</li>
<li className='text-xl'>
<span className='font-bold mt-3'>Offline Access:</span><br />
Download your favorite books and read them without an internet connection.
</li>
    </ul>
</div>

<div className='md:mx-40 mx-4'>
<h2 className='text-2xl font-bold mt-10 mb-8 text-pink-600'> Our Mission</h2>
<p className='text-xl font-bold mt-3'>
To make reading more accessible, affordable, and enjoyable for everyone by blending traditional storytelling with modern technology.
</p>
</div>

<div className='md:mx-40 mx-4'>
<h2 className='text-2xl font-bold mt-10 mb-8 text-pink-600'> Why Bookshop?</h2>
<ul className='list-disc mx-8'>
<li className='text-xl font-semibold mt-3'>
Extensive and growing library
</li>
<li className='text-xl font-semibold mt-3'>
A mix of free and premium content
</li>
<li className='text-xl font-semibold mt-3'>
Regular updates and new arrivals
</li>
<li className='text-xl font-semibold mt-3'>
Smooth, distraction-free reading interface
</li>
<li className='text-xl font-semibold mt-3'>Support for indie authors and publishers</li>
</ul>
</div>
<div className='md:mx-40 mx-4'>
<h2 className='text-2xl font-bold mt-10 mb-8 text-pink-600'> 📞 Get in Touch</h2>
<p className='text-xl font-semibold'>
We’re always excited to hear from fellow book lovers!
For support, feedback, or suggestions, reach out to us at:<br/>
<span className='mt-3 mb-3' >📧 [your_email@example.com]<br/></span>
<span  className='mt-5 '>🌐 [www.bookshopapp.com]</span>
</p>
</div>
    </div>
  )
}

export default AboutData

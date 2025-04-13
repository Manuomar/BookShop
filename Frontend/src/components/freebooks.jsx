import React, { useState,useEffect } from 'react'
import list from '../../public/list.json'
import Cards from './Cards';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';
const Freebooks = () => {
  
  const [book,setBook] = useState([]);
  useEffect(()=>{
    const getBook = async()=>{
      try {
     const res =  await axios.get("http://localhost:3000/book");
    //  axiox.httpRequest ('URL')
    const data = res.data.filter((data)=>data.category === "Free");
     console.log(data);
     setBook(data);
      } catch (error) {
        console.log("error in getting data in frontend ",error);
      }
    }
    getBook();
  },[]);
  // const filterData = freeBook.filter((data)=>data.category === "Free");
  //   console.log(filterData)
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
   <>
   <div className='md:mx-20 mx-7'>
    <h1 className=' text-2xl font-bold'>
      Free Offered Books
    </h1>
    <p className='mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, facere quo. Mollitia vel tempora magnam voluptatem, sint consectetur quasi sunt. Quisquam doloribus tempore amet. Cumque libero consequatur sint optio illo.</p>
   </div>

   {/* Slider */}

<div className='mx-20 mt-5 '>
<div className="slider-container">
      <Slider {...settings}>
       {book.map((item)=>(
        <Cards item = {item} key={item.id}/>
       ))}
      </Slider>
    </div>
</div>
   </>
  )
}

export default Freebooks

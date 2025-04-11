import React from 'react'
import list from '../../public/list.json'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Freebooks = () => {
  const filterData = list.filter((data)=>data.category === "Free");
  console.log(filterData)
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
   <div className='mx-20'>
    <h1 className=' text-2xl font-bold'>
      Free Offered Books
    </h1>
    <p className='mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, facere quo. Mollitia vel tempora magnam voluptatem, sint consectetur quasi sunt. Quisquam doloribus tempore amet. Cumque libero consequatur sint optio illo.</p>
   </div>

   {/* Slider */}

<div className='mx-20'>
<div className="slider-container">
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
      </Slider>
    </div>
</div>
   </>
  )
}

export default Freebooks

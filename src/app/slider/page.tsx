import Image from 'next/image';
import React from 'react'
import Slider from "react-slick";

function page() {
     const settings = {
    dots: true,
  };
  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        <div>
          <Image alt='something went wrong' height={400} width={400} src="http://placekitten.com/g/400/200" />
        </div>
        <div>
          <Image alt='something went wrong' height={400} width={400} src="http://placekitten.com/g/400/200" />
        </div>
        <div>
          <Image alt='something went wrong' height={400} width={400} src="http://placekitten.com/g/400/200" />
        </div>
        <div>
          <Image alt='something went wrong' height={400} width={400} src="http://placekitten.com/g/400/200" />
        </div>
      </Slider>
    </div>
  )
}

export default page

"use client";
import React from 'react'
import Slider, { Settings } from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

const settings:Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    }

function Hero() {
  return (
    <div className='h-screen w-full overflow-hidden'>
      <div>
        <Slider {...settings}>
            <div>
                <Image src="/hero.jpg" className='h-full w-full object-cover' alt='something went wrong' height={800} width={800} />
            </div>
            <div>
                <Image src="/about.jpg" className='h-full w-full object-cover' alt='something went wrong' height={800} width={800} />
            </div>
        </Slider>
      </div>
    </div>
  )
}

export default Hero

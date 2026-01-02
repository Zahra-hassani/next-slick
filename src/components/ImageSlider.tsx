"use client";
import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function ImageSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    }
  return (
    <div className='image-slider-container h-screen w-full'>
      <Slider {...settings}>
        <div>
          <Image alt='something went wrong' height={400} width={400} src="https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg" />
        </div>
        <div>
          <Image alt='something went wrong' height={400} width={400} src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D" />
        </div>
        <div>
          <Image alt='something went wrong' height={400} width={400} src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D" />
        </div>
        <div>
          <Image alt='something went wrong' height={400} width={400} src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2dyYW1taW5nfGVufDB8fDB8fHww" />
        </div>
        <div>
          <Image alt='something went wrong' height={400} width={400} src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHdlYiUyMGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D" />
        </div>
        <div>
          <Image alt='something went wrong' height={400} width={400} src="https://images.unsplash.com/photo-1552831388-6a0b3575b32a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHByb2dyYW1taW5nJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww" />
        </div>
        <div>
          <Image alt='something went wrong' height={400} width={400} src="https://cdn.pixabay.com/photo/2016/02/17/15/37/laptop-1205256_1280.jpg" />
        </div>
        <div>
          <Image alt='something went wrong' height={400} width={400} src="https://cdn.pixabay.com/photo/2022/10/04/14/50/computer-7498415_1280.jpg" />
        </div>
      </Slider>
    </div>
  )
}

export default ImageSlider

"use client";
import Image from 'next/image';
import React from 'react'

function error() {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <div className='bg-linear-180 from-white to-slate-50 h-fit w-9/12 rounded p-6 border'>
        <h1 className="text-4xl font-bold font-sans text-center">You're Offline!</h1>
        <Image src="/error.jpg" alt='' height={600} width={600} className='h-5/12 w-5/12 mx-auto' />
        <p className='text-center text-xl'>Check your network and try again.</p>
      </div>
    </div>
  )
}

export default error

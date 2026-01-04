"use client";
import React, { useState } from 'react'
import { useTheme } from '../theme-provider';

function page() {
    const theme = useTheme();
    const [value, setValue] = useState(theme.colors.mainColor);
  return (
    <div className='h-screen w-full flex justify-center flex-col items-center gap-4'>
      <h1 style={{ color: value }} className='text-center font-bold text-4xl'>👋 Hi!</h1>
      <button onClick={()=> setValue(theme.colors.secondary)} className='px-6 py-1 text-black rounded bg-stone-50'>Change Theme</button>
    </div>
  )
}

export default page

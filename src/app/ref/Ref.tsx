"use client";
import React, { useRef } from 'react'

function Ref() {
    const countRef = useRef(0);

const handleClick = () => {
  countRef.current += 1;
  console.log(countRef.current);
};

  return (
    <div>
      
    </div>
  )
}

export default Ref

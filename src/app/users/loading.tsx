import React from 'react'

function loading() {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <div className="h-32 w-32 rounded-full border-l-2 border-r-2 border-t-2 animate-spin border-cyan-600"></div>
    </div>
  )
}

export default loading

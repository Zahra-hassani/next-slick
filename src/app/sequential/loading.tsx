import React from 'react'

function loading() {
  return (
    <div className='h-screen w-full justify-center flex items-center p-5'>
      <div className="h-32 w-32 border-l-2 border-r-2 border-t-2 m-auto rounded-full animate-spin border-sky-700"></div>
    </div>
  )
}

export default loading

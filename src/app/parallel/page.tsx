import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



 function page() {
  return (
    <div className=' flex flex-col items-center gap-3 p-4 w-10/12 mx-auto'>
      <h1 className='text-2xl font-bold text-center'>Friend requests</h1>
      <div className='flex justify-between gap-4 items-center p-4 hover:bg-white/10 transition-all duration-300 border rounded-md w-1/2'>
        <div className="flex items-center gap-3">
            <Image src="/user1.jpg" alt='' height={700} width={700} className='h-20 w-22 rounded-full' />
            <h1 className='text-2xl'>Ali Ahmadi</h1>
        </div>
        <Link href="/parallel/1" className='bg-white text-black rounded p-3'>View Profile</Link>
      </div>
      
      <div className='flex justify-between gap-4 items-center p-4 hover:bg-white/10 transition-all duration-300 border rounded-md w-1/2'>
        <div className="flex items-center gap-3">
            <Image src="/user2.jpeg" alt='' height={700} width={700} className='h-20 w-22 rounded-full' />
            <h1 className='text-2xl'>Bahar Hami</h1>
        </div>
        <Link href="/parallel/2" className='bg-white text-black rounded p-3'>View Profile</Link>
      </div>

      <div className='flex justify-between gap-4 items-center p-4 hover:bg-white/10 transition-all duration-300 border rounded-md w-1/2'>
        <div className="flex items-center gap-3">
            <Image src="/user3.jpeg" alt='' height={700} width={700} className='h-20 w-22 rounded-full' />
            <h1 className='text-2xl'>Sahar Bashiri</h1>
        </div>
        <Link href="/parallel/3" className='bg-white text-black rounded p-3'>View Profile</Link>
      </div>

      <div className='flex justify-between gap-4 items-center p-4 hover:bg-white/10 transition-all duration-300 border rounded-md w-1/2'>
        <div className="flex items-center gap-3">
            <Image src="/user4.jpg" alt='' height={700} width={700} className='h-20 w-22 rounded-full' />
            <h1 className='text-2xl'>Nilofer Qaderi</h1>
        </div>
        <Link href="/parallel/4" className='bg-white text-black rounded p-3'>View Profile</Link>
      </div>

      <div className='flex justify-between gap-4 items-center p-4 hover:bg-white/10 transition-all duration-300 border rounded-md w-1/2'>
        <div className="flex items-center gap-3">
            <Image src="/user5.jpg" alt='' height={700} width={700} className='h-20 w-22 rounded-full' />
            <h1 className='text-2xl'>Nila Asadi</h1>
        </div>
        <Link href="/parallel/5" className='bg-white text-black rounded p-3'>View Profile</Link>
      </div>

      <div className='flex justify-between gap-4 items-center p-4 hover:bg-white/10 transition-all duration-300 border rounded-md w-1/2'>
        <div className="flex items-center gap-3">
            <Image src="/user6.jpeg" alt='' height={700} width={700} className='h-20 w-22 rounded-full' />
            <h1 className='text-2xl'>Basir Karimi</h1>
        </div>
        <Link href="/parallel/6" className='bg-white text-black rounded p-3'>View Profile</Link>
      </div>

      <div className='flex justify-between gap-4 items-center p-4 hover:bg-white/10 transition-all duration-300 border rounded-md w-1/2'>
        <div className="flex items-center gap-3">
            <Image src="/user7.jpeg" alt='' height={700} width={700} className='h-20 w-22 rounded-full' />
            <h1 className='text-2xl'>Ahmad Salimi</h1>
        </div>
        <Link href="/parallel/7" className='bg-white text-black rounded p-3'>View Profile</Link>
      </div>

      <div className='flex justify-between gap-4 items-center p-4 hover:bg-white/10 transition-all duration-300 border rounded-md w-1/2'>
        <div className="flex items-center gap-3">
            <Image src="/user8.jpeg" alt='' height={700} width={700} className='h-20 w-22 rounded-full' />
            <h1 className='text-2xl'>Jamil Rasoli</h1>
        </div>
        <Link href="/parallel/8" className='bg-white text-black rounded p-3'>View Profile</Link>
      </div>

      <div className='flex justify-between gap-4 items-center p-4 hover:bg-white/10 transition-all duration-300 border rounded-md w-1/2'>
        <div className="flex items-center gap-3">
            <Image src="/user9.jpeg" alt='' height={700} width={700} className='h-20 w-22 rounded-full' />
            <h1 className='text-2xl'>Kamran Moradi</h1>
        </div>
        <Link href="/parallel/9" className='bg-white text-black rounded p-3'>View Profile</Link>
      </div>

      <div className='flex justify-between gap-4 items-center p-4 hover:bg-white/10 transition-all duration-300 border rounded-md w-1/2'>
        <div className="flex items-center gap-3">
            <Image src="/user10.jpg" alt='' height={700} width={700} className='h-20 w-22 rounded-full' />
            <h1 className='text-2xl'>Sadaf Nasimi</h1>
        </div>
        <Link href="/parallel/10" className='bg-white text-black rounded p-3'>View Profile</Link>
      </div>
    </div>
  )
}

export default page

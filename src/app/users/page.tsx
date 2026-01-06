import Link from 'next/link';
import React from 'react'

type User = {
    id: number;
    name: string;
    email : string;
    phone: string;
    website: string;
}

async function page() {
     const response = await fetch("https://jsonplaceholder.typicode.com/users");
     const data:User[] = await response.json();
  return (
    <div className='flex justify-center flex-wrap w-full items-center gap-4 p-4'>
      {data.map((user)=>(
        <div key={user.id} className="flex flex-col items-center gap-4 p-3 border rounded shadow">
            <h1 className="font-bold text-2xl text-center">{user.name}</h1>
            <Link target='blank' href={`mailto:${user.email}`}>{user.email}</Link>
            <Link target='blank' href={`tele:${user.phone}`}>{user.phone}</Link>
            <Link target='blank' href={user.website}>{user.website}</Link>
        </div>
      ))}
    </div>
  )
}

export default page

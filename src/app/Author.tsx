import React from 'react'

type Author = {
    id: number,
    name: string
}

async function Author({userid}:{userid:number}) {
    await new Promise(r => setTimeout(r,3000));
    const respose = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`);
    const author:Author = await respose.json();
  return (
    <div className='w-full'>
      <p className='font-black text-end'>{author.name}</p>
    </div>
  )
}

export default Author

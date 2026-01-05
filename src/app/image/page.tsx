'use client';
import React, { use, useEffect, useState } from 'react'

type Image = {
    name: string;
    email: string;
    phone: string;
    website: string
}

 function page() {
    const [list , setList] = useState<Image[]>([]);
    const [loading , setLoading] = useState(true);
    useEffect(()=>{
        async function fetchData(){
            try{
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            if(!response.ok) throw new Error('Something went wrong');
            const data = await response.json();
            setList(data);
            }
            catch(err){
                console.log("Something go wrong");
            }
            finally{
                setLoading(false);
            }
        }
        fetchData();
    },[])
  return loading? (
    <h1 className='text-2xl font-bold text-center'>Loading...</h1>
  ):(
    <div className="grid grid-cols-3 p-5 gap-3">
        {list.map((user , index)=> (
            <div key={index} className="flex flex-col items-center rounded gap-3 p-4 border shadow">
                <h1 className='text-4xl text-center font-bold'>{user.name}</h1>
                <h2 className="text-xl">{user.email}</h2>
                <p>{user.phone}</p>
                <p>{user.website}</p>
            </div>
        ))}
    </div>
  )
}

export default page

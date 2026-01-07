import React, { Suspense } from 'react'
import Author from '../Author';

type Post = {
    userId : number,
    id: number,
    title: string,
    body: string
}

async function page() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts:Post[] = await response.json();
    const filteredPosts = posts.filter(post => post.id % 10 === 1)
  return (
    <div className='flex flex-col items-center gap-4 p-4'>
      <h1 className='font-bold text-3xl text-white'>All Posts</h1>
      <div className="grid grid-cols-3 gap-3">
        {filteredPosts.map((post)=>(
            <div key={post.id} className="flex flex-col items-center gap-2 rounded-md bg-white">
                <h1 className="font-bold text-3xl">{post.title}</h1>
                <p>{post.body}</p>
                <Suspense fallback={<h1><div className='h-7 w-7 border-l-2 border-r-2 border-t-2 rounded-full border-purple-500 animate-spin'></div>Loading...</h1>}>
                <Author userid={post.userId} />
                </Suspense>
            </div>
        ))}
      </div>
    </div>
  )
}

export default page

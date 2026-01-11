import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import React from 'react'

type Post = {
    id: number;
    title: string;
    body: string
}

type Album = {
    id: number;
    title: string
}

async function getPosts(id: string){
    const response = fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    return (await response).json();
}

async function getAlbums(id : string){
    const response = fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`);
    return (await response).json();
}

async function page({params}:{params:Promise<{id:string}>}) {
    const {id} = await params;
    const allPosts = getPosts(id);
    const allAlbums = getAlbums(id);
    const [posts , albums] = await Promise.all([allPosts,allAlbums]);
  return (
    <div className='relative flex flex-col items-center gap-3'>
      <div className="relative flex flex-col w-full">
        <Image src="/america.jpg" alt='' height={900} width={900} className='h-70 w-full' />
        <Image src="/user1.jpg" alt='' height={900} width={900} className='h-40 w-40 mx-auto -translate-y-[50%] rounded-full' />
      </div>
      <div className="grid grid-cols-2 gap-4">
      <div>
        <h1 className="text-4xl text-center font-bold">All Posts</h1>
        {posts.map((post:Post)=>(
            <div key={post.id} className="flex flex-col my-2 items-center gap-2 shadow bg-white text-white rounded p-4">
                <h1 className="text-rose-600">{post.title}</h1>
                <p className="text-justify text-black">{post.body}</p>
            </div>
        ))}
            </div>
        <div>
            <h1 className="text-4xl text-center font-bold">All Albums</h1>
            {albums.map((album:Album)=>(
            <div key={album.id} className=" bg-white shadow my-2 flex justify-center items-center gap-2 text-white rounded p-4">
                <h1 className="text-blue-600">{album.title}</h1>
            </div>
        ))}
        </div>
        {/* <Tabs defaultValue='posts'>
            <TabsList>
                <TabsTrigger value='posts'>Posts</TabsTrigger>
                <TabsTrigger value='albums'>Albums</TabsTrigger>
            </TabsList>
            <TabsContent value='posts'>
                <Card>
                    {posts.map((post:Post)=>(
                        <CardTitle key={post.id}>{post.title}</CardTitle>
                    ))}
                </Card>
            </TabsContent>
        </Tabs> */}
      </div>
    </div>
  )
}

export default page

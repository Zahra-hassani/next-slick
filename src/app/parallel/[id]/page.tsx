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

async function page({params, searchParams}:{params:Promise<{id:string}>; searchParams:Promise<{name:string}>}) {
    const imgUrl:[string,string,string,string,string,string,string,string,string,string] = [
        "/user1.jpg",
        "/user2.jpeg",
        "/user3.jpeg",
        "/user4.jpg",
        "/user5.jpg",
        "/user6.jpeg",
        "/user7.jpeg",
        "/user8.jpeg",
        "/user9.jpeg",
        "/user10.jpg"
    ]
    const {id} = await params;
    const {name} = await searchParams;
    const user = Number(id)-1;
    const allPosts = getPosts(id);
    const allAlbums = getAlbums(id);
    const [posts , albums] = await Promise.all([allPosts,allAlbums]);
  return (
    <div className='relative flex flex-col items-center gap-3'>
      <div className="relative flex flex-col w-full">
        <Image src="/profile.jpg" alt='' height={900} width={900} className='h-100 w-full blur-xs' />
        <div className='w-fit h-fit mx-auto flex flex-col items-center gap-5 absolute top-[50%] left-[50%] -translate-[50%]'>
        <Image src={`${imgUrl[user]}`} alt='' height={900} width={900} className='h-40 w-40 mx-auto rounded-full' />
        <h1 className="text-4xl font-bold text-center text-white">{name}</h1>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
      <div>
        <h1 className="text-4xl text-center font-bold">All Posts</h1>
        {posts.map((post:Post)=>(
            <div key={post.id} className="flex flex-col my-2  gap-2 shadow bg-white text-white rounded p-4">
                <h1 className="text-blue-600 text-2xl font-semibold">{post.title}</h1>
                <p className="text-justify text-black">{post.body}</p>
            </div>
        ))}
            </div>
        <div>
            <h1 className="text-4xl text-center font-bold">All Albums</h1>
            {albums.map((album:Album)=>(
            <div key={album.id} className=" bg-white shadow my-2 flex justify-center items-center gap-2 text-white rounded p-4">
                <h1 className="text-blue-600 font-semibold">{album.title}</h1>
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

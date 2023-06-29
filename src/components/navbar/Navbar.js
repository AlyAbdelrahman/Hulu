'use client';
import requests from '@/utils/requests'
import { useRouter } from 'next/navigation'
import React from 'react'

function Navbar() {
    const router = useRouter();
  return (
    <nav className='relative'>
    <div className='flex px-10 space-x-10 sm:space-x-20 text-l overflow-scroll scrollbar-hide'>
        {Object.entries(requests).map(([key,{title, url}])=>(
                <h1 
                onClick={() => router.push(`/?genre=${key}`)}
                className='last:pr-5 cursor-pointer hover:scale-150 whitespace-nowrap transform duration-100 active:text-red-500 hover:text-white sm' key={key}>{title}</h1>
        ))}
        </div>
        <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-7 w-1/12'/>
    </nav>
  )
  
}

export default Navbar
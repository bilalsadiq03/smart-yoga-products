"use client"
import Link from 'next/link'
import React from 'react'

const Navbar = () => {


  return (
    <nav className='fixed z-10 p-4 w-full h-16 text-xl bg-black'>

      <ul>
        <div className="logo">
            <h1 >Logo</h1>
        </div>

        <div className='text-gray-200 flex gap-6'>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/products'>Products</Link>
            <Link href='/blog'>Blog</Link>
        </div>

        <div>
            <Link href='/login' className='px-4 py-2 border-2 rounded-lg text-white'>Login</Link>
        </div>

      </ul>

    </nav>
  );
};




export default Navbar
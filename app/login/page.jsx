'use client'
import Link from 'next/link';
import React, { useState } from 'react'




const Login = () => {


    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('')


  return (
    
    <div className='relative top-16'>
      <section className="h-full flex justify-center items-center">
        <div className="p-6 rounded-md mr-[4rem] mt-[2rem] w-1/1.25 user-container">
          <h1 className="text-2xl font-semibold mb-4 text-center">Login</h1>

          <form
            onSubmit={login}
            className="container w-[25rem]">
            <div className="my-[2rem]">
              <label
                htmlFor="text"
                className="block mb-2 text-sm font-medium text-black"
               >
                User Id
              </label>
              <input
                type="text"
                id="userId"
                className="p-2 border rounded w-full"
                placeholder="Enter User Id"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-black"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 p-2 border rounded w-full"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
            //   disabled={isLoading}
              type="submit"
              className="bg-pink-500 text-white px-4 py-2 rounded cursor-pointer my-[1rem]"
            >
              Login
            </button>

            {/* {isLoading && <Loader />} */}
          </form>

          <div className="mt-4">
            <p className="text-black">
              New Customer?{" "}
              <Link href="/register"
                // {/* to={redirect ? `/register?redirect=${redirect}` : "/register"} */}
                className="text-pink-500 hover:underline"
              >
                Register
              </Link>
            </p>
            </div>

        </div>
      </section>
    </div>
    
  )
}

export default Login
"use client"
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'

const Sinup = () => {

    const router = useRouter();

    const [name, setName] = useState('')
    const [userId, setuserId] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [loading, setLoading] = useState(false);

    

    const register = async () => {
        try {
            setLoading(true);
            const res = await axios.post('/api/users', {name, userId, email, password});
            console.log("Signup Success", res.data);
            toast.success(name, " registered successfully.")
            router.push('/login');
            
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        if (email.length > 0 && password.length > 0 && name.length > 0){
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [])


  return (
    <section className='relative top-12 flex justify-center items-center flex-wrap'>
        <div className='p-6 rounded-md user-container mr-[4rem] '>
            <h1 className='text-2xl text-center font-semibold mb-4'>
                {
                    loading ? "Signing..." : "Sign Up"
                }
            </h1>

            <form 
            className='container w-[25rem]'>
                <div className='my-[2rem]'>
                    <label 
                    htmlFor="name" 
                    className='block text-sm font-medium'>
                        Name
                    </label>
                    <input 
                    type="text" 
                    id='name' 
                    placeholder='Enter name' 
                    className='mt-1 p-2 border rounded w-full'
                    value={name}
                    onChange={e => setName(e.target.value)} 
                    />
                </div>

                <div className='my-[2rem]'>
                    <label 
                    htmlFor="userId" 
                    className='block text-sm font-medium'>
                        User Id
                    </label>
                    <input 
                    type="text" 
                    id='userId' 
                    placeholder='Enter User Id' 
                    className='mt-1 p-2 border rounded w-full'
                    value={userId}
                    onChange={e => setuserId(e.target.value)} 
                    />
                </div>

                <div className='my-[2rem]'>
                    <label 
                    htmlFor="email" 
                    className='block text-sm font-medium'>
                        Email
                    </label>
                    <input 
                    type="email" 
                    id='email' 
                    placeholder='Enter email' 
                    className='mt-1 p-2 border rounded w-full'
                    value={email}
                    onChange={e => setEmail(e.target.value)} 
                    />
                </div>

                <div className='my-[2rem]'>
                    <label 
                    htmlFor="password" 
                    className='block text-sm font-medium'>
                        Password
                    </label>
                    <input 
                    type="password" 
                    id='password' 
                    placeholder='Enter password' 
                    className='mt-1 p-2 border rounded w-full'
                    value={password}
                    onChange={e => setPassword(e.target.value)} 
                    />
                </div>

                <button 
                type='submit'
                onClick={register}
                className='bg-pink-500 text-white cursor-pointer px-4 py-2 my-[1rem] rounded'>
                    {
                        buttonDisabled ? "No SignUp" : "SignUp"
                    }
                </button>

                
            </form>
            
            <div className='mt-4'>
                <p>Already have an account? {" "}
                <Link href={'/login'}
                className='text-pink-500 hover:underline'
                >
                    Login
                </Link>
                </p>
            </div>
        </div>
    </section>
  )
}

export default Sinup
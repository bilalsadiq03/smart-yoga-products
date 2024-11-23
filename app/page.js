import React from 'react'
import feature1 from '../images/feature1.jpg'
import feature2 from '../images/feature2.jpg'
import feature3 from '../images/feature3.jpg'
import Image from 'next/image'
import HeroCarousel from '@/components/HeroCarousel'
import Link from 'next/link'
import InstagramFeed from '@/components/InstagramFeed'
import AllProducts from '@/components/AllProducts'
import Blogs from '@/components/Blogs'

const  Home = async () => {


  return (

    <div className='w-screen h-screen bg-[#F5F5DC]'>
      <div>
        <HeroCarousel />

        <section className="border py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Smart Yoga Products?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 shadow-lg rounded-lg bg-white h-auto hover:cursor-pointer">
            <Image src={feature1} alt="Benefit 1" className="h-1/2 mx-auto mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold mb-2">Track Your Progress</h3>
            <p className="text-gray-600">Monitor your movements and achieve your yoga goals effortlessly.</p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-white h-auto hover:cursor-pointer">
            <Image src={feature2} alt="Benefit 2" className="h-1/2 mx-auto mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold mb-2">Improve Postures</h3>
            <p className="text-gray-600">Get real-time feedback to perfect your yoga poses.</p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-white h-auto hover:cursor-pointer">
            <Image src={feature3} alt="Benefit 3" className="h-1/2 mx-auto mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold mb-2">Mind-Body Balance</h3>
            <p className="text-gray-600">Experience the harmony of body and mind with technology-backed yoga.</p>
          </div>
        </div>
      </section>
      
      <section className="py-12 px-6 text-center bg-forestGreen text-white">
        <h2 className="text-3xl font-bold mb-4">Take Your Yoga Practice to the Next Level</h2>
        <p className="text-lg mb-6">Shop the latest smart yoga products and elevate your wellness journey today.</p>
        <button className="border-2 font-semibold border-white text-white py-3 px-6 rounded text-lg hover:bg-[white] hover:text-forestGreen hover:font-semibold">
          <Link href='/products'>Shop Now</Link>
        </button>
      </section>

      
      <AllProducts />
      <Blogs />

      {/* <InstagramFeed /> */}

    


      </div>
    </div>
  )
}

export default Home
"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const HeroCarousel = () => {

    const slides = [
        {
          image: "images/carousel1.jpg",
          heading: 'Unlock the Future of Yoga Practice!',
          description: "Experience a new way of achieving balance, strength, and flexibility with our cutting-edge smart yoga tools.",
          buttonText: 'Shop Now'
        },
        {
          image: 'images/carousel2.jpg', 
          heading: 'Achieve Perfect Postures with Ease!',
          description: "Our smart yoga mats and wearables guide you with real-time feedback to master every pose.",
          buttonText: 'Explore Products'
        },
        {
          image: 'images/carousel3.jpg', 
          heading: 'Transform Your Mind and Body.',
          description: "Harness the power of technology to elevate your yoga practice and embrace holistic wellness.",
          buttonText: 'Start Your Journey'
        },
      ];



  return (
    <div className="w-full h-screen bg-background">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        // navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full flex items-center justify-center bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className=" z-10 text-white p-4 max-w-2xl">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">{slide.heading}</h1>
                <p className="text-lg md:text-xl mb-6">{slide.description}</p>
                <button className="border-2 text-white py-3 px-6 rounded">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>

      
    </div>
  )
}

export default HeroCarousel
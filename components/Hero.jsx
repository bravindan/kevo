'use client'

//bg-gradient-to-r from-red-400 to-transparent
import React from 'react';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter'
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram,FaYoutube, FaTiktok } from 'react-icons/fa';
import 'animate.css';


export default function Hero() {
  return (
    <div
      id="home"
      className="flex flex-col md:flex-row items-center w-full min-h-[90vh] p-8 bg-gradient-to-r from-orange-400 to-transparent"
    >
      <main className='flex items-center justify-between flex-col md:flex-row gap-2'>

      {/* Left Side - Text and Social Links */}
      <div className="flex flex-col md:mt-14 md:w-1/2  justify-center text-wrap">
        <h1 className="text-3xl md:text-4xl md:px-4 font-bold mb-4 mt-16 md:mt-1 animate__animated animate__backInUp">Kevin Onyango</h1>
        <h2 className='md:px-4 mb-3 font-semibold text-2xl animate__animated animate__fadeInLeft animate__delay-1s'>
          I am a{' '}
          <span className='font-semibold text-red-500 dark:text-black mb-2'>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={['fitness coach', 'gym instructor', 'martial artist']}
              loop={false}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
              
            />
        </span>
        <p className='font-medium text-sm bg-black/40 p-1 w-[240] rounded-full'>Certified by : Nairobi Zoezi school</p>
      </h2>
        <h4 className="text-lg gap-4 mb-6 md:px-4 animate__animated animate__zoomIn animate__delay-2s">
          <p className=''>
          I provide exceptional services to help you achieve your fitness goals. Let us work together to make your dream a reality and live a healthy life.
          </p>
          
        </h4>
        
        {/* Social Media Links */}
        <div className="flex space-x-4 md:px-4 animate__animated animate__flipInX animate__delay-3s">
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl hover:text-blue-400" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100063755867689&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl hover:text-blue-600" />
          </a>
          <a href="https://www.tiktok.com/@dragonfitnessarena?_t=8rCAGCdXvpI&_r=1" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="text-2xl hover:text-gray-600" />
          </a>
          <a href="https://www.instagram.com/dragonfitnessarena/profilecard/?igsh=MWVyMGFyYmdpM25hNw==" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl hover:text-pink-500" />
          </a>
          <a href="https://youtube.com/@dragonfitnessarena357?si=lGjalv3tWh285uoW" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-2xl hover:text-red-500" />
          </a>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="flex mt-8 md:mt-4 md:w-1/2 items-center justify-center animate__animated animate__backInRight ">
        <Image
          src="/kevo.jpg" // Update this path with your image file path
          alt="Hero Image"
          width={300}
          height={400}
          className="rounded-full  shadow-sm border border-gray-400 "
        />
      </div>
      </main>
    </div>
  );
}

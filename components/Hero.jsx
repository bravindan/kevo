'use client'

//bg-gradient-to-r from-red-400 to-transparent
import React from 'react';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter'
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram,FaYoutube } from 'react-icons/fa';
import 'animate.css';


export default function Hero() {
  return (
    <div
      id="home"
      className="flex flex-col md:flex-row items-center container mx-auto  w-full min-h-[90vh] p-8 bg-gradient-to-r from-red-400 to-transparent"
    >
      <main className='flex items-center justify-between flex-col md:flex-row gap-2'>

      {/* Left Side - Text and Social Links */}
      <div className="flex flex-col md:mt-14 md:w-1/2  justify-center text-wrap">
        <h1 className="text-3xl md:text-4xl md:px-4 font-bold mb-4 mt-16 md:mt-1 animate__animated animate__backInUp">Kevin Onyango</h1>
        <h2 className='md:px-4 mb-3 font-semibold text-2xl animate__animated animate__fadeInLeft animate__delay-1s'>
          I am a{' '}
          <span className='font-semibold text-red-500 dark:text-black'>
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
      </h2>
        <p className="text-lg mb-6 md:px-4 animate__animated animate__bounceInUp animate__delay-2s">
          We provide exceptional services to help your business grow. Explore our offerings and reach out for more information.
        </p>
        {/* Social Media Links */}
        <div className="flex space-x-4 md:px-4 animate__animated animate__flipInX animate__delay-3s">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl hover:text-blue-400" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl hover:text-blue-600" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-blue-500" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl hover:text-pink-500" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
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

"use client";

import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

import "animate.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const skills = [
  "Martial Arts",
  "Katabox",
  "Aerobics",
  "First Aid",
  "Nutrition&Dietetics",
  "Dance",
  "Body Building",
];


export default function About() {
    var settings = {
      dots: true,
      fade:true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
    //   cssEase: "linear",
    };
  return (
    <div
      id="about"
      className="flex w-full min-h-[100vh] bg-gradient-to-l from-orange-400 to-transparent "
    >
      <div className="mt-16 scroll-mt-16 w-full">
        <div className="py-16">
          <div className="container mx-auto px-6 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div className="md:w-5/12 animate__animated animate__zoomInLeft">
                <Slider {...settings} className=" ">
                  <div>
                    <img
                      src="/about/1Kevo.jpg"
                      alt="image"
                      loading="lazy"
                      className="w-full h-[400] md:h-[460] rounded-xl"
                    />
                  </div>
                  <div>
                    <img
                      src="/about/2kevo.jpg"
                      alt="image"
                      loading="lazy"
                      className="w-full h-[400] md:h-[460] rounded-xl"
                    />
                  </div>
                  <div>
                    <img
                      src="/about/kevo2.jpg"
                      alt="image"
                      loading="lazy"
                      className="w-full h-[400] md:h-[460] rounded-xl"
                    />
                  </div>
                </Slider>
              </div>

              <div className="md:w-7/12 animate__animated animate__zoomInRight">
                <h2 className="text-2xl font-bold md:text-4xl">About me</h2>
                <p className="mt-6">
                  With over a decade in the fitness industry, my journey began
                  with a passion for martial arts, inspired by action-packed
                  movies. This led me to compete as a national Taekwondo
                  fighter. Over time, I shifted my focus to weightlifting and
                  bodybuilding, advancing to become an award-winning gym and
                  martial arts instructor, and fitness coach. I have worked at
                  several gyms and currently coach at Dragon Fitness Arena.
                </p>
                <p className="mt-4">
                  I also provide personal training to help others reach their
                  fitness goals at the convenience of their home and schedule.
                  If I can do it, you can do it too.
                </p>
                
                <div className="mt-4">
                  <h2 className="text-2xl font-bold md:text-4xl">Skills</h2>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <li
                        key={index}
                        className="bg-black/30 dark:bg-black/40 p-2 rounded-xl text-sm md:text-xs"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

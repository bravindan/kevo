'use client'

// import dynamic from "next/dynamic";
import Image from "next/image";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// const Carousel = dynamic(
//   () => import("react-responsive-carousel").then((mod) => mod.Carousel),
//   { ssr: false }
// );
import 'animate.css';

const skills = [
   'Martial Arts', 
    'Katabox' ,
  '  Aerobics', 
    'First Aid' ,
    'Nutrition&Dietetics', 
    'Dance' ,
   'Body Building',
   
];

export default function About() {
  return (
    <div id="about" className="flex container mx-auto w-full min-h-[100vh] bg-gradient-to-l from-red-400 to-transparent ">
      <div className="mt-16 scroll-mt-16 ">
        <div className="py-16 ">
          <div className="container m-auto px-6 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div className="md:5/12 lg:w-5/12 animate__animated animate__zoomInLeft">
              {/* <Carousel
                showArrows={true}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={3000}
                className="carousel-wrapper"
              >
                <div className="image-container">
                  <Image
                    src="/about/1Kevo.jpg"
                    alt="Fitness journey image 1"
                    width={400}
                    height={400}
                    
                  />
                </div>
                <div className="image-container">
                  <Image
                    src="/about/2kevo.jpg"
                    alt="Fitness journey image 1"
                    width={400}
                    height={400}
                    
                  />
                </div>
                <div className="image-container">
                  <Image
                    src="/about/kevo4.jpg"
                    alt="Fitness journey image 1"
                    width={400}
                    height={400}
                  />
                </div>               
             </Carousel> */}

              <img
                  src="/about/1Kevo.jpg"
                  alt="image"
                  loading="lazy"
                  width=""
                  height=""
                  className=""
                />                

              </div>
              <div className=" md:7/12 lg:w-6/12 animate__animated animate__zoomInRight">
                
                  <h2 className="text-2xl font-bold md:text-4xl">My Journey</h2>
                  <p className="mt-6">
                    With over a decade in the fitness industry, my journey began
                    with a passion for martial arts, inspired by action-packed
                    movies. This led me to compete as a national Taekwondo
                    fighter. Over time, I shifted my focus to weightlifting and
                    bodybuilding, advancing to become an award winning gym and martial arts instructor, and
                    fitness coach. I have worked at several Gyms and currently coach
                    at Dragon Fitness Arena.
                    
                  </p>
                
                <p className="mt-4 ">
                  {" "}
                  I also provide personal training to help others reach their fitness goals at the convenience of their home and schedule.
                  If I can do it, you can do it too.
                </p>
                <div className="mt-4">
                  <h2 className="text-2xl font-bold md:text-4xl">Skills</h2>
                  <ul className="mt-6 md:flex md:gap-1">
                    
                    {skills.map((skill, index) => (
                      <li key={index} className="bg-gray-300 dark:bg-black/40 p-1 rounded-xl text-sm md:text-xs ">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>       
        </div>
      </div>
    </div>
  );
}

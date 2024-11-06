import React from "react";

export default function Services() {
  return (
    <div
      id="services"
      className=" flex bg-gradient-to-r from-red-400 to-transparent w-full min-h-[100vh] "
    >
      <div className="mt-16 scroll-mt-16 p-2">
        <section className=" body-font mb-5">
          <div className="container px-5  mx-auto">
            <h1 className="sm:text-3xl text-2xl font-bold title-font text-center  mb-32">
              What I do
              <br className="hidden sm:block" />
              {/* Selfies Wayfarers */}
            </h1>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div className="p-4 md:w-1/3 flex">
                
                <div className="flex-grow pl-6">
                  <h2 className=" text-lg title-font font-semibold mb-2">
                    Fitness Coach/Consultant
                  </h2>
                  <p className="leading-relaxed text-base">
                    Expert guidance in strength training, weight management, and
                    customized fitness plans tailored to your goals. Achieve
                    peak performance with proven techniques, motivation, and
                    dedicated support to transform your health and lifestyle.
                  </p>
                  <a className="mt-3 text-indigo-400 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex">

                <div className="flex-grow pl-6">
                  <h2 className="text-lg title-font font-semibold mb-2">
                    Gym Instructor
                  </h2>
                  <p className="leading-relaxed text-base">
                    Providing hands-on instruction in proper exercise
                    techniques, equipment use, and safe training practices.
                    Focusing on form, motivation, and tailored routines to help
                    you reach your fitness goals with confidence and efficiency.

                  </p>
                  <a className="mt-3 text-indigo-400 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex">

                <div className="flex-grow pl-6">
                  <h2 className="text-lg title-font font-semibold mb-2">
                    Martial Arts Instructor
                  </h2>
                  <p className="leading-relaxed text-base">
                    Teaching disciplined techniques in martial arts to build
                    strength, agility, and self-defense skills. Emphasizing
                    mental focus, resilience, and structured practice, guiding
                    each student towards mastery and personal growth.
                  </p>

                  <a className="mt-3 text-indigo-400 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

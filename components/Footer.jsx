import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="bg-gradient-to-r from-orange-400 to-transparent">
        <div className="container px-6 py-8 mx-auto">
          <div className="flex flex-col items-center text-center">
            <a href="#home">
              <img
                className="w-auto h-20 border border-black/30 dark:border-white rounded-full p-2"
                src="/dglogo.png"
                alt="logo"
              />
            </a>

            <p className="max-w-md mx-auto mt-4 dark:text-gray-300 font-semibold">
              Let me be your training and transformation partner.
            </p>

            <div className="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center">
            <a
                className="text-lg font-bold "
                href="tel:+254705598996"
              >
           
              <button className="w-full px-5 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-gradient-to-r from-orange-400 to-black/40 rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Get started
              </button>
              </a>
            </div>
          </div>

          <hr className="my-10 border-gray-200 dark:border-gray-700" />

          <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <p className="text-sm ">
              © Copyright {new Date().getFullYear()}. All Rights Reserved.
            </p>

            <div className="flex mt-3 -mx-2 sm:mt-0">
              <a
                href="#"
                className="mx-2 text-sm  transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                aria-label="Reddit"
              >
                {" "}
                Terms{" "}
              </a>

              <a
                href="#"
                className="mx-2 text-sm transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                aria-label="Reddit"
              >
                {" "}
                Privacy{" "}
              </a>

              <a
                href="#"
                className="mx-2 text-sm transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                aria-label="Reddit"
              >
                {" "}
                Cookies{" "}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

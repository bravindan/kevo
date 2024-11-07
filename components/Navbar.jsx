'use client'
import React, { useState, useEffect } from "react";
import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];


export default function Navbar() {
  const [activeLink, setActiveLink] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );

      sections.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(navLinks[index].href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className='p-4 flex fixed top-0 z-50 bg-gradient-to-r from-orange-400 to-orange-300 w-full min-h-[8vh] items-center justify-between'>
        <div className="flex ">
        <a href="#home">
              <img
                className="w-20 h-14  p-1"
                src="/dglogo.png"
                alt="logo"
              />
            </a>
        </div>
        <div className="flex">
            <ul className=' flex gap-2 md:gap-6 '>
            {/* {navLinks.map((link) => (
              <li key={link.href} className='font-semibold hover:text-red-600 transition-all'>
                <Link href={link.href} scroll={true}>{link.name}</Link>
              </li>
            ))} */}
            {navLinks.map((link) => (
          <li
            key={link.href}
            className={`font-semibold text-sm md:normal-case transition-all p-2 ${
              activeLink === link.href ? "bg-black/20 text-red-600 rounded-xl " : "hover:text-red-600"
            }`}
          >
            <Link href={link.href} scroll={true}>
              {link.name}
            </Link>
          </li>
        ))}
            </ul>
        </div>
       
    </div> 
  )
}

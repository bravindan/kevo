import React from 'react'
import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];


export default function Navbar() {
  return (
    <div className='flex fixed top-0 z-50 container mx-auto bg-gradient-to-r from-red-400 to-red-300 w-full min-h-[9vh] items-center justify-between'>
        <div className="flex mx-4 font-bold text-xl italic">Dragon</div>
        <div className="flex mx-4">
            <ul className='flex gap-2 md:gap-6'>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} scroll={true}>{link.name}</Link>
              </li>
            ))}
            </ul>
        </div>
       
    </div> 
  )
}

import React from 'react'
import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];


export default function Navbar() {
  return (
    <div className='flex fixed top-0 container mx-auto bg-blue-400 w-full min-h-[7vh] items-center justify-between'>
        <div className="flex mx-4">Kevin</div>
        <div className="flex mx-4">
        <ul className='flex gap-2'>
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
        </div>
       
    </div> 
  )
}

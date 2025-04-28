"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="#about-me" className="h-auto w-auto flex flex-row items-center">
        <Image src="/logo.png" alt='logo' width={100} height={100} />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            GEM_AI
          </span>
        </a>
        
        {/* Update the button to use Link for navigation */}
        <Link href= "/modes" className="p-[3px] relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
            Get Started
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

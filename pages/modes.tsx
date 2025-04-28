"use client";

import React from 'react';
import '../styles/globals.css';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import { SparklesIcon } from '@heroicons/react/24/solid'; // Import SparklesIcon
import Link from "next/link";

// Define or import your animation variants
const slideInFromTop = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const slideInFromLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay } }
});

const Modes = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute top-0 right-0 z-10 w-full h-full overflow-hidden">
        <Spline
          scene="https://prod.spline.design/U5faDc2X-Cgtt0YX/scene.splinecode"
          style={{ width: "150%", height: "100%" }}
        />
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        className="relative flex flex-row items-center justify-center px-20 mt-40 w-full z-20 overflow-hidden"
      >
        <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[7px] opacity-[0.9]"
          >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5 border-r-10" />
            <h1 className="Welcome-text text-[13px] text-white">
              An Ai For All
            </h1>
          </motion.div>

          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
          >
            <span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                Gem_Ai
              </span>
            </span>
          </motion.div>

          <motion.div
            variants={slideInFromLeft(0.8)}
            className="text-lg text-gray-400 my-5 max-w-[600px]"
          >
            create your own story
            <div className='flex flex-row gap-4 mt-4'>
  

              <Link href="/textmode">
                <button className="p-[4px] relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                  <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                    Let's start
                  </div>
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Modes;

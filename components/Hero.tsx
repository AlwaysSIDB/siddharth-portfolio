"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-[#0a0a0a] text-white">

      {/* Glow Background */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px] top-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[120px] bottom-[-120px]" />

      {/* Main Content */}
      <motion.h1
        initial={{opacity:0, y:40}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.8}}
        className="text-5xl md:text-7xl font-bold z-10"
      >
        Siddharth Bhardwaj
      </motion.h1>

      <motion.h2
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.3}}
        className="mt-6 text-2xl md:text-3xl font-semibold bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text z-10"
      >
        AI Engineer • Product Builder • Future Founder
      </motion.h2>

      <motion.p
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.6}}
        className="mt-6 max-w-xl text-gray-400 z-10"
      >
        I build intelligent systems and real-world products that solve meaningful problems — 
        combining AI, software, and design to create impact.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.9}}
        className="flex gap-4 mt-10 z-10"
      >
        <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:scale-105 transition">
          View Projects
        </button>

        <button className="px-6 py-3 rounded-xl border border-gray-600 hover:border-white transition">
          Contact Me
        </button>
      </motion.div>

    </section>
  )
}

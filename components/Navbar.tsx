"use client"

import { motion } from "framer-motion"

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 
                 backdrop-blur-lg bg-white/5 border border-white/10
                 px-8 py-3 rounded-2xl shadow-lg"
    >
      <ul className="flex gap-8 text-sm font-medium text-white">
        <li className="cursor-pointer hover:text-purple-400 transition">
          Home
        </li>
        <li className="cursor-pointer hover:text-purple-400 transition">
          Projects
        </li>
        <li className="cursor-pointer hover:text-purple-400 transition">
          Contact
        </li>
      </ul>
    </motion.nav>
  )
}

"use client"

import { motion } from "framer-motion"

const projects = [
  {
    title: "Legal Saathi",
    description:
      "AI-powered legal assistant that predicts case favorability and surfaces relevant past judgments to support faster legal research.",
  },
  {
    title: "Document Intelligence System",
    description:
      "Built an intelligent parser that detects risky clauses in legal documents and highlights potential red flags automatically.",
  },
  {
    title: "Case Prediction Model",
    description:
      "Developed a machine learning model trained on Indian court data to estimate litigation outcomes with explainable insights.",
  },
]

export default function Projects() {
  return (
    <section className="bg-[#0a0a0a] text-white py-32 px-6">
      
      <motion.h2
        initial={{opacity:0, y:40}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6}}
        className="text-4xl md:text-5xl font-bold text-center mb-20"
      >
        Selected Work
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{scale:1.05}}
            className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-purple-500 transition"
          >
            <h3 className="text-2xl font-semibold mb-4">
              {project.title}
            </h3>

            <p className="text-gray-400">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

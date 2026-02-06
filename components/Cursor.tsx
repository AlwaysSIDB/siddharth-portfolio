"use client"

import { useEffect, useState } from "react"

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updateMouse)

    return () => {
      window.removeEventListener("mousemove", updateMouse)
    }
  }, [])

  return (
    <div
      className="fixed pointer-events-none z-50"
      style={{
        left: position.x - 150,
        top: position.y - 150,
        width: 300,
        height: 300,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(124,58,237,0.5) 0%, rgba(124,58,237,0.25) 45%, transparent 75%)",
        filter: "blur(80px)",
      }}
    />
  )
}

"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function Preloader() {
  const [progress, setProgress] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          // Start fade out animation
          setTimeout(() => setFadeOut(true), 200)
          return 100
        }
        return prev + 4
      })
    }, 60)

    return () => clearInterval(timer)
  }, [])

  return (
    <div
      className={`fixed inset-0 bg-white z-50 flex flex-col items-center justify-center transition-opacity duration-1000 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="text-center">
        {/* Logo */}
        <div className="mb-12">
          <div className="relative w-32 h-32 mx-auto mb-8 flex items-center justify-center">
            <Image
              src="/images/foundrflow-logo.png"
              alt="FoundrFlow Logo"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>

          {/* Company Name */}
          <h1 className="text-3xl font-bold text-black mb-2">FoundrFlow</h1>
          <p className="text-gray-600 text-lg">Empowering Startup Success</p>
        </div>

        {/* Progress Section */}
        <div className="w-80 mx-auto">
          {/* Progress Bar */}
          <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mb-4">
            <div
              className="h-full bg-black rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Progress Percentage */}
          <div className="text-black font-mono text-sm">{progress}%</div>
        </div>
      </div>
    </div>
  )
}

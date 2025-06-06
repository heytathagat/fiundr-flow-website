"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import Link from "next/link"

export function FloatingBookingButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <Button
        size="lg"
        className="bg-black text-white hover:bg-gray-800 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
        asChild
      >
        <Link href="/book-call">
          <Calendar className="mr-2 h-5 w-5" />
          Book a Call
        </Link>
      </Button>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { BookingButton } from "@/components/booking-button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const services = [
    { name: "1-on-1 Mentorship", href: "/services/one-on-one-mentorship" },
    { name: "Strategic Planning", href: "/services/strategic-planning" },
    { name: "Growth Acceleration", href: "/services/growth-acceleration" },
    { name: "Pitch Coaching", href: "/services/pitch-coaching" },
  ]

  return (
    <header className="bg-white/80 backdrop-blur-lg border-b border-gray-200/50 sticky top-0 z-40 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-10 w-auto relative">
              <Image
                src="/images/foundrflow-logo.png"
                alt="FoundrFlow Logo"
                width={120}
                height={40}
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-black hover:text-gray-600 transition-colors font-medium">
              Home
            </Link>

            <div className="relative group">
              <button
                className="flex items-center text-black hover:text-gray-600 transition-colors font-medium"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Services
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>

              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-3 text-gray-700 hover:text-black hover:bg-gray-50 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className="text-black hover:text-gray-600 transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="text-black hover:text-gray-600 transition-colors font-medium">
              Contact
            </Link>
            <BookingButton className="bg-black text-white hover:bg-gray-800 rounded-full px-6 shadow-lg transform hover:scale-105 transition-all duration-300" />
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-black hover:text-gray-600 transition-colors font-medium">
                Home
              </Link>
              <div className="space-y-2">
                <div className="text-black font-medium">Services</div>
                <div className="pl-4 space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block text-gray-600 hover:text-black transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="/about" className="text-black hover:text-gray-600 transition-colors font-medium">
                About
              </Link>
              <Link href="/contact" className="text-black hover:text-gray-600 transition-colors font-medium">
                Contact
              </Link>
              <BookingButton className="bg-black text-white hover:bg-gray-800 rounded-full shadow-lg w-full" />
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import { FloatingBookingButton } from "@/components/floating-booking-button"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FoundrFlow - Startup Mentorship Platform",
  description:
    "Accelerate your startup journey with expert mentorship from seasoned entrepreneurs and industry experts.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}
        <FloatingBookingButton />
      </body>
    </html>
  )
}

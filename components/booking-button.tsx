"use client"

import { Button, type ButtonProps } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import Link from "next/link"

interface BookingButtonProps extends ButtonProps {
  variant?: "default" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  showIcon?: boolean
  text?: string
}

export function BookingButton({
  variant = "default",
  size = "default",
  showIcon = true,
  text = "Book a Call",
  className,
  ...props
}: BookingButtonProps) {
  return (
    <Button variant={variant} size={size} className={className} asChild {...props}>
      <Link href="/book-call">
        {showIcon && <Calendar className="mr-2 h-4 w-4" />}
        {text}
      </Link>
    </Button>
  )
}

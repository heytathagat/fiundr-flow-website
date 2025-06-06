"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, CalendarIcon, Clock, User, Mail, Phone } from "lucide-react"
import { addDays, format, startOfDay } from "date-fns"

// Available time slots
const TIME_SLOTS = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "01:00 PM",
  "01:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
]

// Fake unavailable slots (in a real app, this would come from an API)
const UNAVAILABLE_SLOTS = {
  "2025-06-05": ["09:00 AM", "09:30 AM", "02:00 PM"],
  "2025-06-06": ["11:00 AM", "11:30 AM", "03:30 PM"],
  "2025-06-07": ["10:00 AM", "01:00 PM", "04:00 PM"],
}

export function BookingWidget() {
  const [step, setStep] = useState(1)
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [timeSlot, setTimeSlot] = useState<string | undefined>(undefined)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Get available time slots for the selected date
  const getAvailableTimeSlots = (selectedDate: Date | undefined) => {
    if (!selectedDate) return []

    const dateKey = format(selectedDate, "yyyy-MM-dd")
    const unavailableForDay = UNAVAILABLE_SLOTS[dateKey] || []

    return TIME_SLOTS.filter((slot) => !unavailableForDay.includes(slot))
  }

  const availableTimeSlots = date ? getAvailableTimeSlots(date) : []

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setStep(3) // Move to confirmation step
    }, 1500)
  }

  // Disable dates before today and weekends
  const disabledDays = (date: Date) => {
    const today = startOfDay(new Date())
    return date < today || date.getDay() === 0 || date.getDay() === 6
  }

  return (
    <Card className="w-full max-w-md mx-auto shadow-xl border-0">
      <CardHeader className="bg-black text-white rounded-t-lg">
        <CardTitle className="text-xl">Book a 30-Minute Strategy Call</CardTitle>
        <CardDescription className="text-gray-300">
          Speak with our expert mentors and get personalized guidance
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-6">
        {step === 1 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label className="text-sm font-medium">Select a Date</Label>
              <div className="border rounded-md p-1">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={disabledDays}
                  className="mx-auto"
                  fromDate={new Date()}
                  toDate={addDays(new Date(), 30)}
                />
              </div>
            </div>

            {date && (
              <div className="space-y-2">
                <Label className="text-sm font-medium">Select a Time (30 min)</Label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {availableTimeSlots.length > 0 ? (
                    availableTimeSlots.map((slot) => (
                      <Button
                        key={slot}
                        type="button"
                        variant={timeSlot === slot ? "default" : "outline"}
                        className={`text-sm py-2 h-auto ${timeSlot === slot ? "bg-black text-white" : ""}`}
                        onClick={() => setTimeSlot(slot)}
                      >
                        {slot}
                      </Button>
                    ))
                  ) : (
                    <p className="text-gray-500 col-span-3 text-center py-2">No available slots for this date</p>
                  )}
                </div>
              </div>
            )}

            <Button
              className="w-full bg-black hover:bg-gray-800"
              disabled={!date || !timeSlot}
              onClick={() => setStep(2)}
            >
              Continue
            </Button>
          </div>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4 bg-gray-50 p-3 rounded-md">
              <CalendarIcon className="w-4 h-4" />
              <span>{format(date!, "MMMM d, yyyy")}</span>
              <span>•</span>
              <Clock className="w-4 h-4" />
              <span>{timeSlot}</span>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <div className="relative">
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="pl-10"
                />
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="pl-10"
                />
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <div className="relative">
                <Input
                  id="phone"
                  name="phone"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="pl-10"
                />
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company Name</Label>
              <Input
                id="company"
                name="company"
                placeholder="Your Startup"
                value={formData.company}
                onChange={handleInputChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">What would you like to discuss?</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your goals and challenges..."
                value={formData.message}
                onChange={handleInputChange}
                rows={3}
              />
            </div>

            <div className="flex space-x-3 pt-2">
              <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1">
                Back
              </Button>
              <Button type="submit" className="flex-1 bg-black hover:bg-gray-800" disabled={isSubmitting}>
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                    Booking...
                  </div>
                ) : (
                  "Book Call"
                )}
              </Button>
            </div>
          </form>
        )}

        {step === 3 && (
          <div className="text-center py-6">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-2">Booking Confirmed!</h3>
            <p className="text-gray-600 mb-6">
              Your 30-minute call has been scheduled for
              <br />
              <span className="font-semibold">
                {format(date!, "MMMM d, yyyy")} at {timeSlot}
              </span>
            </p>
            <p className="text-gray-600 mb-6">
              We've sent a confirmation email to
              <br />
              <span className="font-semibold">{formData.email}</span>
            </p>
            <p className="text-sm text-gray-500">
              Need to reschedule? Check your email for instructions or contact us at support@foundrflow.com
            </p>
          </div>
        )}
      </CardContent>

      {step === 1 && (
        <CardFooter className="flex justify-center border-t p-4">
          <p className="text-xs text-gray-500 text-center">
            Your call will be with one of our expert mentors. You can specify any preferences in the next step.
          </p>
        </CardFooter>
      )}
    </Card>
  )
}

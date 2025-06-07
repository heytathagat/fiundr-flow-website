"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Send, CheckCircle } from "lucide-react"

export function ContactForm({ title = "Get in Touch", subtitle = "We'll get back to you within 24 hours" }) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  const data = {
    firstName: (document.getElementById("firstName") as HTMLInputElement).value,
    lastName: (document.getElementById("lastName") as HTMLInputElement).value,
    email: (document.getElementById("email") as HTMLInputElement).value,
    company: (document.getElementById("company") as HTMLInputElement).value,
    message: (document.getElementById("message") as HTMLTextAreaElement).value,
  };
console.log("values",data);
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setIsSubmitted(true);
    } else {
      alert("Failed to send message.");
    }
  } catch (error) {
    alert("Error sending message.");
    console.error(error);
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
      <CardContent className="p-8">
        {!isSubmitted ? (
          <>
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">{title}</h3>
              <p className="text-gray-600">{subtitle}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    required
                    className="border-gray-300 focus:border-black focus:ring-black"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    required
                    className="border-gray-300 focus:border-black focus:ring-black"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="border-gray-300 focus:border-black focus:ring-black"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-gray-700">
                  Company Name
                </label>
                <Input
                  id="company"
                  placeholder="Your Startup"
                  className="border-gray-300 focus:border-black focus:ring-black"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                  How can we help?
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your needs and goals..."
                  required
                  className="min-h-[120px] border-gray-300 focus:border-black focus:ring-black"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white hover:bg-gray-800 text-lg py-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <>
                    <Send className="mr-2 w-5 h-5" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </>
        ) : (
          <div className="text-center py-12">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-2">Message Sent!</h3>
            <p className="text-gray-600 mb-6">
              Thank you for reaching out. Our team will get back to you within 24 hours.
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="border-2 border-black text-black hover:bg-black hover:text-white rounded-full transition-all duration-300"
            >
              Send Another Message
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

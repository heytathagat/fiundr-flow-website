"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingWidget } from "@/components/booking-widget"
import { CheckCircle } from "lucide-react"

export default function BookCallPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">Book Your Strategy Call</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Schedule a 30-minute call with our expert mentors to discuss your startup challenges and get personalized
              guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <BookingWidget />
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-black mb-6">What to Expect</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 bg-black rounded-full p-2 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-1">Personalized Assessment</h3>
                    <p className="text-gray-600">
                      We'll analyze your current situation and identify key challenges and opportunities for your
                      startup.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 bg-black rounded-full p-2 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-1">Expert Guidance</h3>
                    <p className="text-gray-600">
                      Get actionable advice from mentors who have built, scaled, and exited successful startups.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 bg-black rounded-full p-2 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-1">Clear Next Steps</h3>
                    <p className="text-gray-600">
                      Walk away with a clear action plan and recommendations for your specific situation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 bg-black rounded-full p-2 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-1">No Obligation</h3>
                    <p className="text-gray-600">
                      This call is completely free with no pressure or obligation to purchase any services.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gray-100 rounded-md">
                <p className="text-sm text-gray-600">
                  <strong>Note:</strong> Please be prepared to discuss your business goals, challenges, and any specific
                  questions you have. This helps us make the most of our time together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

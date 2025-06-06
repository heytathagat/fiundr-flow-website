"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"

// Hero Section
function ContactHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gray-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-8 animate-fade-in-up">
            Contact
            <span className="block text-black">Us</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to accelerate your startup journey? Get in touch with our team and let's discuss how we can help you
            achieve your goals.
          </p>
        </div>
      </div>
    </section>
  )
}

// Contact Information
function ContactInfo() {
  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Us",
      description: "Send us an email and we'll respond within 24 hours",
      contact: "hello@foundrflow.in",
      action: "mailto:hello@foundrflow.in",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Us",
      description: "Speak directly with our team during business hours",
      contact: "+91 90410-95531",
      action: "tel:+919041095531",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Visit Us",
      description: "Come visit our office in Dharuhera, Rewari",
      contact: "E902 M2K COUNTY Heights Sector 5 Dharuhera Rewari 123106",
      action: "https://maps.google.com",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Business Hours",
      description: "We're available during these hours",
      contact: "Mon-Fri: 9:00 AM - 6:00 PM IST",
      action: null,
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {contactMethods.map((method, index) => (
            <Card
              key={index}
              className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-black mx-auto mb-6">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{method.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{method.description}</p>
                {method.action ? (
                  <a href={method.action} className="text-black font-medium hover:text-gray-600 transition-colors">
                    {method.contact}
                  </a>
                ) : (
                  <p className="text-black font-medium">{method.contact}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Main Contact Form Section
function MainContactSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-6">Let's Start a Conversation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're looking for mentorship, have questions about our services, or want to explore partnership
              opportunities, we're here to help.
            </p>
          </div>

          <ContactForm
            title="Send Us a Message"
            subtitle="Fill out the form below and our team will get back to you within 24 hours"
          />
        </div>
      </div>
    </section>
  )
}

// FAQ Section
function FAQSection() {
  const faqs = [
    {
      question: "How quickly can I get started with mentorship?",
      answer:
        "Once you submit your application, we typically match you with a mentor within 5-7 business days. Your first session can be scheduled as soon as the match is confirmed.",
    },
    {
      question: "What industries do your mentors specialize in?",
      answer:
        "Our mentors have expertise across various industries including SaaS, FinTech, HealthTech, E-commerce, AI/ML, CleanTech, and more. We match you based on your specific industry and needs.",
    },
    {
      question: "Can I switch mentors if needed?",
      answer:
        "Absolutely. While we work hard to make the perfect match initially, we understand that sometimes a different mentor might be a better fit. We can facilitate a mentor change at any time.",
    },
    {
      question: "Do you work with international startups?",
      answer:
        "Yes, we work with startups globally. Our mentors are available across different time zones, and all our services can be delivered remotely via video calls and digital platforms.",
    },
    {
      question: "What's included in the strategic planning service?",
      answer:
        "Our strategic planning includes market analysis, competitive research, business model optimization, go-to-market strategy, financial modeling, and a comprehensive roadmap for execution.",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our services and how we can help your startup.
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-black mb-4">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ContactHero />
      <ContactInfo />
      <MainContactSection />
      <FAQSection />
      <Footer />
    </div>
  )
}

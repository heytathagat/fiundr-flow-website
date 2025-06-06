"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Users,
  Target,
  TrendingUp,
  MessageSquare,
  Sparkles,
  Zap,
  Brain,
  Award,
  Clock,
  Star,
  ArrowUpRight,
  CheckCircle,
  Shield,
  Lightbulb,
  Rocket,
} from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Preloader } from "@/components/preloader"
import { ContactForm } from "@/components/contact-form"

// Hero Section with 3D Perspective Cards
function HeroSection() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Hero Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-6 animate-fade-in">
                <Sparkles className="w-4 h-4 mr-2" />
                Transforming Startups Through Expert Mentorship
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
                Accelerate Your{" "}
                <span className="relative">
                  <span className="relative z-10">Startup</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-gray-300 -z-10 skew-x-3"></span>
                </span>{" "}
                Journey
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-xl">
                Connect with seasoned entrepreneurs and industry experts who have built, scaled, and exited successful
                startups. Get personalized guidance to overcome challenges and achieve your goals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  asChild
                >
                  <Link href="/book-call">Book a Free Strategy Call</Link>
                </Button>

                <Button
                  onClick={scrollToServices}
                  size="lg"
                  variant="outline"
                  className="border-2 border-black text-black hover:bg-black hover:text-white text-lg px-8 py-6 rounded-full transition-all duration-300"
                >
                  Explore Services
                </Button>
              </div>
            </div>

            {/* 3D Card Stack */}
            <div className="relative h-[500px] perspective">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  {/* Card 1 */}
                  <div className="absolute top-0 left-0 w-full transform -rotate-6 -translate-y-4 -translate-x-4 transition-all duration-500 hover:rotate-0 hover:translate-x-0 hover:translate-y-0 z-10">
                    <Card className="bg-white border-0 shadow-2xl overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                            <Users className="w-6 h-6 text-gray-800" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg">1-on-1 Mentorship</h3>
                            <p className="text-gray-600 text-sm">Personalized guidance</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-gray-800 mr-2" />
                            <span className="text-gray-600 text-sm">Expert industry mentors</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-gray-800 mr-2" />
                            <span className="text-gray-600 text-sm">Tailored action plans</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Card 2 */}
                  <div className="absolute top-0 left-0 w-full transform rotate-3 translate-y-16 transition-all duration-500 hover:rotate-0 hover:translate-y-12 z-20">
                    <Card className="bg-white border-0 shadow-2xl overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                            <Target className="w-6 h-6 text-gray-800" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg">Strategic Planning</h3>
                            <p className="text-gray-600 text-sm">Clear roadmaps for success</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-gray-800 mr-2" />
                            <span className="text-gray-600 text-sm">Market analysis</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-gray-800 mr-2" />
                            <span className="text-gray-600 text-sm">Competitive positioning</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Card 3 */}
                  <div className="absolute top-0 left-0 w-full transform -rotate-3 translate-y-32 translate-x-4 transition-all duration-500 hover:rotate-0 hover:translate-x-0 hover:translate-y-28 z-30">
                    <Card className="bg-white border-0 shadow-2xl overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                            <TrendingUp className="w-6 h-6 text-gray-800" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg">Growth Acceleration</h3>
                            <p className="text-gray-600 text-sm">Scale efficiently</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-gray-800 mr-2" />
                            <span className="text-gray-600 text-sm">Customer acquisition</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-gray-800 mr-2" />
                            <span className="text-gray-600 text-sm">Revenue optimization</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Highlight */}
          <div className="mt-20 mb-12">
            <div className="bg-black text-white p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gray-300 fill-gray-300" />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-300">5.0 Rating</span>
                </div>

                <p className="text-xl md:text-2xl font-medium mb-6 italic">
                  "FoundrFlow completely transformed our approach to fundraising."
                </p>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    SC
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Sarah Chen</h3>
                    <p className="text-gray-300">Founder & CEO, TechFlow AI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section - Animated Counter */}
      <div className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900 mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Impact in Numbers</h2>
              <div className="w-24 h-1 bg-gray-300 mx-auto"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "500+", label: "Startups Mentored", icon: <Users className="w-10 h-10 text-white" /> },
                { number: "50+", label: "Expert Mentors", icon: <Brain className="w-10 h-10 text-white" /> },
                { number: "95%", label: "Success Rate", icon: <Award className="w-10 h-10 text-white" /> },
                { number: "3K+", label: "Mentoring Hours", icon: <Clock className="w-10 h-10 text-white" /> },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-white">{stat.icon}</div>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Services Section with Interactive Cards
function ServicesSection() {
  const services = [
    {
      icon: <Users className="w-16 h-16" />,
      title: "1-on-1 Mentorship",
      description:
        "Get personalized guidance from experienced entrepreneurs who understand your challenges and can provide actionable insights to accelerate your growth.",
      features: [
        "Matched with industry-specific mentors",
        "Weekly strategic guidance sessions",
        "Direct access to mentor networks",
        "Customized growth action plans",
        "Real-time problem solving support",
        "Accountability and progress tracking",
      ],
      color: "from-gray-500 to-gray-700",
      href: "/services/one-on-one-mentorship",
    },
    {
      icon: <Target className="w-16 h-16" />,
      title: "Strategic Planning",
      description:
        "Transform your vision into executable strategies with comprehensive planning that aligns your team and accelerates sustainable growth.",
      features: [
        "Market opportunity analysis",
        "Competitive positioning strategy",
        "Business model optimization",
        "90-day execution roadmaps",
        "KPI framework development",
        "Resource allocation planning",
      ],
      color: "from-gray-500 to-gray-700",
      href: "/services/strategic-planning",
    },
    {
      icon: <TrendingUp className="w-16 h-16" />,
      title: "Growth Acceleration",
      description:
        "Scale your startup efficiently with proven frameworks and data-driven strategies that drive sustainable growth while maintaining quality.",
      features: [
        "Customer acquisition optimization",
        "Revenue growth strategies",
        "Conversion rate improvement",
        "Retention and engagement tactics",
        "Scalable systems implementation",
        "Performance metrics tracking",
      ],
      color: "from-gray-500 to-gray-700",
      href: "/services/growth-acceleration",
    },
    {
      icon: <MessageSquare className="w-16 h-16" />,
      title: "Pitch Coaching",
      description:
        "Perfect your investor pitch with expert coaching that transforms your presentation into a compelling story that secures funding.",
      features: [
        "Compelling narrative development",
        "Professional pitch deck design",
        "Investor psychology insights",
        "Q&A preparation and practice",
        "Mock pitch sessions",
        "Presentation skills training",
      ],
      color: "from-gray-500 to-gray-700",
      href: "/services/pitch-coaching",
    },
  ]

  return (
    <section id="services" className="py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gray-100 rounded-full text-gray-800 font-semibold mb-8">
              <Sparkles className="w-5 h-5 mr-2" />
              Comprehensive Mentorship Solutions
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-black mb-8 leading-tight">
              Everything You Need to
              <span className="block text-black">
                Transform Your Startup
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From initial idea validation to scaling and fundraising, our comprehensive suite of services provides the
              expert guidance and strategic support you need at every stage of your entrepreneurial journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="group">
                <Card className="h-full bg-white border border-gray-200 shadow-xl hover:shadow-3xl transition-all duration-700 transform group-hover:scale-[1.02] overflow-hidden relative">
                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}
                  ></div>

                  <CardContent className="p-10 relative z-10">
                    <div className="flex items-start mb-8">
                      <div
                        className={`p-4 rounded-3xl bg-gradient-to-br ${service.color} text-white mr-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}
                      >
                        {service.icon}
                      </div>

                      <div className="flex-1">
                        <h3 className="text-3xl font-bold text-black mb-4 group-hover:text-gray-800 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed">{service.description}</p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      <h4 className="text-lg font-semibold text-black">What's Included:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-start">
                            <div
                              className={`w-6 h-6 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center mr-3 mt-0.5 flex-shrink-0`}
                            >
                              <CheckCircle className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-gray-600 text-sm leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link href={service.href} className="block">
                      <Button
                        className={`w-full bg-gradient-to-r ${service.color} text-white hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 rounded-full py-6 text-lg font-semibold`}
                      >
                        Learn More About {service.title}
                        <ArrowUpRight className="ml-2 w-5 h-5" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Additional Value Props */}
          <div className="mt-24 grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Proven Track Record",
                description:
                  "87% of our mentees successfully secure funding within 6 months of completing our program.",
              },
              {
                icon: <Lightbulb className="w-12 h-12" />,
                title: "Industry Expertise",
                description:
                  "Our mentors span across 15+ industries with combined experience of 200+ successful exits.",
              },
              {
                icon: <Rocket className="w-12 h-12" />,
                title: "Accelerated Growth",
                description: "Startups in our program achieve 3.4x faster growth compared to industry averages.",
              },
            ].map((prop, index) => (
              <Card
                key={index}
                className="text-center p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <CardContent className="p-0">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="text-black">{prop.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">{prop.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{prop.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Rating Section */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center px-8 py-4 bg-black text-white rounded-full">
              <div className="flex mr-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gray-300 fill-gray-300" />
                ))}
              </div>
              <span className="text-lg font-semibold">our services rated 4.9/5 Average Rating</span>
              <span className="mx-3 text-gray-400">•</span>
              <span className="text-gray-300">Based on 200+ reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Contact Section with Split Design
function ContactSection() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-black"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="bg-white p-8 md:p-12 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none shadow-xl">
              <div className="max-w-md">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Ready to Start Your Journey?</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Take the first step towards transforming your startup with expert mentorship tailored to your unique
                  challenges and goals.
                </p>

                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-black mb-4">How We Can Help</h3>
                    <div className="space-y-4">
                      {[
                        "Find the perfect mentor for your industry and stage",
                        "Develop clear strategies to overcome your challenges",
                        "Create actionable plans with measurable outcomes",
                        "Connect with valuable resources and networks",
                      ].map((item, i) => (
                        <div key={i} className="flex items-start">
                          <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center text-white mt-1 mr-3 flex-shrink-0">
                            <CheckCircle className="w-3 h-3" />
                          </div>
                          <p className="text-gray-600">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-3" asChild>
                    <Link href="/book-call">Book a Free Call</Link>
                  </Button>

                  <Link
                    href="/services"
                    className="text-black font-medium hover:text-gray-600 transition-colors flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-black p-8 md:p-12 rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none">
              <ContactForm title="Get in Touch" subtitle="We'll get back to you within 24 hours" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// CTA Section with Gradient Background
function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-white/5 to-transparent"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-white/80 backdrop-blur-sm font-medium mb-8">
            <Zap className="w-4 h-4 mr-2" />
            Join 500+ Successful Founders
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to Transform Your Startup Journey?
          </h2>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Take the first step towards accelerated growth with expert guidance from founders who've been there before.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 text-lg px-12 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link href="/book-call">Book Your Free Strategy Call</Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-black text-lg px-12 py-6 rounded-full transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

// Main Component
export default function HomePage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Preloader />
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ContactSection />
      <CTASection />
      <Footer />
    </div>
  )
}

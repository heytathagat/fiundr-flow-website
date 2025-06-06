"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Users,
  Brain,
  Rocket,
  CheckCircle,
  ArrowRight,
  Calendar,
  Star,
  MessageSquare,
  Lightbulb,
  Target,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingElements } from "@/components/floating-elements"
import { ContactForm } from "@/components/contact-form"

// Hero Section
function ServiceHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <FloatingElements />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-6 py-3 bg-gray-100 rounded-full text-black font-semibold mb-8 animate-fade-in">
                <Users className="w-5 h-5 mr-2" />
                1-on-1 Mentorship
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-black mb-8 animate-fade-in-up">
                Personalized
                <span className="block text-black">Expert Guidance</span>
              </h1>

              <p
                className="text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Connect directly with experienced entrepreneurs and industry experts who have built, scaled, and exited
                successful startups. Get personalized guidance tailored to your unique challenges and goals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <Button
                  size="lg"
                  className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <Link href="/book-call">
                    <Calendar className="mr-2 w-5 h-5" />
                    Book a Call
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <Card className="bg-white/90 backdrop-blur-lg border-0 shadow-3xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold mr-4">
                      <Star className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-black">Featured Mentor</h3>
                      <p className="text-gray-600">Sidhant Kumar, Lexus India</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-gray-600 italic">
                      "I help founders navigate the critical early stages of product-market fit and team building. My
                      focus is on practical strategies that drive real results."
                    </p>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-gray-600">6+ years in Scalable leadership</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-gray-600">Expertise in Branding</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-gray-600">Former BMW India</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// How It Works
function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Match with the Right Mentor",
      description:
        "We carefully match you with mentors who have relevant experience in your industry and can address your specific challenges.",
      icon: <Users className="w-8 h-8" />,
      details: [
        "Complete a detailed intake questionnaire",
        "Review curated mentor profiles",
        "Select your preferred mentor matches",
        "Receive personalized mentor recommendations",
      ],
      gradient: "from-black to-gray-800",
    },
    {
      step: "02",
      title: "Define Your Goals",
      description:
        "Work with your mentor to establish clear, actionable goals and create a roadmap for your mentorship journey.",
      icon: <Target className="w-8 h-8" />,
      details: [
        "Initial goal-setting session",
        "Identify key challenges and opportunities",
        "Establish measurable success metrics",
        "Create a personalized mentorship plan",
      ],
      gradient: "from-gray-800 to-gray-600",
    },
    {
      step: "03",
      title: "Regular Mentorship Sessions",
      description:
        "Engage in focused, productive sessions with your mentor to gain insights, solve problems, and accelerate your growth.",
      icon: <MessageSquare className="w-8 h-8" />,
      details: [
        "Weekly or bi-weekly video sessions",
        "Structured agenda and action items",
        "Real-time problem-solving",
        "Accountability and progress tracking",
      ],
      gradient: "from-gray-600 to-gray-500",
    },
    {
      step: "04",
      title: "Implementation & Growth",
      description:
        "Apply your mentor's guidance, track your progress, and adjust your strategy to achieve breakthrough results.",
      icon: <Rocket className="w-8 h-8" />,
      details: [
        "Execute on mentor recommendations",
        "Regular progress reviews",
        "Strategy refinement",
        "Celebrate wins and overcome obstacles",
      ],
      gradient: "from-gray-500 to-gray-400",
    },
  ]

  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            How Our Mentorship
            <span className="block text-black">Process Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A structured approach to ensure you get maximum value from your mentorship experience
          </p>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <Card className="bg-white border-0 shadow-xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white mr-6 shadow-lg`}
                      >
                        {step.icon}
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 font-medium">Step {step.step}</div>
                        <h3 className="text-2xl font-bold text-black">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-black">What to Expect:</h4>
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                <div className="text-center lg:text-left">
                  <div className="text-8xl font-bold text-gray-100 mb-4">{step.step}</div>
                  <h3 className="text-3xl font-bold text-black mb-4">{step.title}</h3>
                  <p className="text-xl text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Mentor Expertise
function MentorExpertise() {
  const expertiseAreas = [
    {
      name: "Product Development",
      description: "Build products that users love with guidance on ideation, validation, and iteration.",
      icon: <Lightbulb className="w-8 h-8" />,
      skills: ["Product-market fit", "User research", "MVP development", "Feature prioritization"],
    },
    {
      name: "Fundraising",
      description: "Navigate the fundraising landscape with strategies for attracting and securing investment.",
      icon: <TrendingUp className="w-8 h-8" />,
      skills: ["Pitch deck creation", "Investor relations", "Term sheet negotiation", "Valuation strategies"],
    },
    {
      name: "Team Building",
      description: "Build high-performing teams with guidance on hiring, culture, and organizational structure.",
      icon: <Users className="w-8 h-8" />,
      skills: ["Hiring strategies", "Culture development", "Leadership coaching", "Performance management"],
    },
    {
      name: "Growth & Marketing",
      description: "Accelerate user acquisition and retention with data-driven growth strategies.",
      icon: <Rocket className="w-8 h-8" />,
      skills: ["Customer acquisition", "Retention optimization", "Marketing strategy", "Growth experiments"],
    },
    {
      name: "Strategic Planning",
      description: "Develop clear roadmaps and strategies to achieve your business goals and vision.",
      icon: <Target className="w-8 h-8" />,
      skills: ["Business model development", "Market analysis", "Competitive strategy", "Long-term planning"],
    },
    {
      name: "Operations & Scaling",
      description: "Build systems and processes that enable efficient scaling and operational excellence.",
      icon: <Brain className="w-8 h-8" />,
      skills: ["Process optimization", "Resource allocation", "International expansion", "Operational efficiency"],
    },
  ]

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gray-100 rounded-full mix-blend-multiply filter blur-2xl opacity-40"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-gray-100 rounded-full mix-blend-multiply filter blur-2xl opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Mentor
            <span className="block text-black">Expertise Areas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our mentors bring deep expertise across critical areas of startup development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <Card
              key={index}
              className="group bg-white border border-gray-100 hover:border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <CardContent className="p-8">
                <div className="text-black mb-4 p-3 bg-gray-100 rounded-xl w-fit group-hover:bg-gray-200 transition-colors duration-300">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{area.name}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{area.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-black text-sm">Key Focus Areas:</h4>
                  {area.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Testimonials
function Testimonials() {
  const testimonials = [
    {
      name: "Gagan Deep Singh",
      role: "Founder, Minus Zero",
      quote:
        "My mentor's guidance was transformative. They helped me navigate critical decisions that ultimately led to our successful Series A round.",
      image: "GDS",
    },
    {
      name: "Rohit",
      role: "CEO, Fusion Packs",
      quote:
        "The personalized attention and industry-specific advice I received was invaluable. My mentor helped me avoid common pitfalls and accelerate our growth.",
      image: "R",
    },
    {
      name: "Rameez Ahmed",
      role: "Founder Ntruck",
      quote:
        "Having a mentor who had built and sold a similar company was game-changing. Their insights into technical scaling challenges saved us months of trial and error.",
      image: "RA",
    },
  ]

  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Success
            <span className="block text-black">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from founders who have transformed their startups through our mentorship program
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white border-0 shadow-xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.image}
                  </div>
                  <div>
                    <h3 className="font-bold text-black">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <blockquote className="text-gray-600 italic leading-relaxed">"{testimonial.quote}"</blockquote>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Section
function ContactSection() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">Ready to Start Your Mentorship Journey?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our 1-on-1 mentorship program connects you with experienced entrepreneurs and industry experts who can
                provide personalized guidance tailored to your unique challenges and goals.
              </p>
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">What's Included</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-1 h-1 bg-black rounded-full mt-2.5 mr-2"></div>
                      <span className="text-gray-600">
                        <strong>Personalized Matching:</strong> We'll connect you with mentors who have relevant
                        experience in your industry
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1 h-1 bg-black rounded-full mt-2.5 mr-2"></div>
                      <span className="text-gray-600">
                        <strong>Structured Sessions:</strong> Regular video calls with your mentor to address your
                        specific challenges
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1 h-1 bg-black rounded-full mt-2.5 mr-2"></div>
                      <span className="text-gray-600">
                        <strong>Goal Setting:</strong> Establish clear objectives and track your progress
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1 h-1 bg-black rounded-full mt-2.5 mr-2"></div>
                      <span className="text-gray-600">
                        <strong>Resource Access:</strong> Get templates, tools, and resources to accelerate your growth
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <Link href="/book-call">
                    <Calendar className="mr-2 w-5 h-5" />
                    Book a Free Strategy Call
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-black text-black hover:bg-black hover:text-white text-lg px-8 py-4 rounded-full transition-all duration-300"
                  asChild
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>

            <div>
              <ContactForm
                title="Start Your Mentorship Journey"
                subtitle="Tell us about your startup and mentorship needs"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// CTA Section
function ServiceCTA() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-900/50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Ready to Accelerate
            <span className="block text-gray-300">Your Startup Journey?</span>
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Join hundreds of founders who have transformed their startups with personalized mentorship from experienced
            entrepreneurs
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 text-lg px-12 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Start Mentorship
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-black text-lg px-12 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function OneOnOneMentorshipPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ServiceHero />
      <HowItWorks />
      <MentorExpertise />
      <Testimonials />
      <ContactSection />
      <ServiceCTA />
      <Footer />
    </div>
  )
}

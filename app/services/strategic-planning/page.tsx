"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Target,
  BarChart3,
  CheckCircle,
  Brain,
  Rocket,
  TrendingUp,
  Calendar,
  PieChart,
  ArrowRight,
  Clock,
  Lightbulb,
  Shield,
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
                <Target className="w-5 h-5 mr-2" />
                Strategic Planning
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-black mb-8 animate-fade-in-up">
                Build Your
                <span className="block text-black">Roadmap to Success</span>
              </h1>

              <p
                className="text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Transform your vision into actionable strategies with comprehensive planning that aligns your team,
                secures your market position, and accelerates sustainable growth through data-driven decision making.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <Button
                  size="lg"
                  className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Rocket className="mr-2 w-5 h-5" />
                  Start Planning
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-black text-black hover:bg-black hover:text-white text-lg px-8 py-4 rounded-full transition-all duration-300"
                >
                  <Brain className="mr-2 w-5 h-5" />
                  Learn More
                </Button>
              </div>
            </div>

            <div className="relative">
              <Card className="bg-white/90 backdrop-blur-lg border-0 shadow-3xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold mr-4">
                      <BarChart3 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-black">Strategic Framework</h3>
                      <p className="text-gray-600">90-Day Growth Plan</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-gray-600">Market Analysis Complete</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-gray-600">Competitive Strategy Defined</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-gray-600">KPIs & Metrics Established</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-4 h-4 border-2 border-gray-300 rounded mr-2"></div>
                      <span className="text-gray-400">Implementation Timeline</span>
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

// Strategic Planning Process
function PlanningProcess() {
  const phases = [
    {
      phase: "Phase 1",
      title: "Discovery & Analysis",
      duration: "Week 1-2",
      description: "Deep dive into your business model, market position, and competitive landscape",
      activities: [
        "Business model canvas creation",
        "SWOT analysis and market research",
        "Competitive intelligence gathering",
        "Customer persona development",
        "Revenue stream analysis",
      ],
      icon: <Lightbulb className="w-8 h-8" />,
      gradient: "from-black to-gray-800",
    },
    {
      phase: "Phase 2",
      title: "Strategy Development",
      duration: "Week 3-4",
      description: "Craft comprehensive strategies aligned with your vision and market opportunities",
      activities: [
        "Strategic objectives definition",
        "Go-to-market strategy creation",
        "Product roadmap development",
        "Pricing strategy optimization",
        "Partnership strategy planning",
      ],
      icon: <Target className="w-8 h-8" />,
      gradient: "from-gray-800 to-gray-600",
    },
    {
      phase: "Phase 3",
      title: "Implementation Planning",
      duration: "Week 5-6",
      description: "Create detailed action plans with timelines, resources, and success metrics",
      activities: [
        "Detailed project timelines",
        "Resource allocation planning",
        "Risk assessment and mitigation",
        "KPI framework establishment",
        "Team responsibility mapping",
      ],
      icon: <Calendar className="w-8 h-8" />,
      gradient: "from-gray-600 to-gray-500",
    },
    {
      phase: "Phase 4",
      title: "Execution & Monitoring",
      duration: "Ongoing",
      description: "Support implementation with regular reviews and strategy adjustments",
      activities: [
        "Weekly progress reviews",
        "Performance metrics tracking",
        "Strategy refinement sessions",
        "Obstacle resolution support",
        "Quarterly strategy updates",
      ],
      icon: <TrendingUp className="w-8 h-8" />,
      gradient: "from-gray-500 to-gray-400",
    },
  ]

  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Our Strategic
            <span className="block text-black">Planning Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven 4-phase methodology that transforms your vision into executable strategies
          </p>
        </div>

        <div className="space-y-16">
          {phases.map((phase, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <Card className="bg-white border-0 shadow-xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${phase.gradient} flex items-center justify-center text-white mr-6 shadow-lg`}
                      >
                        {phase.icon}
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 font-medium">{phase.phase}</div>
                        <h3 className="text-2xl font-bold text-black">{phase.title}</h3>
                        <div className="text-sm text-gray-600 flex items-center mt-1">
                          <Clock className="w-4 h-4 mr-1" />
                          {phase.duration}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">{phase.description}</p>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-black">Key Activities:</h4>
                      <ul className="space-y-2">
                        {phase.activities.map((activity, activityIndex) => (
                          <li key={activityIndex} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                <div className="text-center lg:text-left">
                  <div className="text-8xl font-bold text-gray-100 mb-4">0{index + 1}</div>
                  <h3 className="text-3xl font-bold text-black mb-4">{phase.title}</h3>
                  <p className="text-xl text-gray-600 leading-relaxed">{phase.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Strategic Frameworks
function FrameworksSection() {
  const frameworks = [
    {
      name: "Business Model Canvas",
      description: "Visualize and optimize your business model across 9 key building blocks",
      icon: <PieChart className="w-8 h-8" />,
      benefits: ["Clear value proposition", "Revenue stream optimization", "Cost structure analysis"],
    },
    {
      name: "OKRs (Objectives & Key Results)",
      description: "Set ambitious goals and track progress with measurable key results",
      icon: <Target className="w-8 h-8" />,
      benefits: ["Aligned team objectives", "Measurable outcomes", "Quarterly focus"],
    },
    {
      name: "SWOT Analysis",
      description: "Comprehensive analysis of strengths, weaknesses, opportunities, and threats",
      icon: <Shield className="w-8 h-8" />,
      benefits: ["Strategic positioning", "Risk identification", "Opportunity mapping"],
    },
    {
      name: "Go-to-Market Strategy",
      description: "Detailed plan for launching products and acquiring customers effectively",
      icon: <Rocket className="w-8 h-8" />,
      benefits: ["Market entry strategy", "Customer acquisition plan", "Competitive positioning"],
    },
    {
      name: "Financial Modeling",
      description: "Build comprehensive financial models for planning and investor presentations",
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: ["Revenue projections", "Funding requirements", "Unit economics"],
    },
    {
      name: "Product Roadmap",
      description: "Strategic timeline for product development and feature releases",
      icon: <Calendar className="w-8 h-8" />,
      benefits: ["Development priorities", "Resource allocation", "Market timing"],
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
            Strategic
            <span className="block text-black">Frameworks</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proven methodologies and frameworks we use to build your strategic foundation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {frameworks.map((framework, index) => (
            <Card
              key={index}
              className="group bg-white border border-gray-100 hover:border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <CardContent className="p-8">
                <div className="text-black mb-4 p-3 bg-gray-100 rounded-xl w-fit group-hover:bg-gray-200 transition-colors duration-300">
                  {framework.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{framework.name}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{framework.description}</p>
                <div className="space-y-2">
                  {framework.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
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

// Contact Section (replaces PricingSection)
function ContactSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">Ready to Build Your Strategic Foundation?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our comprehensive strategic planning process will transform your vision into actionable strategies that
                drive sustainable growth. Let's discuss how we can help you create a roadmap for success.
              </p>
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Our Process</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-1 h-1 bg-black rounded-full mt-2.5 mr-2"></div>
                      <span className="text-gray-600">
                        <strong>Discovery Call:</strong> Understand your business, market, and objectives
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1 h-1 bg-black rounded-full mt-2.5 mr-2"></div>
                      <span className="text-gray-600">
                        <strong>Custom Proposal:</strong> Tailored strategic planning package for your needs
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1 h-1 bg-black rounded-full mt-2.5 mr-2"></div>
                      <span className="text-gray-600">
                        <strong>Strategy Development:</strong> 4-phase methodology to build your roadmap
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1 h-1 bg-black rounded-full mt-2.5 mr-2"></div>
                      <span className="text-gray-600">
                        <strong>Implementation Support:</strong> Ongoing guidance to execute your strategy
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <ContactForm
                title="Start Strategic Planning"
                subtitle="Tell us about your business and strategic challenges"
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
            Ready to Build Your
            <span className="block text-gray-300">Strategic Foundation?</span>
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Transform your vision into a comprehensive strategy that drives sustainable growth and market success
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 text-lg px-12 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Start Strategic Planning
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-black hover:bg-white hover:text-black text-lg px-12 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
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

export default function StrategicPlanningPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ServiceHero />
      <PlanningProcess />
      <FrameworksSection />
      <ContactSection />
      <ServiceCTA />
      <Footer />
    </div>
  )
}

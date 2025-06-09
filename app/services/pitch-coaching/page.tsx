"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  MessageSquare,
  Presentation,
  Trophy,
  DollarSign,
  Users,
  Target,
  CheckCircle,
  ArrowRight,
  Clock,
  Lightbulb,
  FileText,
  Video,
  Mic,
  BarChart3,
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
                <MessageSquare className="w-5 h-5 mr-2" />
                Pitch Coaching
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-black mb-8 animate-fade-in-up">
                Perfect Your
                <span className="block text-black">Investor Pitch</span>
              </h1>

              <p
                className="text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Master the art of pitching with expert coaching that transforms your presentation into a compelling
                story that captivates investors, secures funding, and opens doors to strategic partnerships.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <Button
                  size="lg"
                  className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Presentation className="mr-2 w-5 h-5" />
                  Start Coaching
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-black text-black hover:bg-black hover:text-white text-lg px-8 py-4 rounded-full transition-all duration-300"
                >
                  <Trophy className="mr-2 w-5 h-5" />
                  Success Stories
                </Button>
              </div>
            </div>

            <div className="relative">
              <Card className="bg-white/90 backdrop-blur-lg border-0 shadow-3xl transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold mr-4">
                      <DollarSign className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-black">Funding Success</h3>
                      <p className="text-gray-600">Our Track Record</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Success Rate</span>
                      <span className="text-2xl font-bold text-black">87%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Avg. Funding</span>
                      <span className="text-2xl font-bold text-black">$500K</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Time to Close</span>
                      <span className="text-2xl font-bold text-black">4.2 weeks</span>
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

// Pitch Coaching Process
function CoachingProcess() {
  const phases = [
    {
      phase: "Phase 1",
      title: "Story & Structure",
      duration: "Week 1-2",
      description:
        "Craft a compelling narrative that resonates with investors and clearly communicates your value proposition",
      activities: [
        "Problem-solution narrative development",
        "Market opportunity storytelling",
        "Competitive advantage positioning",
        "Traction and validation highlights",
        "Financial projections presentation",
        "Team credibility establishment",
      ],
      icon: <FileText className="w-8 h-8" />,
      gradient: "from-black to-gray-800",
    },
    {
      phase: "Phase 2",
      title: "Deck Design & Content",
      duration: "Week 3-4",
      description: "Create visually stunning pitch decks that support your story with compelling data and design",
      activities: [
        "Pitch deck structure optimization",
        "Visual design and branding alignment",
        "Data visualization and charts",
        "Appendix and backup slides creation",
        "Demo and product showcase integration",
        "Investor-specific deck customization",
      ],
      icon: <Presentation className="w-8 h-8" />,
      gradient: "from-gray-800 to-gray-600",
    },
    {
      phase: "Phase 3",
      title: "Delivery & Performance",
      duration: "Week 5-6",
      description: "Master presentation skills, body language, and Q&A handling for confident delivery",
      activities: [
        "Presentation skills training",
        "Body language and voice coaching",
        "Q&A preparation and practice",
        "Objection handling techniques",
        "Investor psychology understanding",
        "Confidence building exercises",
      ],
      icon: <Mic className="w-8 h-8" />,
      gradient: "from-gray-600 to-gray-500",
    },
    {
      phase: "Phase 4",
      title: "Practice & Refinement",
      duration: "Week 7-8",
      description: "Intensive practice sessions with feedback and refinement for pitch perfection",
      activities: [
        "Mock investor pitch sessions",
        "Video recording and analysis",
        "Peer feedback and iteration",
        "Timing and pacing optimization",
        "Final deck polishing",
        "Investor meeting preparation",
      ],
      icon: <Video className="w-8 h-8" />,
      gradient: "from-gray-500 to-gray-400",
    },
  ]

  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Our Pitch Coaching
            <span className="block text-black">Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive 8-week program that transforms your pitch from good to investor-ready
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

// Pitch Components
function PitchComponents() {
  const components = [
    {
      name: "Problem Statement",
      description: "Clearly articulate the pain point your startup solves with compelling market evidence",
      icon: <Target className="w-8 h-8" />,
      tips: ["Use real customer quotes", "Quantify the problem size", "Make it relatable to investors"],
    },
    {
      name: "Solution Overview",
      description: "Present your unique solution and demonstrate how it addresses the identified problem",
      icon: <Lightbulb className="w-8 h-8" />,
      tips: ["Show, don't just tell", "Highlight key differentiators", "Keep it simple and clear"],
    },
    {
      name: "Market Opportunity",
      description: "Showcase the size and growth potential of your target market with credible data",
      icon: <BarChart3 className="w-8 h-8" />,
      tips: ["Use TAM, SAM, SOM framework", "Show market trends", "Validate with third-party data"],
    },
    {
      name: "Business Model",
      description: "Explain how you make money and demonstrate path to profitability",
      icon: <DollarSign className="w-8 h-8" />,
      tips: ["Clear revenue streams", "Unit economics", "Scalability demonstration"],
    },
    {
      name: "Traction & Validation",
      description: "Prove market demand with concrete metrics, partnerships, and customer testimonials",
      icon: <TrendingUp className="w-8 h-8" />,
      tips: ["Show growth metrics", "Customer testimonials", "Key partnerships"],
    },
    {
      name: "Team Credibility",
      description: "Establish why your team is uniquely positioned to execute on this opportunity",
      icon: <Users className="w-8 h-8" />,
      tips: ["Relevant experience", "Complementary skills", "Previous successes"],
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
            Essential Pitch
            <span className="block text-black">Components</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master the key elements that make investor pitches compelling and memorable
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {components.map((component, index) => (
            <Card
              key={index}
              className="group bg-white border border-gray-100 hover:border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <CardContent className="p-8">
                <div className="text-black mb-4 p-3 bg-gray-100 rounded-xl w-fit group-hover:bg-gray-200 transition-colors duration-300">
                  {component.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{component.name}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{component.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-black text-sm">Pro Tips:</h4>
                  {component.tips.map((tip, tipIndex) => (
                    <div key={tipIndex} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{tip}</span>
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

// Performance Metrics Section (replacing Success Stories)
function PerformanceMetrics() {
  const metrics = [
    {
      title: "Funding Success Rate",
      value: "87%",
      description: "Of our coached founders successfully secure funding within 6 months",
      chart: [65, 72, 78, 83, 87, 89, 87, 90],
      color: "bg-green-500",
    },
    {
      title: "Average Funding Amount",
      value: "$500K",
      description: "Average funding secured by founders who complete our coaching program",
      chart: [200, 250, 320, 380, 450, 500, 480, 520],
      color: "bg-blue-500",
    },
    {
      title: "Pitch Improvement Score",
      value: "+340%",
      description: "Average improvement in pitch effectiveness after our 8-week program",
      chart: [100, 150, 200, 250, 300, 340, 360, 380],
      color: "bg-purple-500",
    },
    {
      title: "Time to Funding",
      value: "4.2 weeks",
      description: "Average time from final pitch to funding confirmation",
      chart: [8, 7, 6, 5.5, 4.8, 4.2, 4.0, 4.1],
      color: "bg-orange-500",
    },
  ]

  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Performance
            <span className="inline text-black"> Metrics</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Data-driven results from our pitch coaching program demonstrate consistent success across key metrics
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {metrics.map((metric, index) => (
            <Card
              key={index}
              className="bg-white border-0 shadow-xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105"
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-2">{metric.title}</h3>
                    <div className="text-4xl font-bold text-black mb-2">{metric.value}</div>
                  </div>
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center">
                    <BarChart3 className="w-8 h-8 text-black" />
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{metric.description}</p>

                {/* Mini Chart */}
                <div className="space-y-3">
                  <div className="flex items-end space-x-1 h-16">
                    {metric.chart.map((value, i) => (
                      <div
                        key={i}
                        className={`flex-1 ${metric.color} rounded-t opacity-80 hover:opacity-100 transition-opacity duration-300`}
                        style={{
                          height: `${(value / Math.max(...metric.chart)) * 100}%`,
                          animationDelay: `${i * 0.1}s`,
                        }}
                      ></div>
                    ))}
                  </div>
                  <div className="text-xs text-gray-500 text-center">Last 8 quarters</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-black mb-2">95%</div>
            <div className="text-gray-600">Client Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-black mb-2">200+</div>
            <div className="text-gray-600">Successful Pitches</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-black mb-2">50+</div>
            <div className="text-gray-600">Investor Connections</div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Contact Section (replaces PricingSection)
function ContactSection() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">Ready to Perfect Your Pitch?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our pitch coaching has helped founders secure over $2B in funding with an 87% success rate. Let's
                transform your presentation into a compelling story that captivates investors.
              </p>
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Coaching Includes</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-1 h-1 bg-black rounded-full mt-2.5 mr-2"></div>
                      <span className="text-gray-600">
                        <strong>Story Development:</strong> Craft a compelling narrative that resonates with investors
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1 h-1 bg-black rounded-full mt-2.5 mr-2"></div>
                      <span className="text-gray-600">
                        <strong>Deck Creation:</strong> Professional pitch deck design and content optimization
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1 h-1 bg-black rounded-full mt-2.5 mr-2"></div>
                      <span className="text-gray-600">
                        <strong>Presentation Skills:</strong> Master delivery, body language, and Q&A handling
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1 h-1 bg-black rounded-full mt-2.5 mr-2"></div>
                      <span className="text-gray-600">
                        <strong>Mock Sessions:</strong> Practice with experienced investors and get feedback
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <ContactForm
                title="Start Pitch Coaching"
                subtitle="Tell us about your funding goals and current pitch status"
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
            Ready to Perfect
            <span className="block text-gray-300">Your Pitch?</span>
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Join successful founders who've secured millions in funding through our proven pitch coaching methodology
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 text-lg px-12 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Start Pitch Coaching
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

export default function PitchCoachingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ServiceHero />
      <CoachingProcess />
      <PitchComponents />
      <PerformanceMetrics />
      <ContactSection />
      <ServiceCTA />
      <Footer />
    </div>
  )
}

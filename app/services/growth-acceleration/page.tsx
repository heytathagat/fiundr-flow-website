"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  TrendingUp,
  Zap,
  Rocket,
  BarChart3,
  Users,
  Target,
  CheckCircle,
  ArrowRight,
  Clock,
  Brain,
  Globe,
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
                <TrendingUp className="w-5 h-5 mr-2" />
                Growth Acceleration
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-black mb-8 animate-fade-in-up">
                Scale Your
                <span className="block text-black">Startup Rapidly</span>
              </h1>

              <p
                className="text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Accelerate your growth with proven frameworks, data-driven strategies, and expert guidance that help you
                scale efficiently while maintaining quality, culture, and sustainable unit economics.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <Button
                  size="lg"
                  className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Rocket className="mr-2 w-5 h-5" />
                  Accelerate Growth
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-black text-black hover:bg-black hover:text-white text-lg px-8 py-4 rounded-full transition-all duration-300"
                >
                  <Zap className="mr-2 w-5 h-5" />
                  See Results
                </Button>
              </div>
            </div>

            <div className="relative">
              <Card className="bg-white/90 backdrop-blur-lg border-0 shadow-3xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold mr-4">
                      <BarChart3 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-black">Growth Metrics</h3>
                      <p className="text-gray-600">Last 6 Months</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Revenue Growth</span>
                      <span className="text-2xl font-bold text-black">+340%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">User Acquisition</span>
                      <span className="text-2xl font-bold text-black">+180%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Market Expansion</span>
                      <span className="text-2xl font-bold text-black">+5 Markets</span>
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

// Growth Methodology
function GrowthMethodology() {
  const methodology = [
    {
      step: "01",
      title: "Growth Audit & Baseline",
      description: "Comprehensive analysis of current growth metrics, bottlenecks, and opportunities",
      duration: "Week 1",
      activities: [
        "Current metrics analysis and benchmarking",
        "Growth funnel optimization assessment",
        "Customer acquisition cost (CAC) analysis",
        "Lifetime value (LTV) calculation and optimization",
        "Competitive growth strategy analysis",
        "Technology stack and tools evaluation",
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      gradient: "from-black to-gray-800",
    },
    {
      step: "02",
      title: "Growth Strategy Design",
      description: "Develop comprehensive growth strategies tailored to your market and business model",
      duration: "Week 2-3",
      activities: [
        "Growth hypothesis development and prioritization",
        "Customer acquisition channel optimization",
        "Product-market fit enhancement strategies",
        "Viral and referral program design",
        "Retention and engagement improvement plans",
        "Revenue optimization and pricing strategies",
      ],
      icon: <Lightbulb className="w-8 h-8" />,
      gradient: "from-gray-800 to-gray-600",
    },
    {
      step: "03",
      title: "Rapid Experimentation",
      description: "Implement high-impact growth experiments with rapid testing and iteration cycles",
      duration: "Week 4-8",
      activities: [
        "A/B testing framework implementation",
        "Growth experiment design and execution",
        "Conversion rate optimization (CRO)",
        "User onboarding flow optimization",
        "Marketing channel testing and scaling",
        "Product feature growth experiments",
      ],
      icon: <Zap className="w-8 h-8" />,
      gradient: "from-gray-600 to-gray-500",
    },
    {
      step: "04",
      title: "Scale & Optimize",
      description: "Scale successful experiments and build sustainable growth systems",
      duration: "Week 9-12",
      activities: [
        "Successful experiment scaling strategies",
        "Growth team structure and processes",
        "Automated growth systems implementation",
        "Advanced analytics and attribution setup",
        "Growth metrics dashboard creation",
        "Long-term growth roadmap development",
      ],
      icon: <Rocket className="w-8 h-8" />,
      gradient: "from-gray-500 to-gray-400",
    },
  ]

  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Our Growth
            <span className="block text-black">Methodology</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A systematic 12-week approach to accelerate your startup's growth through data-driven experimentation
          </p>
        </div>

        <div className="space-y-16">
          {methodology.map((phase, index) => (
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
                        <div className="text-sm text-gray-500 font-medium">Step {phase.step}</div>
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
                  <div className="text-8xl font-bold text-gray-100 mb-4">{phase.step}</div>
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

// Growth Channels
function GrowthChannels() {
  const channels = [
    {
      name: "Digital Marketing",
      description: "SEO, SEM, social media, and content marketing optimization for maximum reach",
      icon: <Globe className="w-8 h-8" />,
      metrics: ["Cost per acquisition", "Conversion rates", "ROAS optimization"],
    },
    {
      name: "Product-Led Growth",
      description: "Leverage your product as the primary driver of customer acquisition and expansion",
      icon: <Rocket className="w-8 h-8" />,
      metrics: ["Product adoption", "Feature usage", "User activation"],
    },
    {
      name: "Viral & Referral",
      description: "Build viral loops and referral programs that turn customers into growth engines",
      icon: <Users className="w-8 h-8" />,
      metrics: ["Viral coefficient", "Referral rates", "Network effects"],
    },
    {
      name: "Sales Optimization",
      description: "Streamline sales processes and improve conversion rates across the funnel",
      icon: <Target className="w-8 h-8" />,
      metrics: ["Sales velocity", "Win rates", "Deal size growth"],
    },
    {
      name: "Retention & Expansion",
      description: "Maximize customer lifetime value through retention and upselling strategies",
      icon: <Shield className="w-8 h-8" />,
      metrics: ["Churn reduction", "Expansion revenue", "Customer satisfaction"],
    },
    {
      name: "Partnership Growth",
      description: "Strategic partnerships and channel development for accelerated market penetration",
      icon: <Brain className="w-8 h-8" />,
      metrics: ["Partner revenue", "Channel performance", "Market expansion"],
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
            Growth
            <span className="block text-black">Channels</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Multi-channel growth strategies tailored to your business model and target market
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {channels.map((channel, index) => (
            <Card
              key={index}
              className="group bg-white border border-gray-100 hover:border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <CardContent className="p-8">
                <div className="text-black mb-4 p-3 bg-gray-100 rounded-xl w-fit group-hover:bg-gray-200 transition-colors duration-300">
                  {channel.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{channel.name}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{channel.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-black text-sm">Key Metrics:</h4>
                  {channel.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{metric}</span>
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

// Success Metrics
function SuccessMetrics() {
  const metrics = [
    { label: "Average Revenue Growth", value: "340%", period: "in 6 months" },
    { label: "Customer Acquisition Improvement", value: "180%", period: "average increase" },
    { label: "Conversion Rate Optimization", value: "85%", period: "average improvement" },
    { label: "Customer Lifetime Value", value: "220%", period: "average increase" },
    { label: "Time to Market Reduction", value: "60%", period: "faster launches" },
    { label: "Retention Rate Improvement", value: "45%", period: "average increase" },
  ]

  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Proven
            <span className="block text-black">Results</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real growth metrics achieved by startups in our growth acceleration program
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <Card
              key={index}
              className="bg-white border-0 shadow-xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 text-center"
            >
              <CardContent className="p-8">
                <div className="text-5xl font-bold text-black mb-2">{metric.value}</div>
                <div className="text-lg font-semibold text-black mb-2">{metric.label}</div>
                <div className="text-gray-600">{metric.period}</div>
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
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">Ready to Accelerate Your Growth?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our growth acceleration methodology has helped startups achieve 3x faster growth through data-driven
                experimentation and proven strategies. Let's discuss how we can scale your startup.
              </p>
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Growth Program Benefits</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-1 h-1 bg-black rounded-full mt-2.5 mr-2"></div>
                      <span className="text-gray-600">
                        <strong>Growth Audit:</strong> Comprehensive analysis of your current metrics and opportunities
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1 h-1 bg-black rounded-full mt-2.5 mr-2"></div>
                      <span className="text-gray-600">
                        <strong>Custom Strategy:</strong> Tailored growth plan based on your business model
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1 h-1 bg-black rounded-full mt-2.5 mr-2"></div>
                      <span className="text-gray-600">
                        <strong>Rapid Testing:</strong> A/B testing and experimentation framework
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1 h-1 bg-black rounded-full mt-2.5 mr-2"></div>
                      <span className="text-gray-600">
                        <strong>Ongoing Optimization:</strong> Continuous improvement and scaling support
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <ContactForm
                title="Start Growth Acceleration"
                subtitle="Tell us about your growth challenges and goals"
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
            <span className="block text-gray-300">Your Growth?</span>
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Join successful startups that have achieved exponential growth through our proven acceleration methodology
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 text-lg px-12 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Start Growth Program
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

export default function GrowthAccelerationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ServiceHero />
      <GrowthMethodology />
      <GrowthChannels />
      <SuccessMetrics />
      <ContactSection />
      <ServiceCTA />
      <Footer />
    </div>
  )
}

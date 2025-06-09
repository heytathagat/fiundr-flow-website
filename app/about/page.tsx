"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Users,
  Award,
  Target,
  Heart,
  Lightbulb,
  Shield,
  ArrowRight,
  Star,
  Globe,
  TrendingUp,
  BarChart3,
} from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingElements } from "@/components/floating-elements"

// Hero Section
function AboutHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <FloatingElements />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-6 py-3 bg-purple-100 rounded-full text-purple-600 font-semibold mb-8 animate-fade-in">
            <Heart className="w-5 h-5 mr-2" />
            Our Story
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-black mb-8 animate-fade-in-up">
            Empowering the Next
            <span className="block text-black">Generation of Founders</span>
          </h1>

          <p
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            At FoundrFlow, we believe every entrepreneur deserves access to world-class mentorship. Our mission is to
            democratize startup success by connecting ambitious founders with experienced mentors who can provide the
            guidance needed to build thriving businesses.
          </p>
        </div>
      </div>
    </section>
  )
}

// Values Section
function ValuesSection() {
  const values = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Trust & Integrity",
      description: "We build relationships based on trust, transparency, and genuine care for your success.",
      gradient: "from-black to-gray-800",
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Innovation First",
      description: "We embrace cutting-edge approaches and technologies to deliver exceptional mentorship.",
      gradient: "from-gray-800 to-gray-600",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Community Driven",
      description: "We foster a supportive ecosystem where founders and mentors grow together.",
      gradient: "from-gray-600 to-gray-500",
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Results Focused",
      description: "Every interaction is designed to drive tangible outcomes for your startup journey.",
      gradient: "from-gray-500 to-gray-400",
    },
  ]

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-40"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Our Core Values
            {/* <span className="inline text-black"> </span> */}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide everything we do at FoundrFlow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="group bg-white border-0 shadow-xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-4"
            >
              <CardContent className="p-8 text-center relative overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>
                <div
                  className={`text-white mb-6 p-4 rounded-2xl bg-gradient-to-br ${value.gradient} shadow-lg mx-auto w-fit transform group-hover:scale-110 transition-transform duration-300`}
                >
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Team Section
function TeamSection() {
  const teamMembers = [
    {
      name: "Tathagat Kumar",
      role: "Founder & CEO",
      bio: "Startup Builder | Mentor @ Startup India & Punjab | Backed by Google | Media-Featured in 11+ Platforms | Scaling Ideas with 35+ Campuses",
      gradient: "from-black to-gray-800",
    },
    {
      name: "Prashant Singh Rana",
      role: "Co-Founder Head of Mentorship",
      bio: "Associate Head CSED Thapar",
      gradient: "from-gray-800 to-gray-600",
    },
  ]

  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Meet Our
            <span className="block text-black">Leadership Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experienced entrepreneurs and industry experts committed to your success
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="group bg-white border-0 shadow-xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.gradient} mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold shadow-xl transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">{member.name}</h3>
                  <p className="text-purple-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Stats Section with Graphs
function StatsSection() {
  const stats = [
    {
      number: "100+",
      label: "Startups Mentored",
      icon: <Users className="w-8 h-8" />,
      percentage: 85,
      color: "bg-blue-500",
    },
    {
      number: "25+",
      label: "Expert Mentors",
      icon: <Award className="w-8 h-8" />,
      percentage: 70,
      color: "bg-green-500",
    },
    {
      number: "5+",
      label: "Countries Served",
      icon: <Globe className="w-8 h-8" />,
      percentage: 60,
      color: "bg-purple-500",
    },
    {
      number: "95%",
      label: "Success Rate",
      icon: <Star className="w-8 h-8" />,
      percentage: 95,
      color: "bg-yellow-500",
    },
    {
      number: "3K+",
      label: "Hours Mentored",
      icon: <Target className="w-8 h-8" />,
      percentage: 80,
      color: "bg-red-500",
    },
  ]

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-900/50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Impact
            <span className="inline text-gray-300"> in Numbers</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-lg border-white/20 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-purple-200">{stat.icon}</div>
                  <div className="text-right">
                    <div className="text-3xl font-bold mb-1">{stat.number}</div>
                    <div className="text-purple-200 font-medium text-sm">{stat.label}</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-white/20 rounded-full h-2 mb-4">
                  <div
                    className={`h-2 rounded-full ${stat.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${stat.percentage}%` }}
                  ></div>
                </div>

                {/* Mini Chart */}
                <div className="flex items-end space-x-1 h-12">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className={`flex-1 ${stat.color} rounded-t opacity-60`}
                      style={{
                        height: `${Math.random() * 80 + 20}%`,
                        animationDelay: `${i * 0.1}s`,
                      }}
                    ></div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Growth Metrics */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">340%</div>
            <div className="text-gray-300">Average Growth Rate</div>
            <div className="mt-4 flex justify-center">
              <TrendingUp className="w-8 h-8 text-green-400" />
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">87%</div>
            <div className="text-gray-300">Funding Success Rate</div>
            <div className="mt-4 flex justify-center">
              <BarChart3 className="w-8 h-8 text-blue-400" />
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">4.2</div>
            <div className="text-gray-300">Weeks to Close</div>
            <div className="mt-4 flex justify-center">
              <Target className="w-8 h-8 text-purple-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// CTA Section
function AboutCTA() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-8">
            Ready to Join Our
            <span className="block text-black">Success Stories?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Take the first step towards transforming your startup with expert mentorship
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-black text-white hover:bg-gray-800 text-lg px-12 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-black text-black hover:bg-black hover:text-white text-lg px-12 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <AboutHero />
      <ValuesSection />
      <TeamSection />
      <StatsSection />
      <AboutCTA />
      <Footer />
    </div>
  )
}

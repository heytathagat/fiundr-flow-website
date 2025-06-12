import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, CheckCircle, Lightbulb, MessageSquare, Rocket, Shield, Sparkles, Star, Target, TrendingUp, Users } from "lucide-react";
import Link from "next/link";
import React from "react"

const  ServicesSection = () => {
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
    <>
    <Header/>
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
              <div key={index} className="group h-full">
                <Card className="h-full flex flex-col bg-white border border-gray-200 shadow-xl hover:shadow-3xl transition-all duration-700 transform group-hover:scale-[1.02] overflow-hidden relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}
                  ></div>

                  <CardContent className="p-10 relative z-10 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-start flex-col mb-8 md:flex-row">
                        <div
                          className={`p-4 rounded-3xl bg-gradient-to-br ${service.color} text-white mr-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}
                        >
                          {service.icon}
                        </div>

                        <div className="flex-1">
                          <h3 className="text-3xl mt-2 md:mt-0 font-bold text-black mb-4 group-hover:text-gray-800 transition-colors duration-300">
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
                    </div>

                    <Link href={service.href} className="block mt-auto">
                      <Button
                        className={`w-full bg-gradient-to-r ${service.color} text-white hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 rounded-full py-0 -ml-5 md:py-6 md:-ml-0 text-sm md:text-lg font-semibold`}
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
    <Footer/>
    </>
  )
}



export default ServicesSection;
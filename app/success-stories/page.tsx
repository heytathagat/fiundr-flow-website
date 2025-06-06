"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Quote, TrendingUp, Users, Target } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// Hero Section
function SuccessHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gray-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-8 animate-fade-in-up">
            Success
            <span className="block text-black">Stories</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real founders share how FoundrFlow mentorship transformed their startups and accelerated their journey to
            success.
          </p>
        </div>
      </div>
    </section>
  )
}

// Featured Success Story
function FeaturedStory() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-black font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Featured Story
              </div>
              <h2 className="text-4xl font-bold text-black mb-6">How TechFlow AI Secured $3.2M in Series A Funding</h2>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold mr-4">
                  SC
                </div>
                <div>
                  <h3 className="font-bold text-black">Sarah Chen</h3>
                  <p className="text-gray-600">Founder & CEO, TechFlow AI</p>
                </div>
              </div>
              <div className="mb-6">
                <Quote className="w-10 h-10 text-gray-300 mb-2" />
                <p className="text-lg text-gray-600 italic">
                  "FoundrFlow completely transformed our approach to fundraising. Our mentor helped us refine our pitch,
                  connect with the right investors, and navigate the complex negotiation process. Within 3 months, we
                  closed our Series A round with terms better than we ever expected."
                </p>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 text-black mr-3" />
                  <span className="text-gray-600">Revenue grew 4x in the first year after mentorship</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-black mr-3" />
                  <span className="text-gray-600">Team expanded from 5 to 25 employees</span>
                </div>
                <div className="flex items-center">
                  <Target className="w-5 h-5 text-black mr-3" />
                  <span className="text-gray-600">Expanded to 3 new international markets</span>
                </div>
              </div>
              <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-6 py-3 shadow-lg transform hover:scale-105 transition-all duration-300">
                Read Full Story
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <div>
              <Card className="bg-white border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-bold text-black mb-2">The Challenge</h4>
                      <p className="text-gray-600">
                        TechFlow AI had a revolutionary AI platform but struggled to articulate their value proposition
                        to investors. Despite having strong technology, they received multiple rejections from VCs.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-black mb-2">The Solution</h4>
                      <p className="text-gray-600">
                        Through FoundrFlow's 1-on-1 mentorship and pitch coaching, Sarah worked with Michael Rodriguez,
                        a serial entrepreneur with 3 successful exits, to refine their story and go-to-market strategy.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-black mb-2">The Results</h4>
                      <p className="text-gray-600">
                        Within 3 months, TechFlow AI secured $3.2M in Series A funding at a $15M valuation, 50% higher
                        than their initial target. They've since expanded to 3 new markets and grown their team by 400%.
                      </p>
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

// Success Stories Grid
function StoriesGrid() {
  const stories = [
    {
      company: "GreenLogistics",
      founder: "Michael Rodriguez",
      role: "Co-founder & CEO",
      funding: "$1.8M Seed",
      quote:
        "The strategic planning sessions helped us identify our true market advantage and focus our resources on the highest-impact initiatives.",
      results: [
        "Reduced customer acquisition cost by 62%",
        "Expanded to 5 major cities",
        "Achieved profitability in 18 months",
      ],
      industry: "Logistics & Supply Chain",
    },
    {
      company: "HealthTech Solutions",
      founder: "Dr. Emily Johnson",
      role: "Founder & CEO",
      funding: "$5.1M Series A",
      quote:
        "Our mentor's healthcare industry expertise was invaluable. They helped us navigate complex regulatory challenges and refine our go-to-market strategy.",
      results: [
        "Secured partnerships with 3 major hospital networks",
        "Obtained FDA approval in record time",
        "Grew user base to 50,000+ healthcare professionals",
      ],
      industry: "Healthcare",
    },
    {
      company: "FinEdge",
      founder: "David Kim",
      role: "Co-founder & CTO",
      funding: "$2.5M Seed",
      quote:
        "The growth acceleration program transformed our metrics. We implemented new acquisition channels that scaled our user base exponentially.",
      results: ["10x user growth in 6 months", "Reduced churn from 8% to 2%", "Featured in TechCrunch and Forbes"],
      industry: "FinTech",
    },
    {
      company: "EduSpark",
      founder: "Priya Sharma",
      role: "Founder & CEO",
      funding: "$3.7M Series A",
      quote:
        "FoundrFlow helped us pivot from a failing business model to one that resonated with both users and investors. This transformation saved our company.",
      results: [
        "Pivoted to B2B model with 300% revenue growth",
        "Expanded from 1 to 12 enterprise clients",
        "Increased team from 6 to 32 employees",
      ],
      industry: "EdTech",
    },
    {
      company: "RetailAI",
      founder: "James Wilson",
      role: "Co-founder & CEO",
      funding: "$4.2M Series A",
      quote:
        "The mentorship we received on pricing strategy and enterprise sales completely changed our trajectory. We went from struggling to close deals to having a waitlist.",
      results: [
        "Increased average contract value by 4x",
        "Reduced sales cycle from 9 to 3 months",
        "Achieved $1M ARR milestone in 10 months",
      ],
      industry: "Retail Technology",
    },
    {
      company: "CleanEnergy Solutions",
      founder: "Maria Gonzalez",
      role: "Founder & CEO",
      funding: "$6.5M Series A",
      quote:
        "Our mentor's connections in the energy sector opened doors we couldn't have accessed otherwise. Their guidance on navigating partnerships was game-changing.",
      results: [
        "Secured pilot projects with 2 major utility companies",
        "Received $1.2M in government grants",
        "Patent portfolio expanded to 8 approved patents",
      ],
      industry: "Clean Energy",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">More Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how founders across different industries have accelerated their growth with FoundrFlow mentorship
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {stories.map((story, index) => (
            <Card
              key={index}
              className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
            >
              <CardContent className="p-8">
                <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-gray-600 text-sm mb-4">
                  {story.industry}
                </div>
                <h3 className="text-2xl font-bold text-black mb-2">{story.company}</h3>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                    {story.founder
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-medium text-black">{story.founder}</p>
                    <p className="text-sm text-gray-600">{story.role}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-lg font-bold text-black">{story.funding}</p>
                </div>
                <div className="mb-6">
                  <Quote className="w-6 h-6 text-gray-300 mb-2" />
                  <p className="text-gray-600 italic text-sm">"{story.quote}"</p>
                </div>
                <div className="space-y-2 mb-6">
                  <h4 className="font-bold text-black text-sm">Key Results:</h4>
                  <ul className="space-y-1">
                    {story.results.map((result, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <div className="w-1 h-1 bg-black rounded-full mt-2 mr-2"></div>
                        <span className="text-gray-600">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-end">
                  <Button variant="ghost" className="text-black hover:bg-gray-100 p-0 h-auto">
                    Read More <ArrowRight className="ml-1 w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Stats Section
function StatsSection() {
  const stats = [
    { number: "500+", label: "Startups Mentored" },
    { number: "$2B+", label: "Funding Raised" },
    { number: "87%", label: "Success Rate" },
    { number: "3.5x", label: "Average Growth" },
  ]

  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Impact in Numbers</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The results speak for themselves. Here's what we've achieved with our founder community.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// CTA Section
function CTASection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-black mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Join hundreds of founders who have transformed their startups with expert mentorship from FoundrFlow.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-black text-white hover:bg-gray-800 text-lg px-12 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-black text-black hover:bg-black hover:text-white text-lg px-12 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <SuccessHero />
      <FeaturedStory />
      <StoriesGrid />
      <StatsSection />
      <CTASection />
      <Footer />
    </div>
  )
}

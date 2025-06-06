"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Award, Handshake, Building, Users } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"

// Hero Section
function PartnersHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gray-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-8 animate-fade-in-up">
            Our
            <span className="block text-black">Partners</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We collaborate with leading organizations to provide the best resources, connections, and opportunities for
            our startup community.
          </p>
        </div>
      </div>
    </section>
  )
}

// Partner Categories
function PartnerCategories() {
  const categories = [
    {
      title: "Technology",
      icon: <Globe className="w-8 h-8" />,
      description: "Technology companies that provide tools, platforms, and resources for startup growth.",
      partners: [
        { name: "Google Cloud", description: "Startup support and resources" },
        { name: "Amazon AWS", description: "Cloud credits and technical support" },
        { name: "Microsoft Azure", description: "Technology and go-to-market benefits" },
        { name: "ZOHO For Startups", description: "Marketing and sales software" },
      ],
    },
    {
      title: "Accelerators",
      icon: <Award className="w-8 h-8" />,
      description: "Accelerator programs that help startups refine their business models and scale quickly.",
      partners: [
        { name: "Google For Startups", description: "Seed-stage accelerator program" },
        { name: "Microsoft for startups", description: "Global startup accelerator network" },
        { name: "Startup India", description: "Early-stage venture fund and seed accelerator" },
        { name: "Startup Canada", description: "Innovation platform connecting startups and corporations" },
      ],
    },
    {
      title: "Corporate",
      icon: <Building className="w-8 h-8" />,
      description: "Corporate partners that provide industry expertise, pilot opportunities, and potential customers.",
      partners: [
        { name: "Sequoia Capital", description: "Early and growth-stage venture investments" },
        { name: "Andreessen Horowitz", description: "Multi-stage technology investments" },
        { name: "Accel Partners", description: "Global venture capital firm" },
        { name: "Benchmark", description: "Early stage venture investments" },
        { name: "Johnson & Johnson Innovation", description: "Healthcare innovation partner" },
        { name: "Salesforce Ventures", description: "Enterprise software ecosystem" },
        { name: "Mastercard Start Path", description: "Fintech innovation program" },
        { name: "Cisco Investments", description: "Strategic investment and partnership" },
      ],
    },
    {
      title: "Education",
      icon: <Users className="w-8 h-8" />,
      description: "Educational institutions that collaborate on research, talent, and innovation initiatives.",
      partners: [
        { name: "Thapar Institute Of Engg and Tech", description: "Research and entrepreneurship programs" },
        { name: "Thapar Innovate", description: "Technology innovation and entrepreneurship" },
        { name: "Amity University", description: "Cross-disciplinary startup support" },
      ],
    },
    {
      title: "Service Providers",
      icon: <Handshake className="w-8 h-8" />,
      description: "Professional service providers offering legal, accounting, and other essential business services.",
      partners: [
        { name: "Zoho CRM", description: "Legal services for technology companies" },
        { name: "Zoho Books", description: "Accounting and advisory services" },
        { name: "Zoho Invoices", description: "Banking for innovative companies" },
      ],
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">Our Partner Network</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've built strategic partnerships across the startup ecosystem to provide comprehensive support for
            founders
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-black mb-6">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-black mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>

                <div className="space-y-4">
                  {category.partners.map((partner, i) => (
                    <div key={i} className="border-t border-gray-100 pt-4">
                      <h4 className="font-bold text-black">{partner.name}</h4>
                      <p className="text-sm text-gray-600">{partner.description}</p>
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

// Partnership Benefits
function PartnershipBenefits() {
  const benefits = [
    {
      title: "Access to Vetted Startups",
      description: "Connect with our community of high-potential startups across various industries and stages.",
    },
    {
      title: "Co-Branding Opportunities",
      description: "Increase your visibility through co-branded events, content, and marketing initiatives.",
    },
    {
      title: "Thought Leadership",
      description: "Showcase your expertise through workshops, webinars, and speaking engagements.",
    },
    {
      title: "Innovation Pipeline",
      description: "Stay at the forefront of innovation by engaging with cutting-edge startups and technologies.",
    },
    {
      title: "Deal Flow",
      description: "For investors, gain early access to promising investment opportunities in our network.",
    },
    {
      title: "Community Engagement",
      description: "Participate in exclusive events and connect with other industry leaders in our ecosystem.",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-black font-medium mb-6">
                <Handshake className="w-4 h-4 mr-2" />
                Partnership Benefits
              </div>
              <h2 className="text-4xl font-bold text-black mb-6">Why Partner With FoundrFlow?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Join our ecosystem of innovation and entrepreneurship. As a FoundrFlow partner, you'll gain unique
                advantages while supporting the next generation of successful startups.
              </p>
              <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-6 py-3 shadow-lg transform hover:scale-105 transition-all duration-300">
                Become a Partner
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-black mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Partner With Us Section
function PartnerWithUs() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">Become a FoundrFlow Partner</h2>
              <p className="text-lg text-gray-600 mb-6">
                We're always looking to expand our network with organizations that share our mission of empowering
                startup success. If you're interested in partnering with FoundrFlow, we'd love to hear from you.
              </p>
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Partnership Types</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-1 h-1 bg-black rounded-full mt-2.5 mr-2"></div>
                      <span className="text-gray-600">
                        <strong>Strategic Partners:</strong> Long-term collaborations with deep integration
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1 h-1 bg-black rounded-full mt-2.5 mr-2"></div>
                      <span className="text-gray-600">
                        <strong>Program Partners:</strong> Specific initiative or program collaborations
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1 h-1 bg-black rounded-full mt-2.5 mr-2"></div>
                      <span className="text-gray-600">
                        <strong>Resource Partners:</strong> Provide tools, services, or resources to our startups
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1 h-1 bg-black rounded-full mt-2.5 mr-2"></div>
                      <span className="text-gray-600">
                        <strong>Event Partners:</strong> Collaborate on events, workshops, or conferences
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Partnership Process</h3>
                  <ol className="space-y-2">
                    <li className="flex items-start">
                      <span className="font-bold text-black mr-2">1.</span>
                      <span className="text-gray-600">Initial consultation to understand mutual goals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold text-black mr-2">2.</span>
                      <span className="text-gray-600">Partnership proposal and benefit structure</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold text-black mr-2">3.</span>
                      <span className="text-gray-600">Agreement finalization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold text-black mr-2">4.</span>
                      <span className="text-gray-600">Partnership launch and implementation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold text-black mr-2">5.</span>
                      <span className="text-gray-600">Regular review and optimization</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div>
              <ContactForm
                title="Partner With Us"
                subtitle="Fill out the form below and our partnerships team will get back to you within 48 hours"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PartnersHero />
      <PartnerCategories />
      <PartnershipBenefits />
      <PartnerWithUs />
      <Footer />
    </div>
  )
}

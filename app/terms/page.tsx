"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-8">Terms of Service</h1>
          <p className="text-gray-600 mb-6">Last Updated: June 4, 2025</p>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Welcome to FoundrFlow. These Terms of Service ("Terms") govern your use of our website and services. By
              accessing or using our services, you agree to be bound by these Terms.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using our services, you agree to these Terms and our Privacy Policy. If you do not agree
              to these Terms, you may not use our services.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">2. Changes to Terms</h2>
            <p>
              We may modify these Terms at any time. We will provide notice of any material changes by posting the
              updated Terms on our website or by sending you an email. Your continued use of our services after such
              modifications constitutes your acceptance of the modified Terms.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">3. Services</h2>
            <p>
              FoundrFlow provides mentorship, strategic planning, growth acceleration, and pitch coaching services to
              startups and entrepreneurs. Our services may include:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>One-on-one mentorship sessions</li>
              <li>Strategic planning workshops</li>
              <li>Growth strategy development</li>
              <li>Pitch deck creation and coaching</li>
              <li>Access to resources and tools</li>
              <li>Community events and networking</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">4. User Accounts</h2>
            <p>To access certain services, you may need to create an account. You are responsible for:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Providing accurate and complete information</li>
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use of your account</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">5. User Conduct</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on the rights of others</li>
              <li>Submit false or misleading information</li>
              <li>Interfere with the proper functioning of our services</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use our services for any illegal or unauthorized purpose</li>
              <li>Harass, abuse, or harm another person</li>
              <li>Distribute malware or other harmful code</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">6. Intellectual Property</h2>
            <p>
              Our services and content, including but not limited to text, graphics, logos, icons, images, audio clips,
              digital downloads, and software, are owned by FoundrFlow or its licensors and are protected by copyright,
              trademark, and other intellectual property laws.
            </p>
            <p className="mt-4">
              We grant you a limited, non-exclusive, non-transferable, and revocable license to use our services for
              their intended purposes. You may not:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>
                Modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative
                works from, transfer, or sell any content obtained from our services
              </li>
              <li>Use any data mining, robots, or similar data gathering and extraction methods</li>
              <li>Download any content unless expressly authorized</li>
              <li>Remove any copyright, trademark, or other proprietary notices</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">7. Payment Terms</h2>
            <p>Certain services may require payment. By purchasing our services, you agree to:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Provide accurate billing information</li>
              <li>Pay all fees in a timely manner</li>
              <li>Be responsible for any applicable taxes</li>
            </ul>
            <p>All payments are non-refundable unless otherwise specified in our refund policy or required by law.</p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, FoundrFlow and its affiliates, officers, employees, agents,
              partners, and licensors shall not be liable for any indirect, incidental, special, consequential, or
              punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible
              losses, resulting from:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Your use or inability to use our services</li>
              <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
              <li>Any interruption or cessation of transmission to or from our services</li>
              <li>Any bugs, viruses, trojan horses, or the like that may be transmitted to or through our services</li>
              <li>
                Any errors or omissions in any content or for any loss or damage incurred as a result of the use of any
                content posted, emailed, transmitted, or otherwise made available through our services
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">9. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless FoundrFlow and its affiliates, officers, employees,
              agents, partners, and licensors from and against any claims, liabilities, damages, losses, and expenses,
              including reasonable attorneys' fees, arising out of or in any way connected with your use of our services
              or violation of these Terms.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">10. Termination</h2>
            <p>
              We may terminate or suspend your access to our services immediately, without prior notice or liability,
              for any reason, including but not limited to a breach of these Terms. Upon termination, your right to use
              our services will immediately cease.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">11. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to its
              conflict of law provisions. Any dispute arising from or relating to these Terms shall be subject to the
              exclusive jurisdiction of the courts located in Rewari, Haryana.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">12. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p className="mt-4">
              <strong>Email:</strong> hello@foundrflow.in
              <br />
              <strong>Address:</strong> E902 M2K COUNTY Heights Sector 5 Dharuhera Rewari 123106
              <br />
              <strong>Phone:</strong> +91 90410-95531
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

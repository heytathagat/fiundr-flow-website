"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-8">Privacy Policy</h1>
          <p className="text-gray-600 mb-6">Last Updated: June 4, 2025</p>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              At FoundrFlow, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose,
              and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">Information We Collect</h2>

            <h3 className="text-xl font-bold text-black mt-6 mb-3">Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Register for our services</li>
              <li>Sign up for our newsletter</li>
              <li>Fill out a form or contact us</li>
              <li>Participate in surveys or promotions</li>
              <li>Provide feedback or testimonials</li>
            </ul>
            <p>
              This information may include your name, email address, phone number, company name, job title, and any
              other information you choose to provide.
            </p>

            <h3 className="text-xl font-bold text-black mt-6 mb-3">Automatically Collected Information</h3>
            <p>
              When you visit our website, we may automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referring website</li>
              <li>Pages you view</li>
              <li>Time and date of your visit</li>
              <li>Time spent on pages</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">How We Use Your Information</h2>
            <p>We may use the information we collect for various purposes, including to:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send administrative information, such as updates or changes to our policies</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Send you marketing communications</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, prevent, and address technical issues</li>
              <li>Protect against harmful or unlawful activity</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">Sharing Your Information</h2>
            <p>We may share your information with:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Service providers who perform services on our behalf</li>
              <li>Professional advisors, such as lawyers, auditors, and insurers</li>
              <li>Government bodies when required by law</li>
              <li>Business partners with your consent</li>
              <li>In connection with a business transaction, such as a merger or acquisition</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Access to your personal information</li>
              <li>Correction of inaccurate or incomplete information</li>
              <li>Deletion of your personal information</li>
              <li>Restriction of processing of your personal information</li>
              <li>Data portability</li>
              <li>Objection to processing of your personal information</li>
              <li>Withdrawal of consent</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information.
              However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot
              guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The updated version will be indicated by an updated
              "Last Updated" date. We encourage you to review this Privacy Policy periodically.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
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

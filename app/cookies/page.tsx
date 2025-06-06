"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-8">Cookie Policy</h1>
          <p className="text-gray-600 mb-6">Last Updated: June 4, 2025</p>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              This Cookie Policy explains how FoundrFlow ("we", "us", or "our") uses cookies and similar technologies on
              our website. By using our website, you consent to the use of cookies as described in this policy.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your device when you visit a website. They are widely used
              to make websites work more efficiently and provide information to the website owners. Cookies can be
              "persistent" or "session" cookies. Persistent cookies remain on your device when you go offline, while
              session cookies are deleted as soon as you close your web browser.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">How We Use Cookies</h2>
            <p>We use cookies for the following purposes:</p>

            <h3 className="text-xl font-bold text-black mt-6 mb-3">Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function properly. They enable basic functions like page
              navigation, access to secure areas of the website, and remembering your preferences. The website cannot
              function properly without these cookies.
            </p>

            <h3 className="text-xl font-bold text-black mt-6 mb-3">Performance Cookies</h3>
            <p>
              These cookies collect information about how visitors use our website, such as which pages they visit most
              often and if they receive error messages. They help us improve the performance of our website and enhance
              user experience.
            </p>

            <h3 className="text-xl font-bold text-black mt-6 mb-3">Functionality Cookies</h3>
            <p>
              These cookies allow our website to remember choices you make (such as your username, language, or region)
              and provide enhanced, personalized features. They may also be used to provide services you have requested,
              such as watching a video or commenting on a blog.
            </p>

            <h3 className="text-xl font-bold text-black mt-6 mb-3">Targeting/Advertising Cookies</h3>
            <p>
              These cookies are used to deliver advertisements that are more relevant to you and your interests. They
              are also used to limit the number of times you see an advertisement and help measure the effectiveness of
              advertising campaigns. They remember that you have visited a website and this information may be shared
              with other organizations, such as advertisers.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">Third-Party Cookies</h2>
            <p>
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics of
              our website and deliver advertisements on and through our website. These third parties may include:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Google Analytics</li>
              <li>Google Ads</li>
              <li>Facebook</li>
              <li>LinkedIn</li>
              <li>HubSpot</li>
              <li>Intercom</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">Managing Cookies</h2>
            <p>
              Most web browsers allow you to control cookies through their settings preferences. However, if you limit
              the ability of websites to set cookies, you may worsen your overall user experience, as it will no longer
              be personalized to you. It may also stop you from saving customized settings like login information.
            </p>
            <p className="mt-4">
              To manage cookies in different browsers, please consult the documentation for your specific browser:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Google Chrome</li>
              <li>Mozilla Firefox</li>
              <li>Safari</li>
              <li>Microsoft Edge</li>
              <li>Opera</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">Do Not Track</h2>
            <p>
              Some browsers have a "Do Not Track" feature that signals to websites that you visit that you do not want
              to have your online activity tracked. Our website does not currently respond to "Do Not Track" signals.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">Changes to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our
              business practices. Any changes will be posted on this page with an updated "Last Updated" date. We
              encourage you to check this page periodically for any changes.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">Contact Us</h2>
            <p>If you have any questions about our use of cookies, please contact us at:</p>
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

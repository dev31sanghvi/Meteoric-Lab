export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-gray-900">
              Meteoric
            </div>
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded text-sm font-medium transition-colors"
            >
              Book Your Free Call
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white py-16 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Stop Leaving Money on the Table.<br />
              Turn Your Expertise Into Revenue.
            </h1>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              You've built an audience. You know your stuff. But you're still trading hours for dollars and wondering when it gets easier.
            </p>
            <p className="text-base text-gray-600 mb-8 leading-relaxed">
              We'll help you package your knowledge into a profitable coaching ecosystem—courses, communities, 1:1 sessions, workshops—all working together to scale your income without scaling your hours.
            </p>
            <a
              href="#contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded text-lg font-medium transition-colors"
            >
              Let's Build Your Business (Free Strategy Call)
            </a>
            <p className="mt-4 text-sm text-gray-500">
              30-60 days to launch • 100% ROI guarantee
            </p>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              If This Sounds Like You, Keep Reading
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 border-2 border-gray-300">
              <h3 className="text-base font-bold text-gray-900 mb-2">
                ✓ You're a fitness, nutrition, yoga, or biohacking coach
              </h3>
              <p className="text-sm text-gray-700">You've already got the expertise. You just need help turning it into scalable income.</p>
            </div>
            <div className="bg-white p-6 border-2 border-gray-300">
              <h3 className="text-base font-bold text-gray-900 mb-2">
                ✓ You've got an audience (even a small one)
              </h3>
              <p className="text-sm text-gray-700">500 followers? 5,000? Doesn't matter. We'll help you monetize what you've already built.</p>
            </div>
            <div className="bg-white p-6 border-2 border-gray-300">
              <h3 className="text-base font-bold text-gray-900 mb-2">
                ✓ You're tired of one-off sessions
              </h3>
              <p className="text-sm text-gray-700">Trading time for money has a ceiling. Let's break through it with leveraged offers.</p>
            </div>
            <div className="bg-white p-6 border-2 border-gray-300">
              <h3 className="text-base font-bold text-gray-900 mb-2">
                ✓ You're ready to scale
              </h3>
              <p className="text-sm text-gray-700">You want a business that grows your income without demanding more of your time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What We Actually Do
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              No fluff. No theory. Just the exact systems you need to monetize your expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 border-2 border-gray-300">
              <div className="mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Micro-Niche Identification
              </h3>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                Stop trying to serve everyone. We'll help you find the exact niche where you can dominate and charge premium prices.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Market gap analysis</li>
                <li>• Competitor research</li>
                <li>• Positioning strategy</li>
              </ul>
            </div>

            <div className="bg-white p-6 border-2 border-gray-300">
              <div className="mb-4">
                <span className="text-3xl">💎</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Irresistible Offer Creation
              </h3>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                Your expertise is valuable. Let's package it in a way that makes people say "take my money."
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Offer structuring & pricing</li>
                <li>• Value ladder design</li>
                <li>• Sales page copywriting</li>
              </ul>
            </div>

            <div className="bg-white p-6 border-2 border-gray-300">
              <div className="mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Complete Coaching Ecosystem
              </h3>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                One product isn't enough. We'll build you a full ecosystem of offers that work together.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Online courses & programs</li>
                <li>• Private communities</li>
                <li>• 1:1 coaching & workshops</li>
                <li>• Group coaching sessions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The Exact Process (30-60 Days)
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              No endless strategy calls. We move fast and get you to revenue quickly.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <div className="bg-white p-6 border-2 border-gray-300">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 text-lg font-bold text-gray-900">
                  Week 1:
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Micro-Niche Deep Dive</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    We analyze your expertise, audience, and market to find your unfair advantage. This is where we identify the exact problem you solve better than anyone else.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 border-2 border-gray-300">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 text-lg font-bold text-gray-900">
                  Week 2-3:
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Offer Architecture</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    We build your signature offer and value ladder. This includes pricing strategy, delivery format, and positioning that makes you the obvious choice.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 border-2 border-gray-300">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 text-lg font-bold text-gray-900">
                  Week 4-5:
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">System Setup</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    We build your entire ecosystem—course platform, community setup, payment systems, and everything you need to deliver. All the tech handled for you.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 border-2 border-gray-300">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 text-lg font-bold text-gray-900">
                  Week 6-7:
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Launch Strategy</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    We plan and execute your launch. This includes messaging, launch sequence, sales page, email campaigns, and everything needed to get your first customers.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 border-2 border-gray-300">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 text-lg font-bold text-gray-900">
                  Week 8+:
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Scale & Optimize</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Once you're making money, we help you scale. More traffic, better conversions, additional offers. This is where you go from "making money" to "building wealth."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Simple, Performance-Based Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We only win when you win. That's how confident we are in our system.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white border-2 border-gray-300 p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Investment Structure</h3>
            </div>

            <div className="space-y-6 mb-8">
              <div className="border-2 border-gray-300 p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Setup Fee</h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  One-time investment to build your entire coaching ecosystem. This covers niche identification, offer creation, tech setup, and launch strategy.
                </p>
              </div>

              <div className="border-2 border-gray-300 p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Revenue Share</h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  We take a small percentage of your revenue as you grow. When you make money, we make money. Our interests are completely aligned.
                </p>
              </div>

              <div className="border-2 border-gray-300 p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2">100% ROI Guarantee</h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  If you don't at least double your investment within the first 90 days, we'll keep working with you for free until you do. Period.
                </p>
              </div>
            </div>

            <div className="bg-gray-100 border-2 border-gray-300 p-6 mb-8">
              <p className="text-center text-base font-bold text-gray-900 mb-2">
                Here's the truth:
              </p>
              <p className="text-center text-sm text-gray-700 leading-relaxed">
                Most coaches waste months (or years) trying to figure this out alone. Our clients go from confused to profitable in 30-60 days. The real question isn't "can I afford this?"—it's "can I afford not to?"
              </p>
            </div>

            <div className="text-center">
              <a
                href="#contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded text-lg font-medium transition-colors"
              >
                Get Exact Pricing on Your Free Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Real Results From Real Coaches
            </h2>
            <p className="text-lg text-gray-600">
              Don't take our word for it. Here's what happens when you stop guessing and start executing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 border-2 border-gray-300">
              <div className="mb-4">
                <div className="flex text-gray-900 text-lg mb-2">★★★★★</div>
              </div>
              <p className="text-sm text-gray-700 mb-4 italic leading-relaxed">
                "I went from making $3k/month doing 1:1 sessions to $15k/month with a course, community, and group program. My income tripled while I cut my hours in half."
              </p>
              <div className="border-t-2 border-gray-300 pt-4">
                <p className="font-bold text-gray-900 text-sm">Sarah M.</p>
                <p className="text-xs text-gray-600">Nutrition Coach, Portland</p>
              </div>
            </div>

            <div className="bg-white p-6 border-2 border-gray-300">
              <div className="mb-4">
                <div className="flex text-gray-900 text-lg mb-2">★★★★★</div>
              </div>
              <p className="text-sm text-gray-700 mb-4 italic leading-relaxed">
                "Before this, I had no idea what to charge or how to structure my offers. Now I've got a waiting list and I'm booked 3 months out. The ROI was insane—made my investment back in the first launch."
              </p>
              <div className="border-t-2 border-gray-300 pt-4">
                <p className="font-bold text-gray-900 text-sm">Marcus T.</p>
                <p className="text-xs text-gray-600">Fitness Coach, Miami</p>
              </div>
            </div>

            <div className="bg-white p-6 border-2 border-gray-300">
              <div className="mb-4">
                <div className="flex text-gray-900 text-lg mb-2">★★★★★</div>
              </div>
              <p className="text-sm text-gray-700 mb-4 italic leading-relaxed">
                "I was overwhelmed trying to do everything myself. They handled the tech, the strategy, everything. 6 weeks later I launched my first course and made $12k. Still can't believe it."
              </p>
              <div className="border-t-2 border-gray-300 pt-4">
                <p className="font-bold text-gray-900 text-sm">Jessica L.</p>
                <p className="text-xs text-gray-600">Yoga Instructor, Austin</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Questions? We've Got Answers.
            </h2>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-6 border-2 border-gray-300">
              <h3 className="text-base font-bold text-gray-900 mb-2">
                Q: What if I don't have a big audience yet?
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                You don't need thousands of followers. We've helped coaches with as few as 500 engaged followers build five-figure businesses. It's about who you serve, not how many people follow you.
              </p>
            </div>

            <div className="bg-white p-6 border-2 border-gray-300">
              <h3 className="text-base font-bold text-gray-900 mb-2">
                Q: How is this different from other coaching programs?
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                We don't just teach you—we build it with you. You're not watching videos and hoping it works. We're in the trenches doing the actual work alongside you. Plus, our 100% ROI guarantee means we're betting on your success.
              </p>
            </div>

            <div className="bg-white p-6 border-2 border-gray-300">
              <h3 className="text-base font-bold text-gray-900 mb-2">
                Q: What if I'm not tech-savvy?
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Perfect. That's why we exist. We handle all the tech setup—platforms, payment systems, automation, everything. You focus on your expertise; we handle the rest.
              </p>
            </div>

            <div className="bg-white p-6 border-2 border-gray-300">
              <h3 className="text-base font-bold text-gray-900 mb-2">
                Q: How long before I see results?
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Most clients launch within 30-60 days and see their first sales during the launch phase. Our record is a client who made their entire investment back in their first week. Your results will vary based on your audience size and engagement, but we guarantee you'll at least double your investment in 90 days.
              </p>
            </div>

            <div className="bg-white p-6 border-2 border-gray-300">
              <h3 className="text-base font-bold text-gray-900 mb-2">
                Q: What exactly is included in the setup?
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Everything. Niche positioning, offer creation, course platform setup, community platform, payment processing, email automation, sales pages, launch strategy, and ongoing support. You get the full business-in-a-box.
              </p>
            </div>

            <div className="bg-white p-6 border-2 border-gray-300">
              <h3 className="text-base font-bold text-gray-900 mb-2">
                Q: Do you work with coaches outside of fitness/nutrition/yoga?
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Our specialty is fitness, nutrition, yoga, and biohacking coaches because that's where we've had the most success. If you're in a related wellness field, let's talk—we might be able to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Stop Leaving Money on the Table?
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Book a free strategy call. We'll analyze your current situation, identify your biggest opportunities, and show you exactly how we'd build your coaching business.
          </p>
          <p className="text-base text-gray-600 mb-8 leading-relaxed">
            No pressure. No sales pitch. Just a straight conversation about whether this is right for you.
          </p>

          <div className="bg-white text-gray-900 p-8 border-2 border-gray-300 max-w-lg mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Book Your Free Strategy Call</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded text-base focus:outline-none focus:border-blue-600"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded text-base focus:outline-none focus:border-blue-600"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded text-base focus:outline-none focus:border-blue-600"
              />
              <select className="w-full px-4 py-3 border-2 border-gray-300 rounded text-base text-gray-700 focus:outline-none focus:border-blue-600">
                <option>Your Niche</option>
                <option>Fitness Coach</option>
                <option>Nutrition Coach</option>
                <option>Yoga Instructor</option>
                <option>Biohacking Coach</option>
                <option>Other Wellness</option>
              </select>
              <textarea
                rows={4}
                placeholder="Tell us about your current situation and goals..."
                className="w-full px-4 py-3 border-2 border-gray-300 rounded text-base focus:outline-none focus:border-blue-600"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded text-lg font-medium transition-colors"
              >
                Claim Your Free Strategy Session
              </button>
            </form>
            <p className="mt-6 text-xs text-gray-600">
              We only take on a limited number of clients each month. Book now to secure your spot.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">
              Meteoric
            </div>
            <p className="text-gray-400 mb-6">
              Transform Your Fitness Expertise Into a Thriving Business
            </p>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Meteoric. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

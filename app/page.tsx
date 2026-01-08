export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-lg shadow-md sticky top-0 z-50 border-b-2 border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex justify-between items-center">
            <div className="text-3xl font-extrabold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
              Meteoric
            </div>
            <a
              href="#contact"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              Book Your Free Call
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-100 via-orange-50 to-white py-24 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-6 py-2 bg-orange-100 border-2 border-orange-300 rounded-full">
              <span className="text-orange-700 font-semibold text-sm uppercase tracking-wide">Transform Your Expertise</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 leading-tight">
              Stop Leaving Money on the Table.
              <br />
              <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 bg-clip-text text-transparent">
                Turn Your Expertise Into Revenue.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-800 mb-8 leading-relaxed font-medium">
              You've built an audience. You know your stuff. But you're still trading hours for dollars and wondering when it gets easier.
            </p>
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
              We'll help you package your knowledge into a profitable coaching ecosystem—courses, communities, 1:1 sessions, workshops—all working together to scale your income without scaling your hours.
            </p>
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-12 py-6 rounded-2xl text-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-orange-500/50 hover:scale-105 transform"
            >
              Let's Build Your Business (Free Strategy Call)
            </a>
            <p className="mt-6 text-sm text-gray-600 font-semibold">
              ⚡ 30-60 days to launch • 💯 100% ROI guarantee
            </p>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              If This Sounds Like You, Keep Reading
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="group bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-xl hover:scale-105 transform">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                <span className="text-orange-500 text-2xl mr-2">✓</span>
                You're a fitness, nutrition, yoga, or biohacking coach
              </h3>
              <p className="text-gray-700 ml-8">You've already got the expertise. You just need help turning it into scalable income.</p>
            </div>
            <div className="group bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-xl hover:scale-105 transform">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                <span className="text-orange-500 text-2xl mr-2">✓</span>
                You've got an audience (even a small one)
              </h3>
              <p className="text-gray-700 ml-8">500 followers? 5,000? Doesn't matter. We'll help you monetize what you've already built.</p>
            </div>
            <div className="group bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-xl hover:scale-105 transform">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                <span className="text-orange-500 text-2xl mr-2">✓</span>
                You're tired of one-off sessions
              </h3>
              <p className="text-gray-700 ml-8">Trading time for money has a ceiling. Let's break through it with leveraged offers.</p>
            </div>
            <div className="group bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-xl hover:scale-105 transform">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                <span className="text-orange-500 text-2xl mr-2">✓</span>
                You're ready to scale
              </h3>
              <p className="text-gray-700 ml-8">You want a business that grows your income without demanding more of your time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              What We Actually Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              No fluff. No theory. Just the exact systems you need to monetize your expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 hover:scale-105 transform">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                <span className="text-4xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                Micro-Niche Identification
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Stop trying to serve everyone. We'll help you find the exact niche where you can dominate and charge premium prices.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="text-orange-500 mr-2 font-bold">•</span>
                  Market gap analysis
                </li>
                <li className="flex items-center">
                  <span className="text-orange-500 mr-2 font-bold">•</span>
                  Competitor research
                </li>
                <li className="flex items-center">
                  <span className="text-orange-500 mr-2 font-bold">•</span>
                  Positioning strategy
                </li>
              </ul>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 hover:scale-105 transform">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                <span className="text-4xl">💎</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                Irresistible Offer Creation
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Your expertise is valuable. Let's package it in a way that makes people say "take my money."
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="text-orange-500 mr-2 font-bold">•</span>
                  Offer structuring & pricing
                </li>
                <li className="flex items-center">
                  <span className="text-orange-500 mr-2 font-bold">•</span>
                  Value ladder design
                </li>
                <li className="flex items-center">
                  <span className="text-orange-500 mr-2 font-bold">•</span>
                  Sales page copywriting
                </li>
              </ul>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 hover:scale-105 transform">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                <span className="text-4xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                Complete Coaching Ecosystem
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                One product isn't enough. We'll build you a full ecosystem of offers that work together.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="text-orange-500 mr-2 font-bold">•</span>
                  Online courses & programs
                </li>
                <li className="flex items-center">
                  <span className="text-orange-500 mr-2 font-bold">•</span>
                  Private communities
                </li>
                <li className="flex items-center">
                  <span className="text-orange-500 mr-2 font-bold">•</span>
                  1:1 coaching & workshops
                </li>
                <li className="flex items-center">
                  <span className="text-orange-500 mr-2 font-bold">•</span>
                  Group coaching sessions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              The Exact Process (30-60 Days)
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              No endless strategy calls. We move fast and get you to revenue quickly.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="group flex gap-6 items-start bg-gradient-to-r from-orange-50 to-white p-8 rounded-2xl border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-xl transform hover:scale-102">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-500 text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Micro-Niche Deep Dive</h3>
                <p className="text-gray-700 leading-relaxed">
                  Week 1: We analyze your expertise, audience, and market to find your unfair advantage. This is where we identify the exact problem you solve better than anyone else.
                </p>
              </div>
            </div>

            <div className="group flex gap-6 items-start bg-gradient-to-r from-orange-50 to-white p-8 rounded-2xl border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-xl transform hover:scale-102">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-500 text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Offer Architecture</h3>
                <p className="text-gray-700 leading-relaxed">
                  Week 2-3: We build your signature offer and value ladder. This includes pricing strategy, delivery format, and positioning that makes you the obvious choice.
                </p>
              </div>
            </div>

            <div className="group flex gap-6 items-start bg-gradient-to-r from-orange-50 to-white p-8 rounded-2xl border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-xl transform hover:scale-102">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-500 text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">System Setup</h3>
                <p className="text-gray-700 leading-relaxed">
                  Week 4-5: We build your entire ecosystem—course platform, community setup, payment systems, and everything you need to deliver. All the tech handled for you.
                </p>
              </div>
            </div>

            <div className="group flex gap-6 items-start bg-gradient-to-r from-orange-50 to-white p-8 rounded-2xl border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-xl transform hover:scale-102">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-500 text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Launch Strategy</h3>
                <p className="text-gray-700 leading-relaxed">
                  Week 6-7: We plan and execute your launch. This includes messaging, launch sequence, sales page, email campaigns, and everything needed to get your first customers.
                </p>
              </div>
            </div>

            <div className="group flex gap-6 items-start bg-gradient-to-r from-orange-50 to-white p-8 rounded-2xl border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-xl transform hover:scale-102">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-500 text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform">
                5
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Scale & Optimize</h3>
                <p className="text-gray-700 leading-relaxed">
                  Week 8+: Once you're making money, we help you scale. More traffic, better conversions, additional offers. This is where you go from "making money" to "building wealth."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gradient-to-br from-orange-100 via-orange-50 to-white relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Simple, Performance-Based Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              We only win when you win. That's how confident we are in our system.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-10 border-2 border-orange-200">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-extrabold text-gray-900 mb-2">Investment Structure</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-5 p-6 bg-gradient-to-r from-orange-50 to-white rounded-2xl border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-500 text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-md">
                  ✓
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Setup Fee</h4>
                  <p className="text-gray-700 leading-relaxed">
                    One-time investment to build your entire coaching ecosystem. This covers niche identification, offer creation, tech setup, and launch strategy.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-6 bg-gradient-to-r from-orange-50 to-white rounded-2xl border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-500 text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-md">
                  ✓
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Revenue Share</h4>
                  <p className="text-gray-700 leading-relaxed">
                    We take a small percentage of your revenue as you grow. When you make money, we make money. Our interests are completely aligned.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-6 bg-gradient-to-r from-orange-50 to-white rounded-2xl border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-500 text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-md">
                  ✓
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">100% ROI Guarantee</h4>
                  <p className="text-gray-700 leading-relaxed">
                    If you don't at least double your investment within the first 90 days, we'll keep working with you for free until you do. Period.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-100 to-orange-50 border-2 border-orange-300 rounded-2xl p-8 mb-10 shadow-inner">
              <p className="text-center text-xl font-bold text-gray-900 mb-3">
                Here's the truth:
              </p>
              <p className="text-center text-gray-700 leading-relaxed text-lg">
                Most coaches waste months (or years) trying to figure this out alone. Our clients go from confused to profitable in 30-60 days. The real question isn't "can I afford this?"—it's "can I afford not to?"
              </p>
            </div>

            <div className="text-center">
              <a
                href="#contact"
                className="inline-block bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-12 py-6 rounded-2xl text-xl font-bold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
              >
                Get Exact Pricing on Your Free Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Real Results From Real Coaches
            </h2>
            <p className="text-xl text-gray-600 font-medium">
              Don't take our word for it. Here's what happens when you stop guessing and start executing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 hover:scale-105 transform">
              <div className="mb-6">
                <div className="flex text-orange-500 text-3xl mb-3">★★★★★</div>
              </div>
              <p className="text-gray-800 mb-6 italic text-lg leading-relaxed font-medium">
                "I went from making $3k/month doing 1:1 sessions to $15k/month with a course, community, and group program. My income tripled while I cut my hours in half."
              </p>
              <div className="border-t-2 border-orange-200 pt-5">
                <p className="font-bold text-gray-900 text-lg">Sarah M.</p>
                <p className="text-sm text-orange-600 font-semibold">Nutrition Coach, Portland</p>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 hover:scale-105 transform">
              <div className="mb-6">
                <div className="flex text-orange-500 text-3xl mb-3">★★★★★</div>
              </div>
              <p className="text-gray-800 mb-6 italic text-lg leading-relaxed font-medium">
                "Before this, I had no idea what to charge or how to structure my offers. Now I've got a waiting list and I'm booked 3 months out. The ROI was insane—made my investment back in the first launch."
              </p>
              <div className="border-t-2 border-orange-200 pt-5">
                <p className="font-bold text-gray-900 text-lg">Marcus T.</p>
                <p className="text-sm text-orange-600 font-semibold">Fitness Coach, Miami</p>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 hover:scale-105 transform">
              <div className="mb-6">
                <div className="flex text-orange-500 text-3xl mb-3">★★★★★</div>
              </div>
              <p className="text-gray-800 mb-6 italic text-lg leading-relaxed font-medium">
                "I was overwhelmed trying to do everything myself. They handled the tech, the strategy, everything. 6 weeks later I launched my first course and made $12k. Still can't believe it."
              </p>
              <div className="border-t-2 border-orange-200 pt-5">
                <p className="font-bold text-gray-900 text-lg">Jessica L.</p>
                <p className="text-sm text-orange-600 font-semibold">Yoga Instructor, Austin</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Questions? We've Got Answers.
            </h2>
          </div>

          <div className="space-y-5">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl border-2 border-orange-100 hover:border-orange-300 transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                <span className="text-orange-500 mr-3 text-2xl">Q:</span>
                What if I don't have a big audience yet?
              </h3>
              <p className="text-gray-700 ml-9 leading-relaxed">
                You don't need thousands of followers. We've helped coaches with as few as 500 engaged followers build five-figure businesses. It's about who you serve, not how many people follow you.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl border-2 border-orange-100 hover:border-orange-300 transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                <span className="text-orange-500 mr-3 text-2xl">Q:</span>
                How is this different from other coaching programs?
              </h3>
              <p className="text-gray-700 ml-9 leading-relaxed">
                We don't just teach you—we build it with you. You're not watching videos and hoping it works. We're in the trenches doing the actual work alongside you. Plus, our 100% ROI guarantee means we're betting on your success.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl border-2 border-orange-100 hover:border-orange-300 transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                <span className="text-orange-500 mr-3 text-2xl">Q:</span>
                What if I'm not tech-savvy?
              </h3>
              <p className="text-gray-700 ml-9 leading-relaxed">
                Perfect. That's why we exist. We handle all the tech setup—platforms, payment systems, automation, everything. You focus on your expertise; we handle the rest.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl border-2 border-orange-100 hover:border-orange-300 transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                <span className="text-orange-500 mr-3 text-2xl">Q:</span>
                How long before I see results?
              </h3>
              <p className="text-gray-700 ml-9 leading-relaxed">
                Most clients launch within 30-60 days and see their first sales during the launch phase. Our record is a client who made their entire investment back in their first week. Your results will vary based on your audience size and engagement, but we guarantee you'll at least double your investment in 90 days.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl border-2 border-orange-100 hover:border-orange-300 transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                <span className="text-orange-500 mr-3 text-2xl">Q:</span>
                What exactly is included in the setup?
              </h3>
              <p className="text-gray-700 ml-9 leading-relaxed">
                Everything. Niche positioning, offer creation, course platform setup, community platform, payment processing, email automation, sales pages, launch strategy, and ongoing support. You get the full business-in-a-box.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl border-2 border-orange-100 hover:border-orange-300 transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                <span className="text-orange-500 mr-3 text-2xl">Q:</span>
                Do you work with coaches outside of fitness/nutrition/yoga?
              </h3>
              <p className="text-gray-700 ml-9 leading-relaxed">
                Our specialty is fitness, nutrition, yoga, and biohacking coaches because that's where we've had the most success. If you're in a related wellness field, let's talk—we might be able to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-orange-600 via-orange-500 to-orange-600 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 drop-shadow-lg">
            Ready to Stop Leaving Money on the Table?
          </h2>
          <p className="text-xl md:text-2xl mb-6 opacity-95 font-medium leading-relaxed">
            Book a free strategy call. We'll analyze your current situation, identify your biggest opportunities, and show you exactly how we'd build your coaching business.
          </p>
          <p className="text-lg mb-12 opacity-90 leading-relaxed">
            No pressure. No sales pitch. Just a straight conversation about whether this is right for you.
          </p>

          <div className="bg-white text-gray-900 p-10 rounded-3xl max-w-lg mx-auto shadow-2xl border-4 border-orange-200">
            <h3 className="text-3xl font-extrabold mb-8 text-gray-900">Book Your Free Strategy Call</h3>
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all text-lg"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all text-lg"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all text-lg"
              />
              <select className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all text-lg text-gray-700">
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
                className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all text-lg"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
              >
                Claim Your Free Strategy Session
              </button>
            </form>
            <p className="mt-6 text-sm text-gray-600 font-semibold">
              ⏰ We only take on a limited number of clients each month. Book now to secure your spot.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
              Meteoric
            </div>
            <p className="text-gray-300 mb-6 text-lg font-medium">
              Transform Your Fitness Expertise Into a Thriving Business
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Meteoric. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Navigation */}
      <nav className="bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-[#2a2a2a] sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-heading font-bold text-white tracking-tight">
              Meteoric
            </div>
            <a
              href="#contact"
              className="bg-[#ff6b35] hover:bg-[#ff8555] text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg shadow-[#ff6b35]/20 hover:shadow-xl hover:shadow-[#ff6b35]/30"
            >
              Book Your Free Call
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0a0a0a] py-20 border-b border-[#2a2a2a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-white mb-6 leading-tight tracking-tight">
              Stop Leaving Money on the Table.<br />
              <span className="text-[#ff6b35]">Turn Your Expertise Into Revenue.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed font-light">
              You've built an audience. You know your stuff. But you're still trading hours for dollars and wondering when it gets easier.
            </p>
            <p className="text-base text-gray-400 mb-10 leading-relaxed">
              We'll help you package your knowledge into a profitable coaching ecosystem—courses, communities, 1:1 sessions, workshops—all working together to scale your income without scaling your hours.
            </p>
            <a
              href="#contact"
              className="inline-block bg-[#ff6b35] hover:bg-[#ff8555] text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-xl shadow-[#ff6b35]/20 hover:shadow-2xl hover:shadow-[#ff6b35]/30 hover:scale-105"
            >
              Let's Build Your Business (Free Strategy Call)
            </a>
            <p className="mt-6 text-sm text-gray-500 font-medium">
              30-60 days to launch • 100% ROI guarantee
            </p>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 bg-[#0f0f0f] border-b border-[#2a2a2a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-heading font-bold text-white mb-4">
              If This Sounds Like You, Keep Reading
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-[#1a1a1a] p-8 border border-[#2a2a2a] rounded-xl hover:border-[#ff6b35]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#ff6b35]/10">
              <h3 className="text-base font-semibold text-white mb-3">
                <span className="text-[#ff6b35] text-lg mr-2">✓</span>
                You're a fitness, nutrition, yoga, or biohacking coach
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">You've already got the expertise. You just need help turning it into scalable income.</p>
            </div>
            <div className="bg-[#1a1a1a] p-8 border border-[#2a2a2a] rounded-xl hover:border-[#ff6b35]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#ff6b35]/10">
              <h3 className="text-base font-semibold text-white mb-3">
                <span className="text-[#ff6b35] text-lg mr-2">✓</span>
                You've got an audience (even a small one)
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">500 followers? 5,000? Doesn't matter. We'll help you monetize what you've already built.</p>
            </div>
            <div className="bg-[#1a1a1a] p-8 border border-[#2a2a2a] rounded-xl hover:border-[#ff6b35]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#ff6b35]/10">
              <h3 className="text-base font-semibold text-white mb-3">
                <span className="text-[#ff6b35] text-lg mr-2">✓</span>
                You're tired of one-off sessions
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">Trading time for money has a ceiling. Let's break through it with leveraged offers.</p>
            </div>
            <div className="bg-[#1a1a1a] p-8 border border-[#2a2a2a] rounded-xl hover:border-[#ff6b35]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#ff6b35]/10">
              <h3 className="text-base font-semibold text-white mb-3">
                <span className="text-[#ff6b35] text-lg mr-2">✓</span>
                You're ready to scale
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">You want a business that grows your income without demanding more of your time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#0a0a0a] border-b border-[#2a2a2a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-heading font-bold text-white mb-4">
              What We Actually Do
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              No fluff. No theory. Just the exact systems you need to monetize your expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1a1a1a] p-8 border border-[#2a2a2a] rounded-xl hover:border-[#ff6b35]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#ff6b35]/10 group">
              <div className="mb-6">
                <span className="text-5xl">🎯</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-4">
                Micro-Niche Identification
              </h3>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                Stop trying to serve everyone. We'll help you find the exact niche where you can dominate and charge premium prices.
              </p>
              <ul className="space-y-3 text-sm text-gray-500">
                <li className="flex items-start">
                  <span className="text-[#ff6b35] mr-2">•</span>
                  <span>Market gap analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff6b35] mr-2">•</span>
                  <span>Competitor research</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff6b35] mr-2">•</span>
                  <span>Positioning strategy</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#1a1a1a] p-8 border border-[#2a2a2a] rounded-xl hover:border-[#ff6b35]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#ff6b35]/10 group">
              <div className="mb-6">
                <span className="text-5xl">💎</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-4">
                Irresistible Offer Creation
              </h3>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                Your expertise is valuable. Let's package it in a way that makes people say "take my money."
              </p>
              <ul className="space-y-3 text-sm text-gray-500">
                <li className="flex items-start">
                  <span className="text-[#ff6b35] mr-2">•</span>
                  <span>Offer structuring & pricing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff6b35] mr-2">•</span>
                  <span>Value ladder design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff6b35] mr-2">•</span>
                  <span>Sales page copywriting</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#1a1a1a] p-8 border border-[#2a2a2a] rounded-xl hover:border-[#ff6b35]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#ff6b35]/10 group">
              <div className="mb-6">
                <span className="text-5xl">🚀</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-4">
                Complete Coaching Ecosystem
              </h3>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                One product isn't enough. We'll build you a full ecosystem of offers that work together.
              </p>
              <ul className="space-y-3 text-sm text-gray-500">
                <li className="flex items-start">
                  <span className="text-[#ff6b35] mr-2">•</span>
                  <span>Online courses & programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff6b35] mr-2">•</span>
                  <span>Private communities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff6b35] mr-2">•</span>
                  <span>1:1 coaching & workshops</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff6b35] mr-2">•</span>
                  <span>Group coaching sessions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#0f0f0f] border-b border-[#2a2a2a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-heading font-bold text-white mb-4">
              The Exact Process (30-60 Days)
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              No endless strategy calls. We move fast and get you to revenue quickly.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-[#1a1a1a] p-8 border border-[#2a2a2a] rounded-xl hover:border-[#ff6b35]/50 transition-all duration-300">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 text-lg font-bold text-[#ff6b35] font-heading">
                  Week 1:
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-heading font-bold text-white mb-3">Micro-Niche Deep Dive</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    We analyze your expertise, audience, and market to find your unfair advantage. This is where we identify the exact problem you solve better than anyone else.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1a1a] p-8 border border-[#2a2a2a] rounded-xl hover:border-[#ff6b35]/50 transition-all duration-300">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 text-lg font-bold text-[#ff6b35] font-heading">
                  Week 2-3:
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-heading font-bold text-white mb-3">Offer Architecture</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    We build your signature offer and value ladder. This includes pricing strategy, delivery format, and positioning that makes you the obvious choice.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1a1a] p-8 border border-[#2a2a2a] rounded-xl hover:border-[#ff6b35]/50 transition-all duration-300">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 text-lg font-bold text-[#ff6b35] font-heading">
                  Week 4-5:
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-heading font-bold text-white mb-3">System Setup</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    We build your entire ecosystem—course platform, community setup, payment systems, and everything you need to deliver. All the tech handled for you.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1a1a] p-8 border border-[#2a2a2a] rounded-xl hover:border-[#ff6b35]/50 transition-all duration-300">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 text-lg font-bold text-[#ff6b35] font-heading">
                  Week 6-7:
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-heading font-bold text-white mb-3">Launch Strategy</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    We plan and execute your launch. This includes messaging, launch sequence, sales page, email campaigns, and everything needed to get your first customers.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1a1a] p-8 border border-[#2a2a2a] rounded-xl hover:border-[#ff6b35]/50 transition-all duration-300">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 text-lg font-bold text-[#ff6b35] font-heading">
                  Week 8+:
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-heading font-bold text-white mb-3">Scale & Optimize</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Once you're making money, we help you scale. More traffic, better conversions, additional offers. This is where you go from "making money" to "building wealth."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-[#0a0a0a] border-b border-[#2a2a2a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-heading font-bold text-white mb-4">
              Simple, Performance-Based Pricing
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              We only win when you win. That's how confident we are in our system.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-[#1a1a1a] border border-[#2a2a2a] p-10 rounded-xl">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-heading font-bold text-white mb-2">Investment Structure</h3>
            </div>

            <div className="space-y-6 mb-10">
              <div className="border border-[#2a2a2a] p-6 rounded-lg bg-[#0f0f0f]">
                <h4 className="text-lg font-heading font-bold text-white mb-3">Setup Fee</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  One-time investment to build your entire coaching ecosystem. This covers niche identification, offer creation, tech setup, and launch strategy.
                </p>
              </div>

              <div className="border border-[#2a2a2a] p-6 rounded-lg bg-[#0f0f0f]">
                <h4 className="text-lg font-heading font-bold text-white mb-3">Revenue Share</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  We take a small percentage of your revenue as you grow. When you make money, we make money. Our interests are completely aligned.
                </p>
              </div>

              <div className="border border-[#2a2a2a] p-6 rounded-lg bg-[#0f0f0f]">
                <h4 className="text-lg font-heading font-bold text-white mb-3">100% ROI Guarantee</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  If you don't at least double your investment within the first 90 days, we'll keep working with you for free until you do. Period.
                </p>
              </div>
            </div>

            <div className="bg-[#ff6b35]/10 border border-[#ff6b35]/30 p-8 mb-10 rounded-lg">
              <p className="text-center text-base font-semibold text-white mb-3">
                Here's the truth:
              </p>
              <p className="text-center text-sm text-gray-300 leading-relaxed">
                Most coaches waste months (or years) trying to figure this out alone. Our clients go from confused to profitable in 30-60 days. The real question isn't "can I afford this?"—it's "can I afford not to?"
              </p>
            </div>

            <div className="text-center">
              <a
                href="#contact"
                className="inline-block bg-[#ff6b35] hover:bg-[#ff8555] text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-xl shadow-[#ff6b35]/20 hover:shadow-2xl hover:shadow-[#ff6b35]/30 hover:scale-105"
              >
                Get Exact Pricing on Your Free Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#0f0f0f] border-b border-[#2a2a2a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-heading font-bold text-white mb-4">
              Real Results From Real Coaches
            </h2>
            <p className="text-lg text-gray-400">
              Don't take our word for it. Here's what happens when you stop guessing and start executing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1a1a1a] p-8 border border-[#2a2a2a] rounded-xl hover:border-[#ff6b35]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#ff6b35]/10">
              <div className="mb-6">
                <div className="flex text-[#ff6b35] text-lg mb-3">★★★★★</div>
              </div>
              <p className="text-sm text-gray-300 mb-6 italic leading-relaxed">
                "I went from making $3k/month doing 1:1 sessions to $15k/month with a course, community, and group program. My income tripled while I cut my hours in half."
              </p>
              <div className="border-t border-[#2a2a2a] pt-5">
                <p className="font-semibold text-white text-sm mb-1">Sarah M.</p>
                <p className="text-xs text-gray-500">Nutrition Coach, Portland</p>
              </div>
            </div>

            <div className="bg-[#1a1a1a] p-8 border border-[#2a2a2a] rounded-xl hover:border-[#ff6b35]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#ff6b35]/10">
              <div className="mb-6">
                <div className="flex text-[#ff6b35] text-lg mb-3">★★★★★</div>
              </div>
              <p className="text-sm text-gray-300 mb-6 italic leading-relaxed">
                "Before this, I had no idea what to charge or how to structure my offers. Now I've got a waiting list and I'm booked 3 months out. The ROI was insane—made my investment back in the first launch."
              </p>
              <div className="border-t border-[#2a2a2a] pt-5">
                <p className="font-semibold text-white text-sm mb-1">Marcus T.</p>
                <p className="text-xs text-gray-500">Fitness Coach, Miami</p>
              </div>
            </div>

            <div className="bg-[#1a1a1a] p-8 border border-[#2a2a2a] rounded-xl hover:border-[#ff6b35]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#ff6b35]/10">
              <div className="mb-6">
                <div className="flex text-[#ff6b35] text-lg mb-3">★★★★★</div>
              </div>
              <p className="text-sm text-gray-300 mb-6 italic leading-relaxed">
                "I was overwhelmed trying to do everything myself. They handled the tech, the strategy, everything. 6 weeks later I launched my first course and made $12k. Still can't believe it."
              </p>
              <div className="border-t border-[#2a2a2a] pt-5">
                <p className="font-semibold text-white text-sm mb-1">Jessica L.</p>
                <p className="text-xs text-gray-500">Yoga Instructor, Austin</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#0a0a0a] border-b border-[#2a2a2a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-heading font-bold text-white mb-4">
              Questions? We've Got Answers.
            </h2>
          </div>

          <div className="space-y-5">
            <div className="bg-[#1a1a1a] p-8 border border-[#2a2a2a] rounded-xl hover:border-[#ff6b35]/50 transition-all duration-300">
              <h3 className="text-base font-semibold text-white mb-3">
                Q: What if I don't have a big audience yet?
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                You don't need thousands of followers. We've helped coaches with as few as 500 engaged followers build five-figure businesses. It's about who you serve, not how many people follow you.
              </p>
            </div>

            <div className="bg-[#1a1a1a] p-8 border border-[#2a2a2a] rounded-xl hover:border-[#ff6b35]/50 transition-all duration-300">
              <h3 className="text-base font-semibold text-white mb-3">
                Q: How is this different from other coaching programs?
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                We don't just teach you—we build it with you. You're not watching videos and hoping it works. We're in the trenches doing the actual work alongside you. Plus, our 100% ROI guarantee means we're betting on your success.
              </p>
            </div>

            <div className="bg-[#1a1a1a] p-8 border border-[#2a2a2a] rounded-xl hover:border-[#ff6b35]/50 transition-all duration-300">
              <h3 className="text-base font-semibold text-white mb-3">
                Q: What if I'm not tech-savvy?
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Perfect. That's why we exist. We handle all the tech setup—platforms, payment systems, automation, everything. You focus on your expertise; we handle the rest.
              </p>
            </div>

            <div className="bg-[#1a1a1a] p-8 border border-[#2a2a2a] rounded-xl hover:border-[#ff6b35]/50 transition-all duration-300">
              <h3 className="text-base font-semibold text-white mb-3">
                Q: How long before I see results?
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Most clients launch within 30-60 days and see their first sales during the launch phase. Our record is a client who made their entire investment back in their first week. Your results will vary based on your audience size and engagement, but we guarantee you'll at least double your investment in 90 days.
              </p>
            </div>

            <div className="bg-[#1a1a1a] p-8 border border-[#2a2a2a] rounded-xl hover:border-[#ff6b35]/50 transition-all duration-300">
              <h3 className="text-base font-semibold text-white mb-3">
                Q: What exactly is included in the setup?
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Everything. Niche positioning, offer creation, course platform setup, community platform, payment processing, email automation, sales pages, launch strategy, and ongoing support. You get the full business-in-a-box.
              </p>
            </div>

            <div className="bg-[#1a1a1a] p-8 border border-[#2a2a2a] rounded-xl hover:border-[#ff6b35]/50 transition-all duration-300">
              <h3 className="text-base font-semibold text-white mb-3">
                Q: Do you work with coaches outside of fitness/nutrition/yoga?
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Our specialty is fitness, nutrition, yoga, and biohacking coaches because that's where we've had the most success. If you're in a related wellness field, let's talk—we might be able to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-20 bg-[#0f0f0f] border-b border-[#2a2a2a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading font-bold text-white mb-6">
            Ready to Stop Leaving Money on the Table?
          </h2>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Book a free strategy call. We'll analyze your current situation, identify your biggest opportunities, and show you exactly how we'd build your coaching business.
          </p>
          <p className="text-base text-gray-400 mb-10 leading-relaxed">
            No pressure. No sales pitch. Just a straight conversation about whether this is right for you.
          </p>

          <div className="bg-[#1a1a1a] text-white p-10 border border-[#2a2a2a] max-w-lg mx-auto rounded-xl">
            <h3 className="text-2xl font-heading font-bold mb-8 text-white">Book Your Free Strategy Call</h3>
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-5 py-4 border border-[#2a2a2a] bg-[#0f0f0f] text-white rounded-lg text-base focus:outline-none focus:border-[#ff6b35] transition-colors placeholder:text-gray-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-5 py-4 border border-[#2a2a2a] bg-[#0f0f0f] text-white rounded-lg text-base focus:outline-none focus:border-[#ff6b35] transition-colors placeholder:text-gray-500"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-5 py-4 border border-[#2a2a2a] bg-[#0f0f0f] text-white rounded-lg text-base focus:outline-none focus:border-[#ff6b35] transition-colors placeholder:text-gray-500"
              />
              <select className="w-full px-5 py-4 border border-[#2a2a2a] bg-[#0f0f0f] text-gray-400 rounded-lg text-base focus:outline-none focus:border-[#ff6b35] transition-colors">
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
                className="w-full px-5 py-4 border border-[#2a2a2a] bg-[#0f0f0f] text-white rounded-lg text-base focus:outline-none focus:border-[#ff6b35] transition-colors placeholder:text-gray-500"
              />
              <button
                type="submit"
                className="w-full bg-[#ff6b35] hover:bg-[#ff8555] text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-xl shadow-[#ff6b35]/20 hover:shadow-2xl hover:shadow-[#ff6b35]/30 hover:scale-105"
              >
                Claim Your Free Strategy Session
              </button>
            </form>
            <p className="mt-6 text-xs text-gray-500">
              We only take on a limited number of clients each month. Book now to secure your spot.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-3xl font-heading font-bold mb-6">
              Meteoric
            </div>
            <p className="text-gray-400 mb-8">
              Transform Your Fitness Expertise Into a Thriving Business
            </p>
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Meteoric. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          Chrome Extension
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Schedule Tabs to Open<br />
          <span className="text-[#58a6ff]">Exactly When You Need Them</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Stop manually opening tabs at the right moment. Set a schedule, get notified, and let your browser do the work — perfect for market opens, standups, and daily workflows.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Get Started — $9/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. Instant access after payment.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-3 gap-4 mb-20">
        {[
          { icon: '⏰', title: 'Alarm-based', desc: 'Uses Chrome Alarms API — fires even when the browser is idle' },
          { icon: '🔔', title: 'Notifications', desc: 'Desktop alerts before each tab opens so you are always ready' },
          { icon: '📋', title: 'Popup Manager', desc: 'Add, edit, and delete schedules from the extension popup' }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <div className="font-semibold text-white text-sm mb-1">{f.title}</div>
            <div className="text-[#8b949e] text-xs">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$9</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited scheduled tabs',
              'Chrome Alarms API scheduling',
              'Desktop notifications',
              'Popup & web dashboard',
              'Priority support'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff]">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Does it work when Chrome is closed?',
              a: 'The extension requires Chrome to be running. Chrome Alarms API fires reliably even when the browser is in the background or the computer is asleep, but Chrome itself must be open.'
            },
            {
              q: 'How do I manage my subscription?',
              a: 'After subscribing via Lemon Squeezy you will receive an email with a customer portal link where you can update billing details or cancel at any time.'
            },
            {
              q: 'Which browsers are supported?',
              a: 'Currently Chrome and Chromium-based browsers (Edge, Brave, Arc). Firefox support is on the roadmap.'
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-[#8b949e] text-sm">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm">
        &copy; {new Date().getFullYear()} Browser Tab Scheduler. All rights reserved.
      </footer>
    </main>
  )
}

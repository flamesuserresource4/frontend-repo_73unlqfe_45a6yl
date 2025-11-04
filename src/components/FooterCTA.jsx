import React from 'react';
import { ArrowRight } from 'lucide-react';

const FooterCTA = () => {
  return (
    <section id="plan" className="relative mx-auto mt-24 max-w-6xl overflow-hidden rounded-3xl px-6 py-16">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 via-fuchsia-600/20 to-cyan-500/20" />
      <div className="absolute inset-0 opacity-60 mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.2), transparent 40%), radial-gradient(circle at 80% 0%, rgba(255,255,255,0.15), transparent 40%)' }} />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h3 className="font-display text-3xl font-bold text-white sm:text-4xl">Ready to plan your Yogyakarta escape?</h3>
        <p className="mt-3 text-white/80">Tell us your travel dates, interests, and vibes. We\'ll craft a custom itinerary in 24 hours.</p>

        <form
          className="mx-auto mt-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2"
          onSubmit={(e) => {
            e.preventDefault();
            alert('Thanks! We\'ll get back to you shortly with a custom plan.');
          }}
        >
          <input
            type="text"
            required
            placeholder="Your name"
            className="col-span-1 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/60 outline-none backdrop-blur focus:ring-2 focus:ring-indigo-400/60"
          />
          <input
            type="email"
            required
            placeholder="Email address"
            className="col-span-1 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/60 outline-none backdrop-blur focus:ring-2 focus:ring-indigo-400/60"
          />
          <input
            type="text"
            placeholder="Travel dates"
            className="col-span-1 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/60 outline-none backdrop-blur focus:ring-2 focus:ring-indigo-400/60"
          />
          <input
            type="text"
            placeholder="Interests (e.g., culture, hiking)"
            className="col-span-1 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/60 outline-none backdrop-blur focus:ring-2 focus:ring-indigo-400/60"
          />
          <button
            type="submit"
            className="group col-span-1 mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-500 px-5 py-3 font-medium text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-600 sm:col-span-2"
          >
            Get my custom itinerary <ArrowRight className="transition group-hover:translate-x-0.5" size={18} />
          </button>
        </form>

        <p className="mt-6 text-xs text-white/60">By submitting, you agree to our friendly privacy policy. No spam, ever.</p>
      </div>
    </section>
  );
};

export default FooterCTA;

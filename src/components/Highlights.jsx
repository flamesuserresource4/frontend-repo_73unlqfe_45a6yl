import React from 'react';
import { MapPin, Calendar, Star, Shield, Compass, Camera } from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: 'Local Expertise',
    desc: 'Crafted by Yogya-based specialists who know every alley, eatery, and hidden gem.'
  },
  {
    icon: Calendar,
    title: 'Flexible Itineraries',
    desc: 'Private tours tailored to your pace — from sunrise hikes to slow cultural walks.'
  },
  {
    icon: Star,
    title: 'Top-rated Experiences',
    desc: 'Trusted by travelers with exceptional reviews and returning guests.'
  },
  {
    icon: Shield,
    title: 'Safe & Hassle-free',
    desc: 'Licensed guides, insured transport, and reliable support from start to finish.'
  },
  {
    icon: Compass,
    title: 'Beyond the Tourist Trail',
    desc: 'Village immersions, cave tubing, coffee farms, and creative workshops.'
  },
  {
    icon: Camera,
    title: 'Photo-worthy Moments',
    desc: 'We know the angles and best light — your memories, perfectly framed.'
  },
];

const Highlights = () => {
  return (
    <section id="highlights" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Why Travel With Us</h2>
        <p className="mt-3 text-white/70">A boutique agency blending authenticity, comfort, and a touch of adventure in Yogyakarta.</p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, desc }, i) => (
          <div
            key={i}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur transition duration-300 hover:bg-white/10"
          >
            <div className="mb-4 inline-flex rounded-xl bg-indigo-500/20 p-3 text-indigo-300 ring-1 ring-inset ring-indigo-300/30">
              <Icon size={24} />
            </div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm text-white/70">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;

import React from 'react';
import Hero from './components/Hero';
import ParallaxShowcase from './components/ParallaxShowcase';
import Highlights from './components/Highlights';
import FooterCTA from './components/FooterCTA';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      {/* Hero with interactive Spline cover */}
      <Hero />

      {/* Highlights section */}
      <Highlights />

      {/* Parallax showcase of Yogyakarta experiences */}
      <ParallaxShowcase />

      {/* Call to action */}
      <FooterCTA />

      {/* Footer */}
      <footer className="mx-auto mt-16 max-w-6xl px-6 pb-10 text-center text-sm text-white/50">
        © {new Date().getFullYear()} Yogya Boutique Travel. All rights reserved.
      </footer>
    </div>
  );
};

export default App;

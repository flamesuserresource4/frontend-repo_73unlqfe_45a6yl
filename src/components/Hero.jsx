import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-slate-900">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_20%,rgba(59,130,246,0.25),transparent)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-sm backdrop-blur"
        >
          Discover Yogyakarta • Culture • Nature • Culinary
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl font-bold leading-tight sm:text-6xl md:text-7xl"
        >
          Your Boutique Travel Agent in Yogyakarta
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg"
        >
          Curated itineraries, hidden gems, and immersive experiences across the heart of Java. Crafted with love, powered by local experts.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#plan"
            className="group rounded-full bg-indigo-500 px-6 py-3 font-medium text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-600"
          >
            Plan your trip
          </a>
          <a
            href="#highlights"
            className="rounded-full bg-white/10 px-6 py-3 font-medium text-white backdrop-blur transition hover:bg-white/20"
          >
            Explore highlights
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

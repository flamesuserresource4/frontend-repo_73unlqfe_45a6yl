import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxSection = ({ title, description, image, reverse = false }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const yBg = useTransform(scrollYProgress, [0, 1], reverse ? ['-10%', '10%'] : ['10%', '-10%']);
  const yCard = useTransform(scrollYProgress, [0, 1], reverse ? [40, -40] : [-40, 40]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.9, 1], [0, 1, 1, 0.9]);

  return (
    <section ref={ref} className="relative isolate mt-24 grid min-h-[70vh] grid-cols-1 items-center gap-10 overflow-hidden rounded-3xl bg-slate-900/60 p-6 shadow-2xl ring-1 ring-white/10 md:grid-cols-2 md:p-10">
      {/* Background image parallax */}
      <motion.div
        style={{ y: yBg, opacity, backgroundImage: `url(${image})` }}
        className="absolute inset-0 bg-cover bg-center brightness-[0.6]"
      />

      {/* Visual */}
      <div className={`relative ${reverse ? 'md:order-2' : ''}`}>
        <motion.div
          style={{ y: yCard, opacity }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur"
        >
          <img
            src={image}
            alt={title}
            className="h-[360px] w-full object-cover sm:h-[420px]"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </motion.div>
      </div>

      {/* Text */}
      <div className={`relative ${reverse ? 'md:order-1' : ''}`}>
        <motion.h3
          style={{ opacity }}
          className="text-3xl font-bold text-white sm:text-4xl"
        >
          {title}
        </motion.h3>
        <motion.p style={{ opacity }} className="mt-4 max-w-xl text-white/85">
          {description}
        </motion.p>
      </div>
    </section>
  );
};

const ParallaxShowcase = () => {
  const sections = [
    {
      title: 'Sunrise at Borobudur',
      description:
        'Witness the mist lifting over ancient stupas as the first light paints Central Java in gold. We arrange early access and guides to enrich your experience.',
      image:
        'https://images.unsplash.com/photo-1568982046962-a5d3f4f0e0e9?q=80&w=1974&auto=format&fit=crop',
    },
    {
      title: 'Mount Merapi Adventure',
      description:
        "Hop on a jeep and explore lava trails, alien rock formations, and panoramic viewpoints around Indonesia's most active volcano.",
      image:
        'https://images.unsplash.com/photo-1590141857644-52ff9c86a2f7?q=80&w=1974&auto=format&fit=crop',
      reverse: true,
    },
    {
      title: 'Royal Heritage & Batik',
      description:
        "Stroll the Sultan's Palace (Kraton), explore Taman Sari Water Castle, and learn batik from master artisans in hidden ateliers.",
      image:
        'https://images.unsplash.com/photo-1557302921-4fcd1a801a42?q=80&w=1974&auto=format&fit=crop',
    },
  ];

  return (
    <div id="showcase" className="relative mx-auto mt-20 max-w-6xl px-6">
      {sections.map((s, i) => (
        <ParallaxSection key={i} {...s} />
      ))}
    </div>
  );
};

export default ParallaxShowcase;

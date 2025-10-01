'use client';
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type NewsItem = {
  tag: string;
  title: string;
  href?: string;
};

const items: NewsItem[] = [
  {
    tag: 'PARTNER',
    title:
      'Our client Surfair in partnership with Palantir started building Surf OS, operating system for the Advanced Air Mobility industry.',
  },
  {
    tag: 'PARTNER',
    title:
      'Hello Robo named UX & Product Design Partner for Bedrock Robotics',
  },
  {
    tag: 'PARTNER',
    title:
      'Hello Robo collaborates with AeroNext on pilot interfaces for urban eVTOL operations',
  },
];

const Arrow = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="shrink-0">
    <path
      d="M5 12h12M13 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const NewsRow: React.FC<NewsItem> = ({ tag, title, href = '#' }) => {
  return (
    <a
      href={href}
      className="group block w-full px-6 md:px-12 lg:px-16 py-12 md:py-14 lg:py-16 transition-colors duration-200 bg-transparent hover:bg-zinc-900/40"
    >
      <div className="grid grid-cols-12 gap-20 items-start">
        {/* Left tag */}
        <div className="col-span-12 md:col-span-3 lg:col-span-2">
          <span className="text-[16px] tracking-[0.14em] text-zinc-400 font-dm-mono">
            {tag}
          </span>
        </div>

        {/* Title */}
        <div className="col-span-10 md:col-span-8 lg:col-span-9">
          <h3
            className="dm-sans leading-tight text-zinc-100 transition-colors duration-200 group-hover:text-zinc-50"
            style={{
              fontSize: 'clamp(1.6rem, 2.6vw, 3rem)',
              letterSpacing: '-0.01em',
            }}
          >
            {title}
          </h3>
        </div>

        {/* Arrow */}
        <div className="col-span-2 md:col-span-1 flex justify-end">
          <div className="text-zinc-400 group-hover:text-zinc-200 transition-colors text-2xl">
            <Arrow />
          </div>
        </div>
      </div>
    </a>
  );
};

const NewsList: React.FC = () => {
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
  if (!triggerRef.current) return;

  let lastY = window.scrollY;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const currentY = window.scrollY;
        const scrollingDown = currentY > lastY;
        const scrollingUp = currentY < lastY;
        lastY = currentY;

        if (entry.isIntersecting && scrollingDown) {
          setShrink(true); // shrink while going down
        } else if (!entry.isIntersecting && scrollingUp) {
          setShrink(false); // expand back only if scrolling up
        }
      });
    },
    { threshold: 0.6 }
  );

  observer.observe(triggerRef.current);

  return () => {
    if (triggerRef.current) observer.unobserve(triggerRef.current);
  };
}, []);


  return (
    <section className="relative w-screen bg-white text-zinc-100 overflow-hidden">
      {/* White panel that animates */}
      <motion.div
        animate={shrink ? { scale: 0.9, y: -50 } : { scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="relative z-10 bg-zinc-950 rounded-b-2xl shadow-2xl"
      >
        <div className="max-w-[2000px] mx-8 py-32 md:py-42">
          {/* Title */}
          <div className="px-6 md:px-12 lg:px-16 mb-12 md:mb-16">
            <h2
              className="text-white font-light tracking-tight font-dm-sans"
              style={{
                fontSize: 'clamp(2.8rem, 6.2vw, 5.2rem)',
                letterSpacing: '-0.02em',
              }}
            >
              In the news
            </h2>
          </div>

          {/* Rows */}
          <div className="divide-y divide-zinc-200">
            {items.map((n, i) => (
              <div key={i} ref={i === 2 ? triggerRef : null}>
                <NewsRow {...n} />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default NewsList;

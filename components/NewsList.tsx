'use client';

import React, { useRef, useEffect, useState } from 'react';

type NewsItem = { tag: string; title: string; href?: string };

const items: NewsItem[] = [
  { tag: 'PARTNER', title: 'Our client Surfair in partnership with Palantir started building Surf OS, operating system for the Advanced Air Mobility industry.' },
  { tag: 'PARTNER', title: 'Hello Robo named UX & Product Design Partner for Bedrock Robotics' },
  { tag: 'PARTNER', title: 'Hello Robo collaborates with AeroNext on pilot interfaces for urban eVTOL operations' },
];

const Arrow = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="shrink-0">
    <path d="M5 12h12M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const NewsRow: React.FC<NewsItem> = ({ tag, title, href = '#' }) => (
  <a
    href={href}
    className="group block w-full px-6 md:px-12 lg:px-16 py-12 md:py-14 lg:py-16 transition-colors duration-200 bg-transparent hover:bg-zinc-900/40"
  >
      <div className="grid grid-cols-12 gap-20 items-start">
        <div className="col-span-12 md:col-span-3 lg:col-span-2">
          <span className="text-[16px] tracking-[0.14em] text-zinc-400 font-dm-mono">{tag}</span>
        </div>
        <div className="col-span-10 md:col-span-8 lg:col-span-9">
          <h3
            className="dm-sans leading-tight text-zinc-100 transition-colors duration-200 group-hover:text-zinc-50"
            style={{ fontSize: 'clamp(1.4rem, 2vw, 2.5rem)', letterSpacing: '-0.01em' }}
          >
            {title}
          </h3>
        </div>
        <div className="col-span-2 md:col-span-1 flex justify-end">
          <div className="news-arrow text-zinc-400 group-hover:text-zinc-200 transition-colors text-2xl"><Arrow /></div>
        </div>
      </div>
    </a>
);

const NewsList: React.FC = () => {
  const helloRoboRef = useRef<HTMLDivElement | null>(null);
  const partnerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!helloRoboRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(helloRoboRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative w-full bg-white overflow-hidden min-h-[150vh]">
      {/* Partner dark panel */}
      <div
        ref={partnerRef}
        className="sticky top-0 z-10 w-full bg-zinc-950 shadow-2xl"
        style={{
          borderBottomLeftRadius: '1rem',
          borderBottomRightRadius: '1rem',
          transformOrigin: 'top center',
          transform: isVisible ? 'scale(0.85) translateY(-80px)' : 'scale(1) translateY(0)',
          transition: 'transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
          willChange: 'transform'
        }}
      >
        <div className="max-w-[2000px] mx-auto px-8 py-32 md:py-42">
          <div className="px-6 md:px-12 lg:px-16 mb-12 md:mb-16">
            <h2
              className="text-white font-light tracking-tight font-dm-sans"
              style={{ fontSize: 'clamp(2rem, 4.8vw, 4rem)', letterSpacing: '-0.02em' }}
            >
              In the news
            </h2>
          </div>

          <div className="divide-y divide-zinc-200">
            {items.map((n, i) => (
              <NewsRow key={i} {...n} />
            ))}
          </div>
        </div>
      </div>

      {/* HELLO ROBO marquee section */}
      <div ref={helloRoboRef} className="w-full overflow-hidden whitespace-nowrap py-16 bg-white">
        <div className="animate-marquee text-purple-600 text-[12rem] font-semibold tracking-tight font-dm-sans leading-none">
          HELLO ROBO HELLO ROBO HELLO ROBO HELLO ROBO HELLO ROBO HELLO ROBO HELLO ROBO HELLO ROBO HELLO ROBO HELLO ROBO
        </div>
      </div>

      {/* White background layer */}
      <div className="absolute inset-0 bg-white -z-10" />

      {/* Marquee animation */}
      <style jsx>{`
        .animate-marquee {
          display: inline-block;
          min-width: 200%;
          white-space: nowrap;
          animation: marquee 120s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default NewsList;

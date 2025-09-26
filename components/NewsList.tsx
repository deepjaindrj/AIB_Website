'use client';
import React from 'react';

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
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="shrink-0">
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
      className={[
        'group block w-full',
        'px-6 md:px-12 lg:px-16',    // wider side padding
        'py-12 md:py-14 lg:py-16',  // taller rows
        'transition-colors duration-200',
        'bg-transparent hover:bg-zinc-900/40',
      ].join(' ')}
    >
      <div className="grid grid-cols-12 gap-6 items-start">
        {/* Left tag */}
        <div className="col-span-12 md:col-span-3 lg:col-span-2">
          <span className="text-[11px] tracking-[0.14em] text-zinc-400">
            {tag}
          </span>
        </div>

        {/* Title */}
        <div className="col-span-10 md:col-span-8 lg:col-span-9">
          <h3
            className="font-light leading-tight text-zinc-100 transition-colors duration-200 group-hover:text-zinc-50"
            style={{
              fontFamily:
                'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              fontSize: 'clamp(1.6rem, 2.6vw, 3rem)',   // bigger headline
              letterSpacing: '-0.01em',
            }}
          >
            {title}
          </h3>
        </div>

        {/* Arrow */}
        <div className="col-span-2 md:col-span-1 flex justify-end">
          <div className="text-zinc-400 group-hover:text-zinc-200 transition-colors">
            <Arrow />
          </div>
        </div>
      </div>
    </a>
  );
};

const NewsList: React.FC = () => {
  return (
    <section className="w-screen bg-zinc-950 text-zinc-100">
      <div className="max-w-[1600px] mx-auto py-20 md:py-24">
        {/* Title */}
        <div className="px-6 md:px-12 lg:px-16 mb-12 md:mb-16">
          <h2
            className="text-zinc-100 font-light tracking-tight"
            style={{
              fontFamily:
                'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              fontSize: 'clamp(2.8rem, 6.2vw, 5.5rem)', // slightly larger section title
              letterSpacing: '-0.02em',
            }}
          >
            In the news
          </h2>
        </div>

        {/* Line-separated, larger rows */}
        <div className="divide-y divide-zinc-800/60">
          {items.map((n, i) => (
            <NewsRow key={i} {...n} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsList;

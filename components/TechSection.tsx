'use client';
import React from 'react';

const techTags = [
  'AI',
  'ROBOTICS',
  'SPACE ROBOTICS',
  'DEFENSE TECH',
  'MANUFACTURING',
  'FINTECH',
  'VCS'
];

const TagItem: React.FC<{ tag: string }> = ({ tag }) => (
  <div className="relative mb-6 w-full h-20 group">
    <svg 
      width="100%" 
      height="100%" 
      viewBox="0 0 510 109" 
      fill="none" 
      className="absolute inset-0 text-zinc-700 group-hover:text-purple-600 transition-colors duration-300"
    >
      <g clipPath="url(#clip0_6806_915)">
        <path 
          d="M0.400393 19.8237L18.4814 0.399903L491.063 0.399914L509.6 19.8257L509.6 89.1734L491.063 108.599L18.4814 108.599L0.400391 89.1753L0.400393 19.8237Z" 
          stroke="currentColor" 
          strokeWidth="0.8"
        />
      </g>
      <defs>
        <clipPath id="clip0_6806_915">
          <rect width="510" height="109" fill="white"/>
        </clipPath>
      </defs>
    </svg>
    <div className="absolute inset-0 flex items-center justify-center">
  <span className="text-zinc-200 text-base font-medium tracking-wide" style={{ fontFamily: 'DM Sans' }}>
        {tag}
      </span>
    </div>
  </div>
);

const TechSection = () => {
  return (
    <section className="min-h-screen bg-zinc-950 flex items-center justify-center">
      <div className="w-full max-w-8xl mx-auto px-16 h-[80vh] border border-zinc-800">
        <div className="grid grid-cols-2 gap-8 h-full">
          {/* Left side - Text content */}
          <div className="flex flex-col justify-center items-start">
            <div className="space-y-8">
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-light text-zinc-100 tracking-tight leading-none" style={{ fontFamily: 'DM Sans' }}>
                Hard tech
              </h1>
              
              <div className="max-w-lg">
                <p className="text-lg lg:text-xl text-zinc-400 leading-relaxed" style={{ fontFamily: 'DM Mono' }}>
                  From robotics and AI to automation, aerospace, and advanced systems. Our work translates deep tech into clear, usable, and market-ready interfaces.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Scrolling tags */}
          <div className="flex justify-end items-center">
            <div className="relative w-[600px] h-[80vh] overflow-hidden">
              <div className="absolute inset-0 animate-scroll-down">
                <div className="flex flex-col">
                  {techTags.map((tag, i) => (
                    <TagItem key={`first-${i}`} tag={tag} />
                  ))}
                </div>
                <div className="flex flex-col">
                  {techTags.map((tag, i) => (
                    <TagItem key={`second-${i}`} tag={tag} />
                  ))}
                </div>
                <div className="flex flex-col">
                  {techTags.map((tag, i) => (
                    <TagItem key={`third-${i}`} tag={tag} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-down {
          0% {
            transform: translateY(-66.666%);
          }
          100% {
            transform: translateY(0%);
          }
        }
        
        .animate-scroll-down {
          animation: scroll-down 30s linear infinite;
        }
        
        .max-w-8xl {
          max-width: 88rem;
        }
      `}</style>
    </section>
  );
};

export default TechSection;
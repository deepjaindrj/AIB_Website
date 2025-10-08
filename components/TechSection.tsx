'use client';
import React, { useEffect, useRef, useState } from 'react';

const techTags = [
  'AI',
  'ROBOTICS',
  'SPACE ROBOTICS',
  'DEFENSE TECH',
  'MANUFACTURING',
  'FINTECH',
  'VCS'
];

const TagItem: React.FC<{ tag: string; index: number }> = ({ tag, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={itemRef} className="relative mb-6 w-full h-20 group">
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 510 109" 
        fill="none" 
        className="absolute inset-0 text-zinc-700 group-hover:text-purple-600 transition-colors duration-300"
      >
        <defs>
          <clipPath id={`clip-${index}`}>
            <rect width="510" height="109" fill="white"/>
          </clipPath>
        </defs>
        <g clipPath={`url(#clip-${index})`}>
          <path 
            d="M0.400393 19.8237L18.4814 0.399903L491.063 0.399914L509.6 19.8257L509.6 89.1734L491.063 108.599L18.4814 108.599L0.400391 89.1753L0.400393 19.8237Z" 
            stroke="currentColor" 
            strokeWidth="0.8"
            strokeDasharray="1600"
            strokeDashoffset={isVisible ? 0 : 1600}
            style={{
              transition: 'stroke-dashoffset 1.2s ease-out',
              transitionDelay: `${index * 0.1}s`
            }}
          />
        </g>
      </svg>
      <div 
        className="absolute inset-0 flex items-center justify-center"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.6s ease-out',
          transitionDelay: `${index * 0.1 + 0.6}s`
        }}
      >
        <span className="text-zinc-200 text-base font-medium tracking-wide font-dm-mono">
          {tag}
        </span>
      </div>
    </div>
  );
};

const TechSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen bg-zinc-950 flex items-center justify-center overflow-hidden">
      <div 
        className="w-[90vw] mx-auto px-16 h-[80vh] border border-zinc-800"
        style={{
          transform: isVisible ? 'translateY(0)' : 'translateY(100px)',
          opacity: isVisible ? 1 : 0,
          transition: 'transform 1.2s cubic-bezier(0.22, 1, 0.36, 1), opacity 1.2s ease-out'
        }}
      >
        <div className="grid grid-cols-2 gap-8 h-full">
          {/* Left side - Text content */}
          <div className="flex flex-col justify-center items-start">
            <div className="space-y-8">
              <h1 className="text-6xl font-light text-zinc-100 tracking-tight leading-none font-dm-sans" >
                Hard tech
              </h1>
              
              <div className="max-w-lg">
                <p className="text-md  text-zinc-400 leading-[1.5] font-dm-mono">
                  From robotics and AI to automation, aerospace, and advanced systems. Our work translates deep tech into clear, usable, and market-ready interfaces.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Scrolling tags */}
          <div className="flex justify-end items-center">
            <div className="relative w-[600px] h-[80vh] overflow-hidden">
              <div className="absolute inset-0 animate-scroll-down font-dm-mono">
                <div className="flex flex-col">
                  {techTags.map((tag, i) => (
                    <TagItem key={`first-${i}`} tag={tag} index={i} />
                  ))}
                </div>
                <div className="flex flex-col">
                  {techTags.map((tag, i) => (
                    <TagItem key={`second-${i}`} tag={tag} index={i + techTags.length} />
                  ))}
                </div>
                <div className="flex flex-col">
                  {techTags.map((tag, i) => (
                    <TagItem key={`third-${i}`} tag={tag} index={i + techTags.length * 2} />
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
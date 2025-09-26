'use client';
import React from 'react';

const techTags: string[] = [
  'ROBOTICS',
  'SPACE ROBOTICS',
  'DEFENSE TECH',
  'MANUFACTURING',
  'FINTECH',
  'VCS',
  'AI',
  'AEROSPACE',
  'BIOTECH',
  'QUANTUM',
  'CYBERSECURITY',
  'CLEANTECH',
  'HARDWARE',
];

const TagItem: React.FC<{ tag: string }> = ({ tag }) => (
  <div
    className="tag-item relative px-8 h-16 mb-5 bg-zinc-900/10 backdrop-blur-[1px] border border-zinc-700/35 hover:border-orange-300 text-zinc-200 flex items-center select-none transition-all duration-200"
    style={{
      borderRadius: 18,
      clipPath:
        'polygon(6% 0%, 94% 0%, 100% 12%, 100% 88%, 94% 100%, 6% 100%, 0% 88%, 0% 12%)',
      boxShadow:
        'inset 0 1px 0 rgba(255,255,255,0.03), 0 0 0 1px rgba(255,255,255,0.02)',
    }}
  >
    <span className="text-[15px] tracking-[0.04em] font-medium">{tag}</span>
    <span
      className="pointer-events-none absolute inset-0 rounded-[18px]"
      style={{
        boxShadow:
          'inset 0 0 0 1px rgba(255,255,255,0.02), inset 0 -8px 24px rgba(0,0,0,0.25)',
      }}
    />
  </div>
);

const TechSection: React.FC = () => {
  return (
    <section className="w-screen h-screen bg-zinc-950 flex items-center justify-center p-4">
      <div
        className="tech-board group relative w-full h-full max-w-[1200px] mx-auto rounded-[28px] p-4 md:p-10 lg:p-10"
        style={{
          outline: '3px solid rgba(113,113,122,0.26)',
          outlineOffset: -22,
          borderRadius: 28,
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 rounded-[28px] transition-colors duration-200"
          style={{ outline: '3px solid transparent', outlineOffset: -22 }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 h-full items-center gap-8 lg:gap-10 mx-auto">
          <div className="flex flex-col justify-center items-center text-center h-full lg:-translate-x-4">
            <div className="space-y-6">
              <h1
                className="text-zinc-100 font-light tracking-tight"
                style={{
                  fontFamily:
                    'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
                  fontSize: 'clamp(3rem, 6.5vw, 7rem)',
                  lineHeight: 1.02,
                  letterSpacing: '-0.03em',
                }}
              >
                Hard tech
              </h1>

              <p
                className="text-zinc-400 max-w-xl mx-auto"
                style={{
                  fontFamily:
                    'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
                  fontSize: 'clamp(16px, 1.7vw, 19px)',
                  lineHeight: 1.6,
                  letterSpacing: '-0.005em',
                }}
              >
                From robotics and AI to automation, aerospace, and advanced
                systems. Our work translates deep tech into clear, usable, and
                market‑ready interfaces.
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end h-full items-center lg:translate-x-4">
            <div className="w-[380px] max-w-[42vw] h-full max-h-[calc(100vh-8rem)] relative overflow-hidden">
              <div className="vertical-marquee h-full">
                <div className="vertical-marquee-content">
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
                </div>
              </div>

              <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-zinc-950 to-transparent pointer-events-none z-10" />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none z-10" />
            </div>
          </div>
        </div>

        <div
          className="pointer-events-none absolute inset-3 rounded-[22px]"
          style={{ boxShadow: 'inset 0 0 0 3px rgba(255,255,255,0.05)' }}
        />
      </div>

      <style jsx>{`
        .tech-board:hover {
          outline-color: rgba(255, 149, 0, 0.98);
        }
        .tech-board:hover > div:first-of-type {
          outline-color: rgba(255, 149, 0, 0.98);
        }

        .vertical-marquee {
          position: relative;
          overflow: hidden;
          mask-image: linear-gradient(
            to bottom,
            transparent,
            white 10%,
            white 90%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to bottom,
            transparent,
            white 10%,
            white 90%,
            transparent
          );
        }
        .vertical-marquee-content {
          display: flex;
          flex-direction: column;
          animation: scroll-up 22s linear infinite;
        }
        .vertical-marquee:hover .vertical-marquee-content {
          animation-play-state: paused;
        }

        .tag-item:hover {
          border-color: rgba(255, 149, 0, 0.95);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.04),
            0 0 0 1px rgba(255, 149, 0, 0.18),
            0 8px 24px rgba(0, 0, 0, 0.35);
          transform: translateZ(0) scale(1.03);
          background: rgba(24, 24, 27, 0.35);
        }

        @keyframes scroll-up {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @media (max-width: 1024px) {
          .tag-item {
            height: 60px;
          }
        }
      `}</style>
    </section>
  );
};

export default TechSection;
